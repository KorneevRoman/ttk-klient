import React from 'react';
import s from './carousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };
    return (
        <div>
            <Slider  {...settings}
                arrows={false}
                className={s.box}
            >
                <div>
                    <div className={s.item}>
                        Комплексное обеспечение комплектующими и запасными частями от любых производителей
                    </div>
                </div>
                <div>
                    <div className={s.item}>
                        Нашими постоянными партнерами являются уже более сотни компаний-производителей
                    </div>
                </div>
                <div>
                    <div className={s.item}>
                        Доставка осуществляется по всей России
                    </div>
                </div>
            </Slider>
        </div>
    );
};
