import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import React from "react";
import {ToDoList} from "../components/ToDoList/ToDoList";

export const ToDoListPage = () => {
    return (
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    )
}