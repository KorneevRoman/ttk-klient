import React from 'react';
import s from './parallaxBanner.module.scss'
import banner from '../../assets/images/parallaxBaner.jpeg'
import {ParallaxBanner} from 'react-scroll-parallax';
import {ParallaxProvider} from 'react-scroll-parallax';
import {Title} from "../title/main/Title";
import arrow1 from '../../assets/images/arrow1.png'
import arrow2 from '../../assets/images/arrow2.png'
import arrow3 from '../../assets/images/arrow3.png'
import {AdvantagesItem} from "../advantagesItemBanner/AdvantagesItem";

export const Banner = () => {
    return (
        <div className={s.block}>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[{image: banner.src, speed: -15}]}
                    style={{minHeight: 420}}
                >
                    <div className={s.container}>
                        <Title title={'работать с нами'}/>
                        <div className={s.main}>
                            <AdvantagesItem
                                title={'ВЫГОДНО'}
                                descriptions={'Минимальные сроки поставки, выгодные и гибкие условия оплаты'}
                                direction={'left'}
                                img={arrow1}
                            />
                            <AdvantagesItem
                                title={'ПРОСТО'}
                                descriptions={'Вы делаете заказ на поставку продукции, мы разрабатываем оптимальное для Вас решение'}
                                direction={'up'}
                                img={arrow2}
                            />
                            <AdvantagesItem
                                title={'ЭФФЕКТИВНО'}
                                descriptions={'Вы получаете широкий спектр продукции от одного поставщика'}
                                direction={'right'}
                                img={arrow3}
                            />
                        </div>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    );
};

