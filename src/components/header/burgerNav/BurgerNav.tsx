import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../../assets/images/logoTTK.svg";
import {Input} from "../../input/input";
import {FormModal} from "../../modal/FormModal";
import {Icon} from "../../icon/Icon";
import location from '../../../assets/images/icon/location-small.svg'
import phone from '../../../assets/images/icon/phone-small.svg'
import mail from '../../../assets/images/icon/mail-small.svg'




export const BurgerNav = () => {
    const [isOpenClose, setOpenClose] = useState(false)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const onSearchClick = () => {
        navigate(`/search/${search}`)
        setSearch('')
        setOpenClose(!isOpenClose)
    }


    return (
        <>
            <div className={s.BurgerNav}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <NavLink to={'/'}><img src={logo} alt={'logo'} className={s.lg}/></NavLink>
                    </div>
                    <div className={isOpenClose ? s.nav : `${s.nav} ${s.show}`}>
                        <div className={s.links}>
                            <NavLink to={'/catalog'}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                                     onClick={() => setOpenClose(!isOpenClose)}
                            >КАТАЛОГ</NavLink>
                            <NavLink to={'/delivery'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >ДОСТАВКА</NavLink>
                            <NavLink to={'/about'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >О НАС</NavLink>
                            <NavLink to={'/contacts'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >КОНТАКТЫ</NavLink>
                        </div>
                        <div className={s.search}>
                            <Input search={search}
                                   onChange={setSearch}
                                   onSearchClick={onSearchClick}/>
                        </div>
                        <div className={s.info}>
                            <a href="tel:+79031517271"><Icon icon={phone}/> 8(903) 151-72-71</a>
                            <a href="mailto:info@gammavector.ru"><Icon icon={mail}/>info@gammavector.ru</a>
                            <span> <Icon icon={location}/>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                        </div>
                        <FormModal>
                            <div className={s.ans}>
                                <a>УЗНАТЬ ЦЕНУ</a>
                            </div>
                        </FormModal>
                    </div>
                    <div className={s.toggleBtn} onClick={() => setOpenClose(!isOpenClose)}>
                        <span>меню</span>
                        <div className={s.smallNav} >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

