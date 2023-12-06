import { useNavigate, useLocation, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { randomPoz1, randomPoz2, randomPoz3, randomPoz4, randomPoz5, randomPoz6, randomPoz7, randomPoz8, randomPoz9, randomPoz10, randomPoz11, randomPoz12 } from "../scripts/HeartsRandom";
import Header from "./header/Header";
import styles from './MainLayout.module.css';
import Footer from "./footer/Footer";

const MainLayout : React.FC = () => {
  useNavigate();
  const location = useLocation();

  const [main, setMain] = useState<boolean>(true)

    useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/politics") {
      setMain(true)
    }

    else if (location.pathname !== "/") {
        setMain(false)
    }
  }, [location]);


  return (
    <div className={`${main ? styles.mainStyle : ''}`}>
        <div className={`${main ? styles.hearts : 'disabled'}`}>
              <div className={styles.heart}>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz1}/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz2}/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz3}/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz4}/>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz5}/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz6}/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz7}/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz8}/>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz9}/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz10}/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz11}/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz12}/>
              </div>
        </div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout