import style from './Form.module.css';
import InputFormContainer from "../InputFormContainer/InputFormContainer";
import InputNumber from "../Inputs/InputNumber";
import cube from '../../Assets/Images/3d.png';
import height from '../../Assets/Images/height.png';
import truck from '../../Assets/Images/truck.png';
import pallet from '../../Assets/Images/pallet.png';
import { useState, useEffect } from "react";
import { api } from "../../api";
import Preloader from "../../Components/Preloader/Preloader";

export default function FormMezzanine() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState({
        squareWarehouse: null,
        heightWarehouse: null,
        zone: null,
        floors: null,
        levelsPerFloor: null,
        typeStorage: null,
        weightPerUnit: null,
        dimensions: '',
        typeTech: null,
        userPhone: '',
        userName: '',
    });

    useEffect(() => {
        setDisabled(value.userName.length === 0 || value.userPhone.length === 0);
    }, [value]);

    function handleInput(e) {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    function handleRadio(e) {
        setValue({ ...value, [e.target.name]: e.target.value });
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
                zone: null,
                floors: null,
                levelsPerFloor: null,
                typeStorage: null,
                weightPerUnit: null,
                dimensions: '',
                typeTech: null,
                userPhone: '',
                userName: '',
            });
            setLoading(false);
            alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время!');
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
        setLoading(false);
    }

    return (
        <div className={style.Form} onSubmit={handleSubmit}>
            {loading && <Preloader />}
            <InputFormContainer label='Площадь склада (м²)' Icon={cube}>
                <InputNumber name={'squareWarehouse'} value={value.squareWarehouse} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Высота склада (м)' Icon={height}>
                <InputNumber name={'heightWarehouse'} value={value.heightWarehouse} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Зона экспедиции (%)' Icon={truck}>
                <InputNumber name={'zone'} value={value.zone} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Количество этажей' Icon={height}>
                <InputNumber name={'floors'} value={value.floors} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Кол-во уровней хранения на этаже' Icon={height}>
                <InputNumber name={'levelsPerFloor'} value={value.levelsPerFloor} handleInput={handleInput} />
            </InputFormContainer>
            <InputFormContainer label='Тип хранения' Icon={pallet}>
                <div className={style.Form__radio}>
                    <div className={style.radio__container}>
                        <input onChange={handleRadio} checked={value.typeStorage === 'Паллетное'} type="radio" value={'Паллетное'} name="typeStorage" />
                        <label>Паллетное</label>
                    </div>
                    <div className={style.radio__container}>
                        <input onChange={handleRadio} checked={value.typeStorage === 'Полочное'} type="radio" value={'Полочное'} name="typeStorage" />
                        <label>Полочное</label>
                    </div>
                </div>
            </InputFormContainer>
            <InputFormContainer label='Вес единицы хранения товара (кг)' Icon={pallet}>
                <InputNumber name={'weightPerUnit'} value={value.weightPerUnit} handleInput={handleInput} />
            </InputFormContainer>
                            <InputFormContainer label='Габариты единицы товара' Icon={height}>
                    <input type="text" name="dimensions" value={value.dimensions} onChange={handleInput} className={style.user__input} />
                </InputFormContainer>
                <InputFormContainer label='Тип используемой техники' Icon={truck}>
                    <div className={style.Form__radio}>
                        <div className={style.radio__container}>
                            <input onChange={handleRadio} checked={value.typeTech === 'Тележка'} type="radio" value={'Тележка'} name="typeTech" />
                            <label>Тележка</label>
                        </div>
                        <div className={style.radio__container}>
                            <input onChange={handleRadio} checked={value.typeTech === 'Рохля'} type="radio" value={'Рохля'} name="typeTech" />
                            <label>Рохля</label>
                        </div>
                        <div className={style.radio__container}>
                            <input onChange={handleRadio} checked={value.typeTech === 'Другое'} type="radio" value={'Другое'} name="typeTech" />
                            <label>Другое</label>
                        </div>
                    </div>
                </InputFormContainer>
                <div className={style.user__container}>
                    <input type="text" name="userPhone" value={value.userPhone} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите номер телефона" />
                    <input type="text" name="userName" value={value.userName} onChange={(e) => handleInput(e)} className={style.user__input} placeholder="Введите имя" />
                    <button disabled={disabled} type="submit" className={style.user__btn}>Получить расчеты в WhatsApp</button>
                </div>
            </div>
        );
}

            
