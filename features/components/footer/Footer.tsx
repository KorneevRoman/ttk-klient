import React from 'react';
import s from './footer.module.scss'
import {TitleFooter} from "../title/footer/TitleFooter";
import {Icon} from "../icon/Icon";
import Link from "next/link";
import Mail from "@/features/assets/images/icons/mail";
import Phone from "@/features/assets/images/icons/phone";
import Calendar from "@/features/assets/images/icons/calendar";

export const Footer = () => {
    return (
        <footer>
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.contactsBlock}>
                        <TitleFooter title={'КОНТАКТЫ'}/>
                        <Link href="mailto:info@ttk-rus.ru"><Icon icon={<Mail/>}/>info@ttk-rus.ru</Link>
                        <Link href="tel:+79773361819"><Icon icon={<Phone/>}/>8(968) 978-18-19</Link>
                        <span><Icon icon={<Calendar/>}/>ПН - ПТ 8<span className={s.sup}>00</span>-19<span className={s.sup}>00</span></span>
                    </div>
                    <div className={s.requisitesBlock}>
                        <TitleFooter title={'нас можно найти'}/>
                        <span>Компания ООО «ТТК»</span>
                        <span>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                    </div>
                    <div className={s.catalogBlock}>
                        <TitleFooter title={'КАТАЛОГ'}/>
                        <div className={s.nav}>
                            <div className={s.linkItem}><Link href={'/catalog/gidravlika'}>Гидравлика</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/sensor'}>Датчики</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/mechanics'}>Механика</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/couplings'}>Муфты</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/pneumatics'}>Пневматика</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/bearings'}>Подшипники</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/filters'}>Фильтры</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/spindle'}>Шпиндели</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/electroMotors'}>Электродвигатели</Link></div>
                            <div className={s.linkItem}><Link href={'/catalog/electengin'}>Электротехника</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

