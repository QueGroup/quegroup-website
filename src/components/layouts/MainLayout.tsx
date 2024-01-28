import { useNavigate, useLocation, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { randomPoz1, randomPoz2, randomPoz3, randomPoz4, randomPoz5, randomPoz6, randomPoz7, randomPoz8, randomPoz9, randomPoz10, randomPoz11, randomPoz12 } from "../scripts/HeartsRandom";
import Header from "./header/Header";
import styles from './MainLayout.module.scss';
import Footer from "./footer/Footer";

const MainLayout : React.FC = () => {
	useNavigate();
	const location = useLocation();

  const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        // if (window.scrollY >= 500) {
        //     setIsSticky(true)
        // } else if (window.scrollY < 500) {
        //   setIsSticky(false)
        // }

        window.addEventListener('scroll', () => {
          const current = window.scrollY

          if (current < 700 || current > 5600) {
              setIsSticky(false)
          } else if (current >= 500 && isSticky !== true) {
              setIsSticky(true)
          }
      })
    }, [isSticky])

	const [main, setMain] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

	useEffect((): void => {
		if (location.pathname === "/" || location.pathname === "/politics") {
      setMain(true)
    }
    else if (location.pathname === "/isloading" || location.pathname === "/98") {
      setLoading(true)
    }

    else if (location.pathname !== "/") {
        setMain(false)
    }
  }, [location]);


  return (
    <div className={`${main ? styles.mainStyle : ''} ${styles.layout}`}>
        <div className={`${main ? styles.hearts : 'disabled'}`}>
              <div className={`${styles.heart} ${loading ? "disabled" : ""}`}>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz1} alt=""/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz2} alt=""/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz3} alt=""/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz4} alt=""/>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz5} alt=""/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz6} alt=""/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz7} alt=""/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz8} alt=""/>
                  <img src="/img/little-heart-pink.png" className={styles.heartLittle} style={randomPoz9} alt=""/>
                  <img src="/img/little-heart-pink-right.png" className={styles.heartLittle} style={randomPoz10} alt=""/>
                  <img src="/img/little-heart-purple.png" className={styles.heartLittle} style={randomPoz11} alt=""/>
                  <img src="/img/little-heart-purple-right.png" className={styles.heartLittle} style={randomPoz12} alt=""/>
              </div>
        </div>
        <div className={`${loading ? "disabled" : ""} ${isSticky ? styles.sticky : "hi"}`}>
            <Header/>
        </div>
            <Outlet/>
        <div className={`${loading ? "disabled" : ""}`}>
            <Footer/>
        </div>
    </div>
  )
}

export default MainLayout