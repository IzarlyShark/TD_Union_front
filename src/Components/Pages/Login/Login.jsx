import style from "./Login.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../../Redux/Slices/User/thunk';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch()
    const errorLogin = useSelector(state => state.user.error)
    const [err, setErr] = useState({state : false, message : ''})
    const [values, setValues] = useState({email : '', password : ''})
    const isLoading = useSelector(state => state.user.isLoading)
    const navigate = useNavigate()

    useEffect(() => {
        if(errorLogin){
            setErr({state : true, message : errorLogin})
        }
    }, [errorLogin])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(err.state) return
        const form = e.target
        const data = new FormData(form)
        const values = Object.fromEntries(data.entries())
        const res = await dispatch(loginThunk(values))
        if(!res.error){
            navigate('/workplace')
        }
    }

    function handleInput(e){
        setValues({...values, [e.target.name] : e.target.value})
    }

    useEffect(() => {
        const arrValues = Object.values(values)
        if(arrValues.every(value => value.trim().length > 0)){
            setErr({state : false, message : ''})
        } else {
            setErr({state : true, message : 'Please fill all fields'})
        }
    }, [values])

    return (
        <div className={style.Login}>
            <form className={style.form} onSubmit={handleSubmit} >
                <h1>Login</h1>
                <input value={values.email} onInput={handleInput} className={style.inp} type="text" name="email" placeholder="Email"  autoComplete="off" />
                <input value={values.password} onInput={handleInput} className={style.inp} type="password" name="password" placeholder="Password" autoComplete="off" />
                {err.state && <p className={style.err}>{err.message}</p>}
                {isLoading && <p className={style.err}>Loading...</p>}
                <button disabled={isLoading || err.state} className={style.btn} type="submit">Enter</button>
            </form>
            
        </div>
    );
}