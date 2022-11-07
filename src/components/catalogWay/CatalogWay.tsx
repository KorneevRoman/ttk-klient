import React from 'react';
import s from './catalogWay.module.scss'
import {backgroundImg} from "../../assets/utilits/utilitBg";
import {NavLink} from "react-router-dom";

type CatalogWay = {
    img: string
}
const CatalogWay: React.FC<CatalogWay> = ({img}) => {
    return (
        <div className={s.block}>
            <div className={s.img} style={backgroundImg(img)}></div>
            <NavLink to={'/catalog'}>
                Перейти в каталог
            </NavLink>
        </div>
    );
};

export default CatalogWay;