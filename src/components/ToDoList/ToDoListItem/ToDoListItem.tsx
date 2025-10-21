import styles from './ToDoListItem.module.css'
import {ToDoItem} from "../../../models/todo-item";

export const ToDoListItem = (props:
    {
        item: ToDoItem,
        removeTask: (task: ToDoItem) => void,
        completeTask: (task: ToDoItem) => void
    }
) => {
    const {
        item,
        removeTask,
        completeTask
    } = props;

    return (
        <div className={`container ${styles['todo-list-item']}`}>
            <div className={styles['todo-list__text']}>{item.text}</div>
            <div className={styles['todo-list__actions']}>
                <button className={
                    item.isDone
                        ? ''
                        : 'button-unchecked'
                }
                onClick={() => { completeTask(props.item); }}><span className={`material-icons ${styles['todo-list__button-icon']}`}>done</span></button>
                <button
                    className={styles['todo-list__remove']}
                    onClick={() => { removeTask(props.item); }}><span className={`material-icons ${styles['todo-list__button-icon']}`}>delete</span></button>
            </div>
        </div>
    )
}