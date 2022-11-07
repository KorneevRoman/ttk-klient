import React from 'react';
import s from './modal.module.scss'

interface IModal {
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    children: React.ReactNode
    show: boolean
}

const Modal: React.FC<IModal> = (
    {
        backgroundOnClick = () => {
        },
        show,
        children,
    }
) => {


    if (!show) return null;

    console.log('render Modal');
    return (
        <>
            <div className={s.block}>
                <div className={s.container} onClick={backgroundOnClick}/>
                <div
                    className={s.modal}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
