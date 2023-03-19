import React from 'react';
import s from './icon.module.scss'

type IconPropsType = {
    icon: React.ReactNode
}

export const Icon: React.FC<IconPropsType> = ({icon}) => {
    return (
        <div className={s.container}>
            <div className={s.block}>
                {icon}
            </div>
        </div>
    );
};

