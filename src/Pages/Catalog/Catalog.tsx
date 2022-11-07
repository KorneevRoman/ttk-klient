import React from 'react';
import s from './catalog.module.scss'
import {Title} from "../../components/title/main/Title";
import {BrandItem} from "../../components/brandItem/BrandItem";
import {brands} from "../../bd/bd";
import {useParams} from "react-router-dom";
import {NavBar} from "../../components/navBar/NavBar";

export const Catalog = () => {
    const params = useParams()
    let items = brands

    if (params.sort) items = items.filter(e => e.category.some(e => e === params.sort))

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

