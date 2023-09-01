import React, {useState, useEffect} from "react";
import "./style.sass"

export default function List({newTodo, filter}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let request = await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/exampleTodo`),
                    response = await request.json();

                setList(response);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    const itemClass = (item) => {
        const classes = [];

        classes.push(item.completed ? `completed` : `progress`);

        return classes.join(` `);
    }

    return list.length
        ? <ul>
            {list.map((item, index) => <li key={index} className={itemClass(item)}>
              <strong>{item.rating}</strong>{item.title}
            <button>Delete</button>
            </li>)}
        </ul>
        : null;
}