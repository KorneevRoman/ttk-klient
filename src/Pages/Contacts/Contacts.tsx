import React from 'react';
import {Title} from "../../components/title/main/Title";
import s from './Contacts.module.scss'
import {YandexMap} from "../../components/yandexMap/YandexMap";
import img from '../../assets/images/bg-contact.png'
import {FormModal} from "../../components/modal/FormModal";
import {RequisitesModal} from "../../components/modal/RequisitesModal";
import phone from "../../assets/images/icon/phone-small.svg";
import {Icon} from "../../components/icon/Icon";
import mail from "../../assets/images/icon/mail-small.svg";

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.main}>
                    <Title title={'контакты'}/>
                    <div className={s.contacts}>
                        <div className={s.item}>
                            <div className={s.contact}>
                                <div className={s.infoBlock} >
                                    <h3>телефоны:</h3>
                                    <a href="tel:+79031517271">
                                        <Icon icon={phone}/>
                                        <span className={s.tel}>8(903) 151-72-71</span>
                                        <span>Пушишин Виктор</span>
                                    </a>
                                    <a href="tel:+79773361819">
                                        <Icon icon={phone}/>
                                        <span className={s.tel}>8(977) 336-18-19</span>
                                        <span>Корнеев Роман</span>
                                    </a>
                                </div>
                                <div className={s.infoBlock}>
                                    <h3>почта:</h3>
                                    <a href="mailto:info@ttk-rus.ru"><Icon icon={mail}/>info@ttk-rus.ru</a>
                                </div>
                            </div>
                        </div>
                        <YandexMap/>
                        <div className={s.item}>
                            <div className={s.contact}>
                                <div className={s.infoBlock}>
                                    <h3>нас можно найти:</h3>
                                    <span className={s.mail}>Компания ООО «ТТК»</span>
                                    <span className={s.mail}>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                                    <RequisitesModal>
                                        <button className={s.btn}>реквизиты</button>
                                    </RequisitesModal>
                                </div>
                            </div>
                        </div>
                        <div className={s.blockContact}>
                            <img src={img}/>
                            <FormModal>
                                <button className={s.btn}>написать нам</button>
                            </FormModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

