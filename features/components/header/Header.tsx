import React from 'react';
import {Info} from "./info/Info";
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";
import s from './header.module.scss'

export const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <Info/>
                <Nav/>
            </div>
            <BurgerNav/>
        </div>
);
};

