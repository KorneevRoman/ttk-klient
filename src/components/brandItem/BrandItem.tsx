import React from 'react';
import {NavLink} from "react-router-dom";
import s from './brandItem.module.scss'
import {BrandsType} from "../../bd/bd";

type BrandItemPropsType = {
    item: BrandsType
}

export const BrandItem: React.FC<BrandItemPropsType> = ({item}) => {
    return (
        <div className={s.block}>
            <NavLink to={`/brand/${item.id}`}>
                <img src={item.image}/>
                <span>{item.id}</span>
            </NavLink>
        </div>
    );
};

