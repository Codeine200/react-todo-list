import styles from './Form.module.css'
import {useState} from "react";

export const Form = (props: {
    addTask: (text: string) => void
}) => {
    const {
        addTask
    } = props;

    const [text, setText] = useState<string>('');
    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
        }
        setText('');
    };

    return (
        <div className={`container ${styles['form-add-task']}`}>
            <form onSubmit={formSubmit}>
                <div className={styles['form-add-task__input-wrapper']}>
                    <input type="text"
                           className={styles['form-add-task__input']}
                           onChange={(e) => { setText(e.target.value)}}
                           value={text}
                    />
                    <button className={styles['form-add-task__add_task']}><span className="material-icons">add</span></button>
                </div>
            </form>
        </div>
)
}