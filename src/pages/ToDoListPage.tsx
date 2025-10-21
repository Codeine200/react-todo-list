import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import React, {useState} from "react";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDoItem} from "../models/todo-item";

export const ToDoListPage = () => {
    const [tasks, setTasks] = useState<ToDoItem[]>([]);

    const addTask = (text: string) => {
        const newTask: ToDoItem = {
            id: tasks.length,
            text: text,
            isDone: false
        }
        setTasks([...tasks, newTask]);
    }

    const removeTask = (task: ToDoItem) => {
        const newTasks = tasks.filter(item => {
            if (item.id !== task.id) {
                return item;
            }
        });
        setTasks(newTasks);
    }

    const completeTask = (task: ToDoItem) => {
        const updateTasks = tasks.map(item => {
            if (item.id === task.id) {
                item.isDone = !item.isDone;
            }
            return item;
        });
        setTasks(updateTasks);
    }

    return (
        <>
            <Header />
            <Form addTask={addTask}/>
            <ToDoList tasks={tasks} removeTask={removeTask} completeTask={completeTask} />
        </>
    )
}