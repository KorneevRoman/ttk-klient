import React from 'react';
import s from "./input.module.scss";
import searchIcn from "../../assets/images/search.svg";

type InputPropsType = {
    search: string
    onChange: (value: string) => void
    onSearchClick: () => void
}

export const Input: React.FC<InputPropsType> = ({search, onChange, onSearchClick}) => {
    return (
        <div className={s.search}>
            <input placeholder={'Что будем искать'}
                   onChange={(e) => onChange(e.currentTarget.value)}
                   value={search}
            />
            <button onClick={onSearchClick} disabled={!search}>
                <img src={searchIcn}/>
            </button>
        </div>
    );
};

