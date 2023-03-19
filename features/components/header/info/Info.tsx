import React from 'react';
import s from './info.module.scss'
import {Icon} from "../../icon/Icon";
import Location from "@/features/assets/images/icons/location";
import Phone from "@/features/assets/images/icons/phone";
import Mail from "@/features/assets/images/icons/mail";

export const Info = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.loc}>
                    <Icon icon={<Location/>}/>
                    <span>  БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                </div>
                <div className={s.info}>
                    <a href="mailto:info@ttk-rus.ru"><Icon icon={<Mail/>}/>info@ttk-rus.ru</a>
                    <a href="tel:+79689781819"><Icon icon={<Phone/>}/> 8(968) 978-18-19</a>
                </div>
            </div>
        </div>
    );
};

