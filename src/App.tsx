import styles from './App.module.css';
import './assets/fonts/fonts.module.css'
import Header from './Components/Header/Header'
import React from 'react';
import Nav from './Components/Nav/Nav';
import SwiperElena from './Components/Swiper/Swiper';
import SocialSideMenu from './Components/SocialSideMenu/SocialSideMenu';
import Catalog from './Components/Catalog/Catalog';
import AboutBlock from './Components/AboutBlock/AboutBlock';
import Showroom from './Components/Showroom/Showroom';
import './Components/_color.css'
import FormFitting from './Components/FormFitting/FormFitting';

function App(): JSX.Element {
  return (<>
    <div className={styles.container}>
      <Header />
      <Nav />
    </div>
    <SwiperElena />
    <SocialSideMenu />
    <main>
      <div className={styles.container}>
        <Catalog />
        <AboutBlock />
        <Showroom />
        <FormFitting/>
      </div>
    </main>
  </>
  );
}

export default App;
