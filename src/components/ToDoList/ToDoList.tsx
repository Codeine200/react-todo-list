import {ToDoListItem} from "./ToDoListItem/ToDoListItem";
import styles from './ToDoList.module.css'
import {ToDoItem} from "../../models/todo-item";

export const ToDoList = (props : {
    tasks : ToDoItem[],
    removeTask: (task: ToDoItem) => void,
    completeTask: (task: ToDoItem) => void
}) => {
    const { tasks, removeTask, completeTask } = props;

    return (
        <div className={styles['todo-list']}>
            {
                tasks.map((task, index) => {
                    return (
                        <ToDoListItem item={task}
                                      key={index}
                                      removeTask={removeTask}
                                      completeTask={completeTask}
                        />
                    )
                })
            }

        </div>
    )
}