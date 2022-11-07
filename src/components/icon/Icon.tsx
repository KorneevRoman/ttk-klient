import React from 'react';
import s from './icon.module.scss'

type IconPropsType = {
    icon: string
}

export const Icon: React.FC<IconPropsType> = ({icon}) => {
    return (
        <div className={s.container}>
            <div className={s.block}>
                <img src={icon}/>
            </div>
        </div>
    );
};

