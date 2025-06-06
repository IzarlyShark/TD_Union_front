import style from "./Input.module.css";

export default function InputNumber({ name, value, handleInput, placeholder }) {
    return <input type="number" placeholder={placeholder} name={name} className={style.InputNumber} value={value !== null ? value : '' } onInput={handleInput} />
}