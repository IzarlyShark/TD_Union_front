import { useEffect } from "react";
import style from "./Input.module.css";
import { useState } from "react";

export default function InputPhoneNumber({ name, value, handleInput, placeholder }) {

    const [inpValue, setInpValue] = useState(value);

    useEffect(() => {
        setInpValue(value);
    }, [value]);

    useEffect(() => {
        handleInput({ target: { value: inpValue } });
    }, [inpValue]);

    function handleChange(e) {
        const { value } = e.target;
        
        if(!inpValue.startsWith('+')){
            e.target.value = '+7' + value;
        }
        setInpValue(e.target.value.replace(/[^0-9+]/g, ''));
    }

    return <input type="text" placeholder={placeholder} name={name} className={style.InputPhoneNumber} value={inpValue !== null ? inpValue : '' } onInput={handleChange} />
}