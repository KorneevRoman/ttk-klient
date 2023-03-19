import React from 'react';
import {brands} from "../bd/bd";
import s from "./search.module.scss";
import searchIcn from '../assets/images/search.svg'
import {Title} from "../components/title/main/Title";
import {BrandItem} from "../components/brandItem/BrandItem";
import {NavBar} from "../components/navBar/NavBar";
import {useRouter} from "next/router";

export const Search = () => {
    const router = useRouter()
    let items = brands
    let item = router.query.item

    if (item) items = items.filter(e => e.name.toLowerCase().includes(String(item).toLowerCase()!))

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.containerBlock}>
                    {items.length
                        ? <div className={`${s.head} ${s.default}`}>
                            <Title title={`поисковый запрос: ${item}`}/>
                            <span><img src={searchIcn.src} alt={''}/>Посмотрите что мы нашли</span>
                        </div>
                        : <div className={`${s.head} ${s.warning}`}>
                            <Title title={`ничего не найдено `}/>
                            <span><img src={searchIcn.src} alt={''}/>Попробуйте изменить запрос поиска</span>
                        </div>
                    }

                    <div className={s.catalog}>
                        {items.map(item => (
                            <BrandItem key={item.name} item={item}/>
                        ))}
                    </div>
                </div>
                <NavBar/>
            </div>
        </div>
    )
};

