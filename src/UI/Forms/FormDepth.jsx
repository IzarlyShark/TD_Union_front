import style from './Form.module.css'
import InputFormContainer from "../InputFormContainer/InputFormContainer";
import InputNumber from "../Inputs/InputNumber";
import cube from '../../Assets/Images/3d.png';
import pallet from '../../Assets/Images/pallet.png'
import { useState } from "react";
import { api } from '../../api';

export default function FormDepth() {

    const [value, setValue] = useState({
        squareWarehouse: '',
        heightWarehouse: '',
        heightPallet: '',
        weightPallet: '',
        typePallet: '',
        typeTech: '',
        userPhone: '',
        userName: '',
    })

    function handleInput(e) {
        console.log(e.target.value);
        
        setValue({...value, [e.target.name] : e.target.value})
    }

    function handleRadio (e) {
        setValue({...value, [e.target.name] : e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await api.createOrder(value)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return <div className={style.Form} onSubmit={handleSubmit}>
        <InputFormContainer label='Площадь склада (м²)' Icon={cube}>
            <InputNumber name={'squareWarehouse'} value={value.squareWarehouse} handleInput={handleInput} />
        </InputFormContainer>
         <InputFormContainer label='Высота склада (м)' Icon={cube}>
            <InputNumber name={'heightWarehouse'} value={value.heightWarehouse} handleInput={handleInput} />
        </InputFormContainer>
         <InputFormContainer label='Высота паллета (м)' Icon={cube}>
            <InputNumber name={'heightPallet'} value={value.heightPallet} handleInput={handleInput} />
        </InputFormContainer>
         <InputFormContainer label='Вес паллета (кг)' Icon={cube}>
            <InputNumber name={'weightPallet'} value={value.weightPallet} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Тип паллеты' Icon={pallet}>
            <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'FIN'} name="typePallet" /><label>FIN (120*100 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'EURO'} name="typePallet" /><label>EURO (120*80 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'USA'} name="typePallet" /><label>USA (120*120 см)</label></div>
            </div>
        </InputFormContainer>
        <InputFormContainer label='Тип используемой техники' Icon={pallet}>
            <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'Stacker'} name="typeTech" /><label>Ручной штабелер</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'Reach'} name="typeTech" /><label>Ричтрак</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'loader'} name="typeTech" /><label>Погрузчик</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" value={'other'} name="typeTech" /><label>Другое</label></div>
            </div>
        </InputFormContainer>
        <div className={style.user__container}>
            <input type="text" name="userPhone" value={value.userPhone} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите номер телефона"/>
            <input type="text" name="userName" value={value.userName} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите имя"/>
            <button type="submit" className={style.user__btn}>Получить расчеты в WhatsApp</button>
        </div>
    </div>
}