import React from 'react';
import s from './delivery.module.scss'
import {Title} from "../components/title/main/Title";
import DeliveryCart from "./deliveriCart/DeliveryCart";
import delLine from '../assets/images/delline.jpeg'
import pony from '../assets/images/pony.jpeg'
import sdek from '../assets/images/sdek.jpeg'
import dhl from '../assets/images/DHL.jpeg'
import dpd from '../assets/images/dpd.png'
import other from '../assets/images/otherDelivery.jpeg'
import delivery from '../assets/images/deliveryimg.jpeg'
import CatalogWay from "../components/catalogWay/CatalogWay";

export const Delivery = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.main}>
                    <div className={s.description}>
                        <Title title={'доставка'}/>
                        <div className={s.info}>
                        <span>
                        Мы осуществляем доставку по всей России в кротчайшие сроки на самых выгодных условиях.
                        До терминала ТК Деловые Линии в г. Москва – БЕСПЛАТНО.
                        </span>
                            <span>
                        Приоритетно «TTK» осуществляет доставку заказанного товара с участием транспортных компаний
                        ООО «Деловые Линии» и ООО «Фрейтлинк» (Ponyexpress). Рассчитайте стоимость с помощью калькулятора нашего партнера
                        </span>
                        </div>
                    </div>
                    <CatalogWay img={delivery}/>
                </div>
                <div className={s.items}>
                    <DeliveryCart title={'Деловые Линии'} img={delLine} src={'https://www.dellin.ru/requests/'}/>
                    <DeliveryCart title={'Pony Express'} img={pony} src={'https://www.ponyexpress.ru/support/servisy-samoobsluzhivaniya/tariff/'}/>
                    <DeliveryCart title={'СДЭК'} img={sdek} src={'https://www.cdek.ru/ru/calculate'}/>
                    <DeliveryCart title={'DHL'} img={dhl} src={'https://express.dhl.ru/calculator/'}/>
                    <DeliveryCart title={'DPD'} img={dpd} src={'https://dpd.ru'}/>
                    <DeliveryCart title={'Другая компания'} img={other} />
                </div>
            </div>
        </div>
    );
};

