import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const HEADER_HEIGHT = "60px"
const EXIT = "fa fa-times"
const HAMBURGER = "fa fa-bars"
const Header = () => {
  const header = useRef()
  const [menu,setMenu] = useState(false)
  useEffect(
    ()=>{
      header.current.style.height = menu ? "auto" : HEADER_HEIGHT
      // header.current.classList.toggle("menu_toggle")
      // if(menu){
      //   header.current.classList.add("menu_toggle")
      // }else{
      //   header.current.classList.remove("menu_toggle")
      // }

    },
    [menu]
  )
  return (
    <>
      <header ref={header} className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#access">Access</a>
            </li>
            <li>
              <a href="#recruit">Recruit</a>
            </li>
          </ul>
        </nav>
        <button>Contact</button>
        <span className={styles.menu} onClick={()=>setMenu(!menu)}>
          <i className={menu ? EXIT : HAMBURGER}></i>
        </span>
      </header>
    </>
  );
};

export default Header;
