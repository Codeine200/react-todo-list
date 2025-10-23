import {createContext, useCallback, useState} from "react";

interface ToastContextType {
    message: string;
    showToast: (msg:string) => void;
}

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [message, setMessage] = useState<string>('');

    const showToast = useCallback((msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(''), 6000);
    }, []);


    return (
        <ToastContext.Provider value={{ message, showToast }}>
            {children}
        </ToastContext.Provider>
    )
}