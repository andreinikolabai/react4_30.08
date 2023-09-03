import React, { useState, useEffect } from "react";
import "./style.sass";
import Statistics from "./../Statistics/Statistics";
import ThemeMode from "./../ThemeMode/ThemeMode";

import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../../../constants/TodoConstants";

export default function List() {
    const [list, setList] = useState([]);
    const [themeMode, setThemeMode] = useState("light");

    useEffect(() => {
        async function fetchData() {
            try {
                let request = await fetch(
                    "https://61498bf2035b3600175ba32f.mockapi.io/todo"
                );
                let response = await request.json();

                setList(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const itemClass = (item) => {
        const classes = [];

        classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);

        return classes.join(` `);
    };

    const handleDeleteClick = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleCompleteClick = (index) => {
        const newList = [...list];
        newList[index].completed = true;
        setList(newList);
    };

    return list.length ? (
        <div>
            <ThemeMode themeMode={themeMode} changeThemeMode={setThemeMode} />
            <Statistics list={list} />
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index} className={itemClass(item)}>
                        <td className={itemClass(item)}>
                            <strong>{item.rating}</strong>
                            {item.title}
                        </td>
                        <td>
                            {itemClass(item) === ITEM_COMPLETED ? (
                                <button onClick={() => handleDeleteClick(index)}>Delete</button>
                            ) : (
                                <button onClick={() => handleCompleteClick(index)}>Complete</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    ) : null;
}