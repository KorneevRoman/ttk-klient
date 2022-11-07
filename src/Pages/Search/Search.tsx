import React from 'react';
import {useParams} from "react-router-dom";
import {brands} from "../../bd/bd";
import s from "./search.module.scss";
import searchIcn from '../../assets/images/search.svg'
import {Title} from "../../components/title/main/Title";
import {BrandItem} from "../../components/brandItem/BrandItem";
import {NavBar} from "../../components/navBar/NavBar";

export const Search = () => {
    const params = useParams()
    let items = brands

    if (params.search) items = items.filter(e => e.name.toLowerCase().includes(params.search?.toLowerCase()!))
    console.log(items)
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.containerBlock}>
                    {items.length
                        ? <div className={`${s.head} ${s.default}`}>
                            <Title title={`поисковый запрос: ${params.search}`}/>
                            <span><img src={searchIcn}/>Посмотрите что мы нашли</span>
                        </div>
                        : <div className={`${s.head} ${s.warning}`}>
                            <Title title={`ничего не найдено `}/>
                            <span><img src={searchIcn}/>Попробуйте изменить запрос поиска</span>
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

