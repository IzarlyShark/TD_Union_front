import style from "./Header.module.css";
import logo from "../../Assets/Images/logo_TD_Union.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
      <div className={style.logoContainer}>
          <div className={style.triangle}></div>
          <img 
              src={logo} 
              alt="Acme Logo" 
              // height="36" 
              // width="36" 
          />
      </div>
  );
};

export default function Header() {
  return (
    <div className={style.header}>
      <div className={`${style.container} content`}>
        <Navbar isBordered>
          <NavbarContent justify="start" className={style.container}>
            <NavbarBrand style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <AcmeLogo />
              <span className={style.brandName}>ТД Юнион</span>
            </NavbarBrand>
            <NavbarContent className={`${style.nav} hidden sm:flex gap-3`}>
              <NavbarItem>
                <Button className={style.button} onClick={() => scrollToSection('home')}>
                  Главная
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button className={style.button} onClick={() => scrollToSection('about')}>
                  О нас
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button className={style.button} onClick={() => scrollToSection('calculator')}>
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

// Функция для прокрутки к секциям
const scrollToSection = (sectionId) => {
  // тут логика
};
