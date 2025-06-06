import style from "./Form.module.css";
import InputFormContainer from "../InputFormContainer/InputFormContainer";
import InputNumber from "../Inputs/InputNumber";
import cube from '../../Assets/Images/3d.png';
import height from '../../Assets/Images/height.png';
import truck from '../../Assets/Images/truck.png';
import pallet from '../../Assets/Images/pallet.png';
import { useEffect, useState } from "react";
import { api } from "../../api";
import Preloader from "../../Components/Preloader/Preloader";

export default function FormShelves() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState({
        squareWarehouse: null,
        heightWarehouse: null,
        productDimensions: null,
        zone: null,
        weightUnit: null,
        typeStorage: null,
        userPhone: '',
        userName: '',
    });

    useEffect(() => {
        setDisabled(value.userName.length === 0 || value.userPhone.length === 0);
    }, [value]);

    function handleInput(e) {
        setValue({...value, [e.target.name]: e.target.value});
    }

    function handleRadio(e) {
        setValue({...value, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.createOrder(value);
            console.log(res);
            setValue({
                squareWarehouse: null,
                heightWarehouse: null,
                productDimensions: null,
                zone: null,
                weightUnit: null,
                typeStorage: null,
                userPhone: '',
                userName: '',
            });
            setDisabled(false);
            alert('Заявка отправлена!, мы свяжемся с вами в ближайшее время!');
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className={style.Form}>
            {loading && <Preloader />}
            <InputFormContainer label='Площадь склада (м²)' Icon={cube}>
                <InputNumber name={'squareWarehouse'} value={value.squareWarehouse} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Высота склада (м)' Icon={height}>
                <InputNumber name={'heightWarehouse'} value={value.heightWarehouse} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Габариты единицы товара' Icon={height}>
                <InputNumber name={'productDimensions'} value={value.productDimensions} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Зона экспедиции (%)' Icon={truck}>
                <InputNumber name={'zone'} value={value.zone} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Вес единицы товара (кг)' Icon={pallet}>
                <InputNumber name={'weightUnit'} value={value.weightUnit} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Тип используемой техники' Icon={truck}>
             <div className={style.Form__radio}>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Stacker'} type="radio" value={'Stacker'} name="typeTech" /><label>Ручной штабелер</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Reach'} type="radio" value={'Reach '} name="typeTech" /><label>Ричтрак</label></div>
                <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'loader'} type="radio" value={'loader'} name="typeTech" /><label>Погрузчик</label></div>
            </div>
            </InputFormContainer>
            <InputFormContainer label='Тип используемой техники' Icon={pallet}>
                <div className={style.Form__radio}>
                    <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Trolley'} type="radio" value={'Trolley'} name="typeTech" /><label>Тележка</label></div>
                    <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'PalletJack'} type="radio" value={'PalletJack '} name="typeTech" /><label>Рохля</label></div>
                    <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Stacker'} type="radio" value={'Stacker'} name="typeTech" /><label>Ручной штабелер</label></div>
                    <div className={style.radio__container}><input onChange={handleRadio} checked={value.typeTech === 'Other'} type="radio" value={'Other'} name="typeTech" /><label>Погрузчик</label></div>
                </div>
            </InputFormContainer>
            <div className={style.user__container}>
                <input type="number" name="userPhone" value={value.userPhone} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите номер телефона" />
                <input type="text" name="userName" value={value.userName} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите имя" />
                <button disabled={disabled} type="submit" className={style.user__btn}>Получить расчеты в WhatsApp</button>
            </div>
        </form>
    );
}
