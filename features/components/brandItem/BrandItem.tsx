import React from 'react';
import s from './brandItem.module.scss'
import {BrandsType} from "../../bd/bd";
import Link from "next/link";
import Image from "next/image";

type BrandItemPropsType = {
    item: BrandsType
}

export const BrandItem: React.FC<BrandItemPropsType> = ({item}) => {
    return (
        <div className={s.block}>
            <Link href={`/brand/${item.id}`}>
                <Image src={item.image} alt={''}/>
                <span>{item.id}</span>
            </Link>
        </div>
    );
};

