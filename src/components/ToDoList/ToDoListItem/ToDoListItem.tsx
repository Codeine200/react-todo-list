import './ToDoListItem.css'

export const ToDoListItem = () => {
    return (
        <div className="todo-list-item">
            <div className="todo-list__text">Item 1</div>
            <div className="todo-list__actions">
                <div className="todo-list__completed">+</div>
                <div className="todo-list__remove">-</div>
            </div>
        </div>
    )
}