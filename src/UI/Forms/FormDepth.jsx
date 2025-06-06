import style from './Form.module.css'
import InputFormContainer from "../InputFormContainer/InputFormContainer";
import InputPhoneNumber from "../Inputs/inputPhoneNumber";
import InputNumber from "../Inputs/InputNumber";
import cube from '../../Assets/Images/3d.png';
import pallet from '../../Assets/Images/pallet.png'
import { useState, useEffect } from "react";
import { api } from '../../api';
import Preloader from '../../Components/Preloader/Preloader';

export default function FormDepth() {
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        setDisabled(value.userName.length === 0 || value.userPhone.length === 0);
    }, [value])
    

    function handleInput(e) {
        console.log(e.target.value);
        
        setValue({...value, [e.target.name] : e.target.value})
    }

    function handleRadio (e) {
        setValue({...value, [e.target.name] : e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.createOrder(value)
            console.log(res)
            setValue({
                squareWarehouse: null,
                heightWarehouse: null,
                heightPallet: null,
                zone: null,
                weightPallet: null,
                typePallet: null,
                widthTransit: null,
                typeTech: null,
                userPhone: '',
                userName: '',
            })
            setLoading(false);
            alert('Заявка отправлена!, мы свяжемся с вами в ближайшее время!')
        } catch (e) {
            console.log(e)
            setLoading(false);
        }
        setLoading(false);
    }

    return <div className={style.Form} onSubmit={handleSubmit}>
        {loading && <Preloader />}
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
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'FIN'} value={'FIN'} name="typePallet" /><label>FIN (120*100 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'EURO'} value={'EURO'} name="typePallet" /><label>EURO (120*80 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'USA'} value={'USA'} name="typePallet" /><label>USA (120*120 см)</label></div>
            </div>
        </InputFormContainer>
        <InputFormContainer label='Тип используемой техники' Icon={pallet}>
            <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Stacker'}  type="radio" value={'Stacker'} name="typeTech" /><label>Ручной штабелер</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Reach'}  type="radio" value={'Reach'} name="typeTech" /><label>Ричтрак</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'loader'}  type="radio" value={'loader'} name="typeTech" /><label>Погрузчик</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'other'} type="radio" value={'other'} name="typeTech" /><label>Другое</label></div>
            </div>
        </InputFormContainer>
        <div className={style.user__container}>
            <InputPhoneNumber name="userPhone" value={value.userPhone} handleInput={handleInput} placeholder="Введите номер телефона"/>    
            <input type="text" name="userName" value={value.userName} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите имя"/>
            <button disabled={disabled} type="submit" className={style.user__btn}>Получить расчеты в WhatsApp</button>
        </div>
    </div>
}