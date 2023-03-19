import React from 'react';
import s from './title.module.scss'

type TitlePropsType = {
    title: string
}

export const Title: React.FC<TitlePropsType> = ({title}) => {
    return (
        <h3 className={s.title}>{title}</h3>
    )
};

