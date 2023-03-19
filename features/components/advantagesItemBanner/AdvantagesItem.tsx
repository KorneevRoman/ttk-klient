import React from 'react';
import s from "./advantagesItem.module.scss";
import  {Fade} from "react-awesome-reveal";
import Image, {StaticImageData} from "next/image";

type AdvantagesItemPropsType = {
    title: string
    descriptions: string
    direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up"
    img: StaticImageData
}

export const AdvantagesItem: React.FC<AdvantagesItemPropsType> = ({title, direction,descriptions, img}) => {
    return (
        <div>
            <Fade direction={direction}>
                <div className={s.item}>
                    <Image src={img} alt={'arrow'}/>
                    <div className={s.info}>
                        <h5>{title}</h5>
                        <span>{descriptions}</span>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

