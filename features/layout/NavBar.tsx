import React from 'react';
import {BurgerNav} from "@/features/components/header/burgerNav/BurgerNav";
import {Nav} from "@/features/components/header/nav/Nav";
import {Info} from "@/features/components/header/info/Info";
import s from '@/features/components/header/header.module.scss'
import {Footer} from "@/features/components/footer/Footer";


export const NavBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div>
                <div className={s.header}>
                    <Info/>
                    <Nav/>
                </div>
                <BurgerNav/>
            </div>
            {children}
            <Footer/>
        </>
    );
};
