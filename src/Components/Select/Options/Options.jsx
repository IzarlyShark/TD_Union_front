import style from "./Options.module.css";
import { useState } from "react";

export default function Options({ options, handleClose, isOpen, setValueActiveTag }) {

    function handleClick (option) {
        setValueActiveTag(option)
        handleClose()
    }

    return <div className={`${style.options} ${isOpen && style.active}`}>
        <div className={style.option} onClick={() => handleClick(null)}>Не выбрано</div>
        {options.map((option, index) => {
            return <div key={index} className={style.option} onClick={() => handleClick(option)}>{option.name}</div>
        })}
    </div>
}