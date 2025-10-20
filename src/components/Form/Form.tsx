import './Form.css'

export const Form = () => {
    return (
        <div className="container form-add-task">
            <form action="">
                <div className="form-add-task__input-wrapper">
                    <input type="text" className="form-add-task__input" value="Task 1"/>
                    <button className="form-add-task__add_task">+</button>
                </div>
            </form>
        </div>
)
}