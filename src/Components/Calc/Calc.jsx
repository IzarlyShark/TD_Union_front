import style from "./Calc.module.css";
import { useState } from "react";
import FormPallet from "../../UI/Forms/FormPallet";
import FormFrontal from "../../UI/Forms/FormFrontal";
import FormDepth from "../../UI/Forms/FormDepth";
import FormShelves from "../../UI/Forms/FormShelves";
import FormMezzanine from "../../UI/Forms/FormMezzanine";
import { useDispatch, useSelector } from "react-redux";
import { setFormType } from "../../Redux/Slices/Calc";

export default function Calc() {
    const dispatch = useDispatch()
    const formType = useSelector(state => state.calc.formType)

    return <div className={style.calc} id="calc">
        <div className={`${style.container} content`}>
            <h1>Калькулятор стеллажей</h1>
            <nav className={style.nav}>
                <button className={`${style.nav__btn} ${formType === 'pallet' && style.active}`} onClick={() => dispatch(setFormType('pallet'))}>Паллетные</button>
                <button className={`${style.nav__btn} ${formType === 'front' && style.active}`} onClick={() => dispatch(setFormType('front'))}>Фронтальные</button>
                <button className={`${style.nav__btn} ${formType === 'depth' && style.active}`} onClick={() => dispatch(setFormType('depth'))}>Глубинные</button>
                <button className={`${style.nav__btn} ${formType === 'shelves' && style.active}`} onClick={() => dispatch(setFormType('shelves'))}>Полочные</button>
                <button className={`${style.nav__btn} ${formType === 'mezzanine' && style.active}`} onClick={() => dispatch(setFormType('mezzanine'))}>Мезонинные</button>
            </nav>
            {formType === 'pallet' && <FormPallet />}
            {formType === 'front' && <FormFrontal />}
            {formType === 'depth' && <FormDepth />}
            {formType === 'shelves' && <FormShelves />}
            {formType === 'mezzanine' && <FormMezzanine />}
        </div>
    </div>

}