import React from 'react';
import {Title} from "../components/title/main/Title";
import s from './Contacts.module.scss'
import img from '../assets/images/bg-contact.png'
import {FormModal} from "../components/modal/FormModal";
import {RequisitesModal} from "../components/modal/RequisitesModal";
import {Icon} from "../components/icon/Icon";
import Link from "next/link";
import Phone from "@/features/assets/images/icons/phone";
import Mail from "@/features/assets/images/icons/mail";
import Image from "next/image";
import {YandexMap} from "@/features/components/yandexMap/YandexMap";

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
                                    <Link href="tel:+79773361819">
                                        <Icon icon={<Phone/>}/>
                                        <span className={s.tel}>8(968) 978-18-19</span>
                                        <span>Корнеев Роман</span>
                                    </Link>
                                </div>
                                <div className={s.infoBlock}>
                                    <h3>почта:</h3>
                                    <Link href="mailto:info@ttk-rus.ru"><Icon icon={<Mail/>}/>info@ttk-rus.ru</Link>
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
                            <Image src={img} alt={''}/>
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

