import style from "./Input.module.css";

export default function InputNumber({ name, value, handleInput }) {
    return <input type="number" name={name} className={style.InputNumber} value={value !== null ? value : '' } onInput={handleInput} />
}