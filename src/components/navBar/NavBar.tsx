import React from 'react';
import s from './navBar.module.scss'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={s.block}>
            <div className={s.item}>
                <NavLink to={'/catalog/gidravlika'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Гидравлика</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/sensor'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Датчики</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/mechanics'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Механика</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/couplings'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Муфты</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/pneumatics'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Пневматика</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/bearings'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Подшипники</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/filters'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Фильтры</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/spindle'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Шпиндели</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/electroMotors'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Электродвигатели</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/catalog/electengin'}
                         className={({isActive}) => isActive ? s.activeLink : undefined }
                >Электротехника</NavLink>
            </div>
        </div>
    );
};

