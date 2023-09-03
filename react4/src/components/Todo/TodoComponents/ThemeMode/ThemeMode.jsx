import React, {useState} from "react";

import {
    FILTER_TODO_LIGHT,
    FILTER_TODO_DARK,
} from "../../../../constants/TodoConstants";

export default function ThemeMode(){
    const [filter, setFilter] = useState(FILTER_TODO_LIGHT);

    const handleFilter = event => setFilter(event.target.value);


// export default function ThemeMode({ themeMode, changeThemeMode }) {
//     const handleChange = (event) => {
//         changeThemeMode(event.target.value);
//     };

    return (
        <div>
            <label htmlFor="">
                Choose theme mode:{" "}
                <select defaultValue={filter} onChange={handleFilter}>
                {/*<select value={themeMode} onChange={handleChange}>*/}
                    <option value={FILTER_TODO_LIGHT}>Light</option>
                    <option value={FILTER_TODO_DARK}>Dark</option>
                </select>
            </label>
        </div>
    );
}