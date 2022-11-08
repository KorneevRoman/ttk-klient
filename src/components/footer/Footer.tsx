import React from 'react';
import s from './footer.module.scss'
import {TitleFooter} from "../title/footer/TitleFooter";
import {Icon} from "../icon/Icon";
import phone from '../../assets/images/icon/phone.svg'
import mail from '../../assets/images/icon/mail.svg'
import calendar from '../../assets/images/icon/calendar.svg'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.contactsBlock}>
                        <TitleFooter title={'КОНТАКТЫ'}/>
                        <a href="mailto:info@ttk-rus.ru"><Icon icon={mail}/>info@ttk-rus.ru</a>
                        <a href="tel:+79773361819"><Icon icon={phone}/>8(977) 336-18-19</a>
                        <a href="tel:+79031517271"><Icon icon={phone}/>8(903) 151-72-71</a>
                        <span><Icon icon={calendar}/>ПН - ПТ 8<span className={s.sup}>00</span>-19<span className={s.sup}>00</span></span>
                    </div>
                    <div className={s.requisitesBlock}>
                        <TitleFooter title={'нас можно найти'}/>
                        <span>Компания ООО «ТТК»</span>
                        <span>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                    </div>
                    <div className={s.catalogBlock}>
                        <TitleFooter title={'КАТАЛОГ'}/>
                        <div className={s.nav}>
                            <div className={s.linkItem}><NavLink to={'/catalog/gidravlika'}>Гидравлика</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/sensor'}>Датчики</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/mechanics'}>Механика</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/couplings'}>Муфты</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/pneumatics'}>Пневматика</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/bearings'}>Подшипники</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/filters'}>Фильтры</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/spindle'}>Шпиндели</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/electroMotors'}>Электродвигатели</NavLink></div>
                            <div className={s.linkItem}><NavLink to={'/catalog/electengin'}>Электротехника</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

