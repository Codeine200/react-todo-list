import styles from './Toast.module.css'
import {useContext} from "react";
import {ToastContext} from "../../providers/Toast";

export const Toast = () => {
    const {message} = useContext(ToastContext);

    console.log("message: " + message);

    return (
        <div className={message != '' ? styles.toast : styles.hide}>
            {message}
        </div>
    )
}