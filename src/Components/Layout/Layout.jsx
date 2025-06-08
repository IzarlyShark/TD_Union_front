import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Marquee from "../Marquee/Marquee";

export default function Layout() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        // if(!user){
        //     navigate('/login')
        // }
    }, [user])

    return <div className={style.Layout}>
        <Header />
        <Marquee />
        <Outlet />
        <Marquee />
        <Footer />
    </div>

}