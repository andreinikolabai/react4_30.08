import React from 'react'
import List from './Todo/TodoComponents/List/List'
import ThemeMode from "./Todo/TodoComponents/ThemeMode/ThemeMode";
import Statistics from "./Todo/TodoComponents/Statistics/Statistics";

export default function Todo() {

    return (
        <>
            <ThemeMode />
            <Statistics />
            <List />
        </>
    )
}