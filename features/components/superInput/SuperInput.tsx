import React, {useState} from 'react';
import searchIcn from "../../assets/images/search.svg";
import s from './superInput.module.scss';
import {Input} from "../input/input";
import Image from "next/image";

type SuperInputPropsType = {
    search: string
    onChange: (value: string) => void
    onSearchClick: () => void
}

export const SuperInput:React.FC<SuperInputPropsType> = ({search, onSearchClick, onChange}) => {
    const [toggleInput, setToggleInput] = useState(false)

    const onClickSearchHandler = () => {
        onSearchClick()
        setToggleInput(!toggleInput)
    }

    return (
        <div className={s.container}>
            <div className={s.block} onClick={() => setToggleInput(!toggleInput)}>
                <Image src={searchIcn} alt={'search'}/>
            </div>
            <div className={s.positionSmall} style={!toggleInput ? {display:"none"} : {}}>
                <Input search={search} onChange={onChange} onSearchClick={onClickSearchHandler}/>
            </div>
            <div className={`${s.full} ${s.small}`}>
                <Input search={search} onChange={onChange} onSearchClick={onSearchClick}/>
            </div>
        </div>
    );
};

