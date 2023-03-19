import React from 'react';
import s from './catalogWay.module.scss'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type CatalogWay = {
    img:  StaticImageData
}
const CatalogWay: React.FC<CatalogWay> = ({img}) => {
    return (
        <div className={s.block}>
            <div className={s.img}><Image src={img} alt={''}/></div>
            <Link href={'/catalog/all'}>
                Перейти в каталог
            </Link>
        </div>
    );
};

export default CatalogWay;