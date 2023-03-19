import React from 'react';
import s from './catalog.module.scss'
import {Title} from "@/features/components/title/main/Title";
import {BrandItem} from "@/features/components/brandItem/BrandItem";
import {NavBar} from "@/features/components/navBar/NavBar";
import {brands} from "@/features/bd/bd";
import {useRouter} from "next/router";


export const Catalog = () => {
    const router = useRouter()
    let items = brands

    if (router.query.sort !== 'all') items = items.filter(e => e.category.some(e => e === router.query.sort))

    return (
        <div className={s.container}>
            <div className={s.block}>
                <div className={s.containerBlock}>
                    <Title title={'КАТАЛОГ ПРОИЗВОДИТЕЛЕЙ'}/>
                    <div className={s.catalog}>
                        {items.map(item => (
                            <BrandItem key={item.name} item={item}/>
                        ))}
                    </div>
                </div>
                <NavBar/>
            </div>
        </div>
    );
};

