import styles from './App.module.css';
import './assets/fonts/fonts.module.css'
import SwiperTop from './Components/SwiperTop/SwiperTop';
import SocialSideMenu from './Components/SocialSideMenu/SocialSideMenu';
import Catalog from './Components/Catalog/Catalog';
import AboutBlock from './Components/AboutBlock/AboutBlock';
import Showroom from './Components/Showroom/Showroom';
import './Components/_color.css'
import FormFitting from './Components/FormFitting/FormFitting';
import ClientsSwiper from './Components/ClientsSwiper/ClientsSwiper';
import InstagramCards from './Components/InstagramCards/InstagramCards';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getProfileTH } from './Redux/Auth-reducer';

type AppType = {
  getProfileTH: () => void
}

function App(props: AppType) {

  useEffect(() => {
    props.getProfileTH()
  }, [])

  return (
    <>
      <SwiperTop />
      <SocialSideMenu />
      <div className={styles.container}>
        <Catalog />
        <AboutBlock />
        <Showroom />
        <FormFitting />
        <ClientsSwiper />
        <InstagramCards />
      </div>


    </>
  );
}


export default connect(null, { getProfileTH })(App);
