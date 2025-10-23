import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import React, {useContext, useState} from "react";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDoItem} from "../models/todo-item";
import {ToastContext, ToastProvider} from "../providers/Toast";
import {Toast} from "../components/Toast/Toast";

export const ToDoListPage = () => {
    const [tasks, setTasks] = useState<ToDoItem[]>([]);
    const { showToast } = useContext(ToastContext);

    const addTask = (text: string) => {
        const newTask: ToDoItem = {
            id: tasks.length,
            text: text,
            isDone: false
        }
        setTasks([...tasks, newTask]);
        showToast('Task was added successfully');
    }

    const removeTask = (task: ToDoItem) => {
        const newTasks = tasks.filter(item => {
            if (item.id !== task.id) {
                return item;
            }
        });
        setTasks(newTasks);
        showToast('Task was removed successfully');
    }

    const completeTask = (task: ToDoItem) => {
        const updateTasks = tasks.map(item => {
            if (item.id === task.id) {
                item.isDone = !item.isDone;
            }
            return item;
        });
        setTasks(updateTasks);
        showToast('Task marked as done');
    }

    return (
        <>
            <Header />
            <Form addTask={addTask}/>
            <ToDoList tasks={tasks} removeTask={removeTask} completeTask={completeTask} />
            <Toast />
        </>
    )
}