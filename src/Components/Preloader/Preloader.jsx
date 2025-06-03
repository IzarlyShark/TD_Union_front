import style from "./Preloader.module.css";

export default function Preloader() {
    return <div className={style.overlay}>
        <span className={style.loader}></span>
    </div>
}