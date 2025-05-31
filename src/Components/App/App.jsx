import style from "./App.module.css";
import Login from "../Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";

export default function App() {
  return <div className={style.app}>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} >
            <Route path="" element={<Home />} />
        </Route>
    </Routes>
  </div>
}