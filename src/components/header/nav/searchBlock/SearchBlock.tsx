import React from 'react';
import s from "./searchBlock.module.scss";
import {FormModal} from "../../../modal/FormModal";
import {SuperInput} from "../../../superInput/SuperInput";
import phone from "../../../../assets/images/icon/phone-small.svg";


type SearchBlockPropsType = {
    search: string
    onChange: (value: string) => void
    onSearchClick: () => void
}

export const SearchBlock: React.FC<SearchBlockPropsType> = ({search, onChange, onSearchClick}) => {
    return (
        <div className={s.searchBlock}>
            <SuperInput search={search} onChange={onChange} onSearchClick={onSearchClick}/>
            <FormModal>
                <div className={s.block}>
                    <img src={phone} alt={'search'}/>
                </div>
                <div className={s.ans}>
                    <a>УЗНАТЬ ЦЕНУ</a>
                </div>
            </FormModal>
        </div>
    );
};

