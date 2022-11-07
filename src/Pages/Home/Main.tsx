import React from 'react';
import s from './main.module.scss'
import banner from '../../assets/images/banner.png'
import {backgroundImg} from "../../assets/utilits/utilitBg";
import {CatalogItem} from "../../components/catalogItem/CatalogItem";
import gidravlika from '../../assets/images/catalog/gidravlika.png'
import sensor from '../../assets/images/catalog/sensor.png'
import kabels from '../../assets/images/catalog/kabeln.jpeg'
import mechanics from '../../assets/images/catalog/mechanics.png'
import spindle from '../../assets/images/catalog/spindle.png'
import bearings from '../../assets/images/catalog/bearings.png'
import couplings from '../../assets/images/catalog/couplings.png'
import electricalEngineering from '../../assets/images/catalog/electricalengineering.png'
import electroMotors from '../../assets/images/catalog/electromotors.png'
import filters from '../../assets/images/catalog/filters.png'
import pneumatics from '../../assets/images/catalog/pneumatics.png'
import {Title} from "../../components/title/main/Title";
import {Carousel} from "../../components/carousel/Carousel";
import {Banner} from "../../components/paralaxBanner/ParallaxBanner";


export const Main = () => {

    return (
        <div className={s.block}>
            <div className={s.banner} style={backgroundImg(banner)}>
                <Carousel/>
            </div>
            <div className={s.container}>
                <div className={s.infoBlock}>
                    <Title title={'КОМПЛЕКТУЮЩИЕ'}/>
                    <span>На сегодняшний день наша компания является быстро развивающейся и работающей на формирование
                        положительного и добросовестного статуса поставщика комплектующих и запасных частей для
                        промышленного оборудования.</span>
                </div>
                <div className={s.content}>
                    <CatalogItem title={"гидравлика"} param={'gidravlika'} img={gidravlika}/>
                    <CatalogItem title={"датчики"} param={'sensor'} img={sensor}/>
                    <CatalogItem title={"механика"} param={'mechanics'} img={mechanics}/>
                    <CatalogItem title={"муфты"} param={'couplings'} img={couplings}/>
                    <CatalogItem title={"пневматика"} param={'pneumatics'} img={pneumatics}/>
                    <CatalogItem title={"подшипники"} param={'bearings'} img={bearings}/>
                    <CatalogItem title={"фильтры"} param={'filters'} img={filters}/>
                    <CatalogItem title={"шпиндели"} param={'spindle'} img={spindle}/>
                    <CatalogItem title={"электродвигатели"} param={'electroMotors'} img={electroMotors}/>
                    <CatalogItem title={"электротехника"} param={'electengin'} img={electricalEngineering}/>
                </div>
            </div>
            <Banner/>
            <div className={s.container} style={{minHeight:260}}>
                <div className={s.infoBlock} >
                    <Title title={'ПАРТНЕРЫ'}/>
                    <span>Наша цель – комплексное обеспечение наших клиентов комплектующими и запасными частями ко всем
                        типам оборудования на постоянной основе от любых производителей.
                        Нашими постоянными партнерами являются уже более сотни компаний-производителей.</span>
                </div>
            </div>
        </div>
    );
};

