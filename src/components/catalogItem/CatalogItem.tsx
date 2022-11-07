import React from 'react';
import s from './catalogItem.module.scss'
import img from '../../assets/images/catalog/gidravlika.png'
import {useNavigate} from "react-router-dom";

type CatalogItemPropsType = {
    title: string
    img: string
    param?: string
}

export const CatalogItem: React.FC<CatalogItemPropsType> = ({title, img, param}) => {
    const navigate = useNavigate()

    return (
        <div className={s.block} onClick={() => navigate(`/catalog/${param}`)}>
            <div className={s.content}>
                <div className={s.title}>
                    <span>{title}</span>
                </div>
                <img src={img}/>
            </div>
        </div>
    );
};

