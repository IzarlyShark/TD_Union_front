import style from "./Calc.module.css";
import { useState } from "react";
import FormPallet from "../../UI/Forms/FormPallet";
import FormFrontal from "../../UI/Forms/FormFrontal";
import FormDepth from "../../UI/Forms/FormDepth";

export default function Calc() {
    const [formType, setFormType] = useState('pallet')

    return <div className={style.calc}>
        <div className={`${style.container} content`}>
            <h1>Калькулятор стеллажей</h1>
            <nav className={style.nav}>
                <button className={`${style.nav__btn} ${formType === 'pallet' && style.active}`} onClick={() => setFormType('pallet')}>Паллетные</button>
                <button className={`${style.nav__btn} ${formType === 'front' && style.active}`} onClick={() => setFormType('front')}>Фронтальные</button>
                <button className={`${style.nav__btn} ${formType === 'depth' && style.active}`} onClick={() => setFormType('depth')}>Глубинные</button>
            </nav>
            {formType === 'pallet' && <FormPallet />}
            {formType === 'front' && <FormFrontal />}
            {formType === 'depth' && <FormDepth />}
        </div>
    </div>

}