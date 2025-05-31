import style from "./Select.module.css";
import { useState } from "react";

export default function Select({ children }) {
    return <div className={style.select}>
        {children}
    </div>
}