import styles from './App.module.css';
import './assets/fonts/fonts.module.css'
import Header from './Components/Header/Header'
import React from 'react';
import Nav from './Components/Nav/Nav';
import SwiperTop from './Components/Swiper/Swiper';
import SocialSideMenu from './Components/SocialSideMenu/SocialSideMenu';
import Catalog from './Components/Catalog/Catalog';
import AboutBlock from './Components/AboutBlock/AboutBlock';
import Showroom from './Components/Showroom/Showroom';
import './Components/_color.css'
import FormFitting from './Components/FormFitting/FormFitting';
import ClientsSwiper from './Components/ClientsSwiper/ClientsSwiper';
import ClientsReviews from './Components/ClientsSwiper/ClientsReviews/ClientsReviews';
import InstagramCards from './Components/InstagramCards/InstagramCards';

function App(): JSX.Element {
  return (<>
    <div className={styles.container}>
      <Header />
      <Nav />
    </div>
    <SwiperTop />
    <SocialSideMenu />
    <main>
      <div className={styles.container}>
        <Catalog />
        <AboutBlock />
        <Showroom />
        <FormFitting />
        <ClientsSwiper />
        <ClientsReviews />
        <InstagramCards />
      </div>
    </main>
  </>
  );
}

export default App;
