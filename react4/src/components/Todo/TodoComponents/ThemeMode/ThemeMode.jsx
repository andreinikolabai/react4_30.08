import React, {useState} from "react";

import {
    FILTER_TODO_LIGHT,
    FILTER_TODO_DARK,
} from "../../../../constants/TodoConstants";

export default function ThemeMode(){
    const [filter, setFilter] = useState(FILTER_TODO_LIGHT);

    const handleFilter = e => setFilter(e.target.value);


    return (
        <div>
            <label htmlFor="">
                Choose theme mode:{" "}
                <select defaultValue={filter} onChange={handleFilter}>
                    <option value={FILTER_TODO_LIGHT}>Light</option>
                    <option value={FILTER_TODO_DARK}>Dark</option>
                </select>
            </label>
        </div>
    );
}