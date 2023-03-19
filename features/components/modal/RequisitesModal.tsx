import React, {useState} from 'react';
import Modal from "./Modal";
import s from "./requisitesModal.module.scss";

type RequisitesModalPropsType = {
    children?: React.ReactNode
}

export const RequisitesModal: React.FC<RequisitesModalPropsType> = ({children}) => {
    const [show, setShow] = useState(false);
    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <div onClick={() => setShow(true)}>{children}</div>
            <Modal
                backgroundOnClick={closeModal}
                show={show}
            >
                <div className={s.container}>
                    <div className={s.head}>
                        <h5>Реквизиты</h5>
                        <button onClick={closeModal} className={s.closeBtn}>x</button>
                    </div>
                    <div className={s.block}>
                        <div className={s.item}>
                            <h5 className={s.title}>Название:</h5>
                            <span className={s.description}>ООО "ТТК"</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Дата присвоения:</h5>
                            <span className={s.description}>09 октября 2019 г.</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Юридический адрес:</h5>
                            <span className={s.description}> 127106, город Москва, Алтуфьевское шоссе, дом 27, офис 216</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Фактический адрес:</h5>
                            <span className={s.description}>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>ОГРН:</h5>
                            <span className={s.description}>1997746605550</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>ИНН:</h5>
                            <span className={s.description}>9715365020</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>КПП:</h5>
                            <span className={s.description}>771501001</span>
                        </div>
                        <hr/>
                        <div className={s.item}>
                            <h5 className={s.title}>Город:</h5>
                            <span className={s.description}>Москва</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Название банка:</h5>
                            <span className={s.description}>ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Расчётный счет:</h5>
                            <span className={s.description}>№4070281010500054085</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>Корр. счет:</h5>
                            <span className={s.description}>30101810845250000999</span>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.title}>БИК:</h5>
                            <span className={s.description}>044525999</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

