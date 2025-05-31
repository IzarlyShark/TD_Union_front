import style from "./Services.module.css";
import Select from "../Select/Select";
import Value from "../Select/Value/Value";
import Options from "../Select/Options/Options";
import { useState, useMemo, useRef, useEffect } from "react";
import { options } from "../../Utils/options";
import { services } from "../../Utils/services";
import { useSelector, useDispatch } from "react-redux";
import { setServiceActiveTag } from "../../Redux/Slices/Services/Services";


export default function Services() {
    const dispatch = useDispatch()
    const valueActiveTag = useSelector(state => state.services.serviceActiveTag)
    const [isOpen, setIsOpen] = useState(false)
    const service = useMemo(() => services.find(item => item.value === valueActiveTag?.value), [valueActiveTag])
    

    function setValueActiveTag(item) {
        dispatch(setServiceActiveTag(item))
    }

    return <div className={style.Services} id="services">
        <div className={`${style.container} content`}>
            <div className={style.select__container}>
                <h1>Услуги: </h1>
                <Select >
                    <Value value={valueActiveTag} handleOpen={() => setIsOpen(!isOpen)}/>
                    <Options options={options} handleClose={() => setIsOpen(!isOpen)} isOpen={isOpen} setValueActiveTag={(item) => setValueActiveTag(item)}/>
                </Select>
            </div>
            <div className={`${style.servise__content} ${ service && style.active}`}>
                <h2 className={style.servise__content_name}>{service?.name}</h2>
                <p className={style.servise__content_description}>{service?.description}</p>
            </div>
        </div>
    </div>
}