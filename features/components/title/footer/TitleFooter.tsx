import React from 'react';
import s from './titleFooter.module.scss'

type TitleFooterPropsType = {
    title: string
}


export const TitleFooter: React.FC<TitleFooterPropsType> = ({title}) => {
    return (
        <div className={s.title}>
            <h3 className={s.ft}>{title}</h3>
        </div>
    );
};

