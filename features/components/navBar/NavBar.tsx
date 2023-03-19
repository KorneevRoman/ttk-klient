import React from 'react';
import s from './navBar.module.scss'
import Link from "next/link";

export const NavBar = () => {
    return (
        <div className={s.block}>
            <div className={s.item}>
                <Link href={'/catalog/gidravlika'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Гидравлика</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/sensor'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Датчики</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/mechanics'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Механика</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/couplings'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Муфты</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/pneumatics'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Пневматика</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/bearings'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Подшипники</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/filters'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Фильтры</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/spindle'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Шпиндели</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/electroMotors'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Электродвигатели</Link>
            </div>
            <div className={s.item}>
                <Link href={'/catalog/electengin'}
                         // className={({isActive}) => isActive ? s.activeLink : undefined }
                >Электротехника</Link>
            </div>
        </div>
    );
};

