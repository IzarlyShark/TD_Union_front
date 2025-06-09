import style from "./Header.module.css";
import logo from "../../Assets/Images/logo238.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { useEffect, useState, useRef } from "react";

export const AcmeLogo = () => {
  return (
      <div className={style.logoContainer}>
          <div className={style.triangle}></div>
          <img 
              src={logo} 
              alt="Acme Logo" 
          />
      </div>
  );
};

export default function Header() {
  const ref = useRef();
  const [calc, setCalc] = useState();
  const [about, setAbout] = useState();
  const [home, setHome] = useState();

  useEffect(() => {
    setCalc(document.querySelector('#calc'))
    setAbout(document.querySelector('#about'))
    setHome(document.querySelector('#home'))
  }, [ref]);

   function handleNavigate (item) {
    if(item === 'calc'){
      calc.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if(item === 'about'){
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (item === 'home') {
      home.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className={style.header} ref={ref}>
      <div className={`${style.container} content`}>
        <AcmeLogo />
        <Navbar isBordered>
          <NavbarContent justify="start" className={style.container}>
            <NavbarBrand style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              {/* <AcmeLogo /> */}
              {/* <span className={style.brandName}>ТД Юнион</span> */}
            </NavbarBrand>
            <NavbarContent className={`${style.nav} hidden sm:flex gap-3`}>
              <NavbarItem>
                <Button className={style.button} onClick={() => handleNavigate('home')}>
                  Главная
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button className={style.button} onClick={() => handleNavigate('about')}>
                  О нас
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button className={style.button} onClick={() => handleNavigate('calc')}>
                  Калькулятор
                </Button>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
}


