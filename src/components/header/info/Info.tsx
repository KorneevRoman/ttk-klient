import React from 'react';
import s from './info.module.scss'
import location from '../../../assets/images/icon/location.svg'
import phone from '../../../assets/images/icon/phone.svg'
import mail from '../../../assets/images/icon/mail.svg'
import {Icon} from "../../icon/Icon";

export const Info = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.loc}>
                    <Icon icon={location}/>
                    <span>  БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                </div>
                <div className={s.info}>
                    <a href="mailto:info@gammavector.ru"><Icon icon={mail}/> info@gammavector.ru</a>
                    <a href="tel:+79031517271"><Icon icon={phone}/> 8(903) 151-72-71</a>
                </div>
            </div>
        </div>
    );
};

