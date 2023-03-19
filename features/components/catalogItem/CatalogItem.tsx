import React from 'react';
import s from './catalogItem.module.scss'
import Image, {StaticImageData} from "next/image";
import {useRouter} from "next/navigation";

type CatalogItemPropsType = {
    title: string
    img: StaticImageData
    param?: string
}

export const CatalogItem: React.FC<CatalogItemPropsType> = ({title, img, param}) => {
    const navigate = useRouter()

    return (
        <div className={s.block} onClick={() => navigate.push(`/catalog/${param}`)}>
            <div className={s.content}>
                <div className={s.title}>
                    <span>{title}</span>
                </div>
                <Image src={img} alt={''}/>
            </div>
        </div>
    );
};

