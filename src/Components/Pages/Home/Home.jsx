import style from "./Home.module.css";
import Main from "../../Main/Main";
import About from "../../About/About";
import RackTypes from "../../RackTypes/RackTypes";
import Calc from "../../Calc/Calc";
import Services from "../../Services/Services";

export default function Home() {
    return <div className={style.Home}>
        <Main />
        <About />
        <RackTypes />
        <Calc />
        <Services />
    </div>
}  