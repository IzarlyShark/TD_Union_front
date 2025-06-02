import style from "./Main.module.css"; 
import backgroundMain from '../../Assets/Images/Group 44.png'; 
import { useEffect, useState } from "react";
import { api } from '../../api';

export default function Main() { 
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState({ email: "" });

    const handleChange = (event) => { 
        setValue({ ...value, [event.target.name]: event.target.value });
    }; 

    useEffect(() => {
        setDisabled(value.email.length === 0);
    }, [value])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await api.createOrder(value)
            console.log(res)
            setValue({
                email: '',
            })
        } catch (e) {
            console.log(e)
        }
    }

    return ( 
        <div className={style.main} id="home"> 
         <div className={`${style.container} content`}>
            <div className={style.background} style={{ backgroundImage: `url(${backgroundMain})` }}>
                <h1 className={style.slogan}>Мы — профессионалы в области складских решений, создающие пространство для вашего успеха!</h1> 
                <form className={style.form} onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Введите ваш email" 
                        onChange={handleChange} 
                        className={style.input} 
                        value={value.email}
                        name="email"
                        required 
                    /> 
                    <button disabled={disabled} type="submit" className={style.button}>Отправить заявку</button> 
                </form> 
            </div>
            </div> 
        </div> 
    ); 
}