import style from "./Main.module.css"; 
import backgroundMain from '../../Assets/Images/Group 44.png'; 

export default function Main() { 
    const handleChange = (event) => { 
        console.log(event.target.value); 
    }; 

    return ( 
        <div className={style.main}> 
         <div className={`${style.container} content`}>
            <div className={style.background} style={{ backgroundImage: `url(${backgroundMain})` }}>
                <h1 className={style.slogan}>Мы — профессионалы в области складских решений, создающие пространство для вашего успеха!</h1> 
                <form className={style.form}> 
                    <input 
                        type="email" 
                        placeholder="Введите ваш email" 
                        onChange={handleChange} 
                        className={style.input} 
                        required 
                    /> 
                    <button type="submit" className={style.button}>Отправить заявку</button> 
                </form> 
            </div>
            </div> 
        </div> 
    ); 
}