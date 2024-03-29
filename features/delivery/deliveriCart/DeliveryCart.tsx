import React from 'react';
import s from './deliveryCart.module.scss'
import Image, {StaticImageData} from "next/image";

type DeliveryCartPropsType = {
    title: string
    img:  StaticImageData
    src?: string
    description?: string
}

const DeliveryCart: React.FC<DeliveryCartPropsType> = ({title, img, src}) => {
    return (
        <div className={s.block}>
            <div className={s.img}><Image src={img} alt={''}/></div>
            <div className={s.info}>
                <h5>{title}</h5>
                {src
                    ? <a href={src} target='_blank'>
                        рассчитать
                    </a>
                    : <span>
                        Также Вы можете выбрать любую удобную для Вас транспортную компанию для осуществления доставки, предварительно согласовав это с Вашим персональным менеджером.
                    </span>
                }
            </div>
        </div>
    );
};

export default DeliveryCart;