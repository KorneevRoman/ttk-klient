import React from 'react';
import {useParams} from "react-router-dom";
import {brands} from "../../bd/bd";
import s from './brand.module.scss'
import {Title} from "../../components/title/main/Title";
import {NavBar} from "../../components/navBar/NavBar";


export const Brand = () => {
    const params = useParams()
    const brand = brands.find(e => e.id === params.brand)

    return (
        brand ?
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.main}>
                        <div className={s.containerBlock}>
                            <header>
                                <h1>{brand.name}</h1>
                                <img src={brand.image}/>
                            </header>
                            <div className={s.infoBlock}>
                                <span className={s.brand}>Производитель: <span
                                    className={s.item}>{brand.id}</span></span>
                            </div>
                            <div className={s.description}>
                                <Title title={brand.id}/>
                                <p>{brand.description}</p>
                            </div>
                        </div>
                        <NavBar/>
                    </div>
                </div>
            </div>
            : <h1>Null</h1>
    );
};

