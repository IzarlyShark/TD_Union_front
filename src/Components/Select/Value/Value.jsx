import style from "./Value.module.css";
import { useState } from "react";

export default function Value({ value, handleOpen }) {
    console.log(value);
    
    return <div className={style.value} onClick={handleOpen}>
        {value ? value.name : 'Выберите'}
    </div>
}