import { useMemo } from "react";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";


export default function Profile() {
    const user = useSelector(state => state.user.user)

    const initials = useMemo(() => user?.firstName?.charAt(0) + user?.lastName?.charAt(0), [user])
    
    return <div className={style.profile}>
        <div className={style.avatar}>{
            initials ? initials : 'AA'
        }</div>
    </div>
}