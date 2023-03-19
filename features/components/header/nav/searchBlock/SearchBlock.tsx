import React from 'react';
import s from "./searchBlock.module.scss";
import {FormModal} from "../../../modal/FormModal";
import {SuperInput} from "../../../superInput/SuperInput";
import Phone from "@/features/assets/images/icons/phone";


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
                    <Phone/>
                </div>
                <div className={s.ans}>
                    <a>УЗНАТЬ ЦЕНУ</a>
                </div>
            </FormModal>
        </div>
    );
};

