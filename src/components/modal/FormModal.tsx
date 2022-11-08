import React, {useState} from 'react';
import Modal from "./Modal";
import s from './formModal.module.scss'
import modalImg from '../../assets/images/modal.jpeg'
import {useFormik} from "formik";
import axios from "axios";

type ModalContainerPropsType = {
    children?: React.ReactNode
}
type FormikErrorType = {
    name?: string
    email?: string
    phone?: string
    INN?: string
    comments?: string
}
type SuccessfulSendingType = 'idle' | 'res' | 'rej'

export const FormModal: React.FC<ModalContainerPropsType> = ({children}) => {
    const [show, setShow] = useState(false);
    const [successfulSending, setSuccessfulSending] = useState<SuccessfulSendingType>('idle')
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            INN: "",
            comments: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = "Обязательно"
            }

            if (!values.email) {
                errors.email = "Обязательно"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Не корректный E-mail';
            }

            if (!values.phone) {
                errors.phone = "Обязательно"
            } else if (values.phone.length <= 10) {
                errors.phone = "Не корректный номер"
            }
            return errors;
        },
        onSubmit: values => {
            setLoading(true)
            axios.post('https://ttk-server.vercel.app/sendMessage/', {...values})
                .then(res => {
                        setSuccessfulSending('res')
                        formik.resetForm()
                        setTimeout(() => {
                            setSuccessfulSending('idle')
                            setShow(false)
                        }, 5000)
                    }
                )
                .catch(rej => {
                    setSuccessfulSending('rej')
                    setTimeout(() => {
                        setSuccessfulSending('idle')
                    }, 5000)
                })
                .finally(() => {
                    setLoading(false)
                })
        },
    })

    const nameValidate = formik.touched.name && formik.errors.name
    const phoneValidate = formik.touched.phone && formik.errors.phone
    const emailValidate = formik.touched.email && formik.errors.email

    const closeModal = () => {
        formik.resetForm()
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
                        <h5>Отправить заявку</h5>
                        <button onClick={closeModal}>x</button>
                    </div>
                    <div className={s.block}>
                        <div className={s.fromContainer}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={s.item}>
                                    <span
                                        className={nameValidate ? `${s.sup} ${s.red}` : s.sup}>Имя* {nameValidate && formik.errors.name}</span>
                                    <input {...formik.getFieldProps("name")} placeholder={'Как вас зовут'}/>
                                </div>
                                <div className={s.item}>
                                    <span
                                        className={phoneValidate ? s.red : ''}>Телефон* {phoneValidate && formik.errors.phone}</span>
                                    <input {...formik.getFieldProps("phone")} placeholder={"Номер телефона"}/>
                                </div>
                                <div className={s.item}>
                                    <span
                                        className={emailValidate ? s.red : ''}>E-mail* {emailValidate && formik.errors.email}</span>
                                    <input {...formik.getFieldProps("email")} placeholder={"Ваш E-mail"}/>
                                </div>
                                <div className={s.item}>
                                    <span>ИНН</span>
                                    <input {...formik.getFieldProps("INN")} placeholder={"ИНН"}/>
                                </div>
                                <div className={s.item}>
                                    <span>Комментарий</span>
                                    <textarea {...formik.getFieldProps("comments")}/>
                                </div>
                                {successfulSending === 'res' &&
                                    <div className={s.item}>
                                        <span style={{color: "green"}}>Письмо успешно отправилось.</span>
                                    </div>
                                }
                                {successfulSending === 'rej' &&
                                    <div className={s.item}>
                                        <span style={{color: "red"}}>Упсс... Попробуйте еще раз.</span>
                                    </div>
                                }
                                <div className={s.item}>
                                    <button type={'submit'} disabled={loading}>ОТПРАВИТЬ</button>
                                </div>
                            </form>
                        </div>
                        <div className={s.modalImg}>
                            <img src={modalImg} alt="img"/>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

