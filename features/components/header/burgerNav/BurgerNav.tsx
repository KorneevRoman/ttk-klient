import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import logo from "../../../assets/images/logoTTK.svg";
import {Input} from "../../input/input";
import {FormModal} from "../../modal/FormModal";
import {Icon} from "../../icon/Icon";
import Link from "next/link";
import Mail from "@/features/assets/images/icons/mail";
import Phone from "@/features/assets/images/icons/phone";
import Location from "@/features/assets/images/icons/location";
import {useRouter as useNavigate} from "next/navigation";
import {useRouter} from "next/router";


export const BurgerNav = () => {
    const [isOpenClose, setOpenClose] = useState(false)
    const [search, setSearch] = useState('')
    const router = useRouter()
    const navigate = useNavigate();


    const onSearchClick = () => {
        setSearch('')
        setOpenClose(!isOpenClose)
        navigate.push(`/search/${search}`)
    }


    return (
        <>
            <div className={s.BurgerNav}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <Link href={'/'}><img src={logo.src} alt={'logo'} className={s.lg}/></Link>
                    </div>
                    <div className={isOpenClose ? s.nav : `${s.nav} ${s.show}`}>
                        <div className={s.links}>
                            <Link href={'/catalog/all'}
                                  className={router.pathname === '/catalog/[sort]' ? s.activeLink : undefined}
                                  onClick={() => setOpenClose(!isOpenClose)}
                            >КАТАЛОГ</Link>
                            <Link href={'/delivery'}
                                  onClick={() => setOpenClose(!isOpenClose)}
                                  className={router.asPath === '/delivery' ? s.activeLink : undefined}
                            >ДОСТАВКА</Link>
                            <Link href={'/about'}
                                  onClick={() => setOpenClose(!isOpenClose)}
                                  className={router.asPath === '/about' ? s.activeLink : undefined}
                            >О НАС</Link>
                            <Link href={'/contacts'}
                                  onClick={() => setOpenClose(!isOpenClose)}
                                  className={router.asPath === '/contacts' ? s.activeLink : undefined}
                            >КОНТАКТЫ</Link>
                        </div>
                        <div className={s.search}>
                            <Input search={search}
                                   onChange={setSearch}
                                   onSearchClick={onSearchClick}/>
                        </div>
                        <div className={s.info}>
                            <a href="tel:+79031517271"><Icon icon={<Phone/>}/> 8(903) 151-72-71</a>
                            <a href="mailto:info@gammavector.ru"><Icon icon={<Mail/>}/>info@gammavector.ru</a>
                            <span> <Icon icon={<Location/>}/>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                        </div>
                        <FormModal>
                            <div className={s.ans}>
                                <a>УЗНАТЬ ЦЕНУ</a>
                            </div>
                        </FormModal>
                    </div>
                    <div className={s.toggleBtn} onClick={() => setOpenClose(!isOpenClose)}>
                        <span>меню</span>
                        <div className={s.smallNav}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

