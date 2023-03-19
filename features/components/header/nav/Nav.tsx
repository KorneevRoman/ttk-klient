import React, {useState} from 'react';
import s from './nav.module.scss'
import {SearchBlock} from "./searchBlock/SearchBlock";
import Link from "next/link";
import Logo from "@/features/assets/images/icons/logo";
import {useRouter as useNavigate} from "next/navigation";
import {useRouter} from "next/router";

export const Nav = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const navigate = useNavigate();

    const onSearchClick = () => {
        navigate.push(`/search/${search}`)
        setSearch('')
    }

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.blockNav}>
                    <div className={s.logo}>
                        <Link href={'/'}><Logo/></Link>
                    </div>
                    <div className={s.nav}>
                        <Link href={'/catalog/all'}
                              className={router.pathname === '/catalog/[sort]' ? s.activeLink : undefined}
                        >КАТАЛОГ</Link>
                        <Link href={'/delivery'}
                              className={router.asPath === '/delivery' ? s.activeLink : undefined}
                        >ДОСТАВКА</Link>
                        <Link href={'/about'}
                              className={router.asPath === '/about' ? s.activeLink : undefined}
                        >О НАС</Link>
                        <Link href={'/contacts'}
                              className={router.asPath === '/contacts' ? s.activeLink : undefined}
                        >КОНТАКТЫ</Link>
                    </div>
                </div>
                <SearchBlock search={search} onSearchClick={onSearchClick} onChange={setSearch}/>
            </div>
        </div>
    );
};

