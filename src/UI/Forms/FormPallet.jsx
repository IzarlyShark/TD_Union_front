import style from "./Form.module.css";
import InputFormContainer from "../InputFormContainer/InputFormContainer";
import InputNumber from "../Inputs/InputNumber";
import cube from '../../Assets/Images/3d.png';
import height from '../../Assets/Images/height.png'
import truck from '../../Assets/Images/truck.png'
import pallet from '../../Assets/Images/pallet.png'
import height1 from '../../Assets/Images/height1.png'
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function FormPallet() {
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState({
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

    useEffect(() => {
        setDisabled(value.userName.length === 0 || value.userPhone.length === 0);
    }, [value])

    function handleInput(e) {
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
         } catch (e) {
             console.log(e)
         }
     }

    return <form onSubmit={handleSubmit} className={style.Form}>
        <InputFormContainer label='Площадь склада (м²)' Icon={cube}>
            <InputNumber name={'squareWarehouse'} value={value.squareWarehouse} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Высота склада (м)' Icon={height}>
            <InputNumber name={'heightWarehouse'} value={value.heightWarehouse} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Высота паллеты (м)' Icon={height}>
            <InputNumber name={'heightPallet'} value={value.heightPallet} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Зона экспедиции (%)' Icon={truck}>
            <InputNumber name={'zone'} value={value.zone} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Вес паллета (кг)' Icon={pallet}>
            <InputNumber name={'weightPallet'} value={value.weightPallet} handleInput={handleInput} />
        </InputFormContainer>
        <InputFormContainer label='Тип паллеты' Icon={pallet}>
            <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'FIN'} value={'FIN'} name="typePallet" /><label>FIN (120*100 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'EURO'} value={'EURO'} name="typePallet" /><label>EURO (120*80 см)</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.typePallet === 'USA'} value={'USA'} name="typePallet" /><label>USA (120*120 см)</label></div>
            </div>
        </InputFormContainer>
        <InputFormContainer label='Проезды для техники' Icon={height1}>
            <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.widthTransit === '2.5м-2.9м'} value={'2.5м-2.9м'} name="widthTransit" /><label>от 2.5м до 2.9м</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.widthTransit === '3м-3.2м'} value={'3м-3.2м'} name="widthTransit" /><label>от 3м до 3.2м</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} type="radio" checked={value.widthTransit === '>3.3м'} value={'>3.3м'} name="widthTransit" /><label>более 3.3м</label></div>
            </div>
        </InputFormContainer>
        <InputFormContainer label='Тип используемой техники' Icon={truck}>
             <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Stacker'} type="radio" value={'Stacker'} name="typeTech" /><label>Ручной штабелер</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Reach'} type="radio" value={'Reach '} name="typeTech" /><label>Ричтрак</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'loader'} type="radio" value={'loader'} name="typeTech" /><label>Погрузчик</label></div>
            </div>
        </InputFormContainer>
        <div className={style.user__container}>
            <input type="number" name="userPhone" value={value.userPhone} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите номер телефона"/>
            <input type="text" name="userName" value={value.userName} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите имя"/>
            <button disabled={disabled} type="submit" className={style.user__btn}>Получить расчеты в WhatsApp</button>
        </div>
    </form>
}