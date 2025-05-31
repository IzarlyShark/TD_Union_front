import style from "./InputFormContainer.module.css";

export default function InputFormContainer({ children, label, Icon }) {
    return <div className={style.InputFormContainer}>
        <img src={Icon} className={style.Icon} alt="icon" />
        <label className={style.label}>{label}</label>
        {children}
    </div>
}