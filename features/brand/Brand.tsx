import React from 'react';
import s from './brand.module.scss'
import {useRouter} from "next/router";
import {brands} from "@/features/bd/bd";
import {Title} from "@/features/components/title/main/Title";
import {NavBar} from "@/features/components/navBar/NavBar";
import Image from "next/image";


export const Brand = () => {
    const router = useRouter()
    const brand = brands.find(e => e.id === router.query.item)

    return (
        brand ?
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.main}>
                        <div className={s.containerBlock}>
                            <header>
                                <h1>{brand.name}</h1>
                                <Image src={brand.image} alt={''}/>
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
            : <h1>Loading</h1>
    );
};

