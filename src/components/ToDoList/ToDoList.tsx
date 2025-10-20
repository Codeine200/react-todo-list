import {ToDoListItem} from "./ToDoListItem/ToDoListItem";
import './ToDoList.css'
export const ToDoList = () => {
    return (
        <div className="todo-list container">
            <ToDoListItem />
        </div>
    )
}