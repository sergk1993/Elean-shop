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




// let url = 'https://63c6490edcdc478e15be59ac.mockapi.io/products'
// export const instance = fetch(url, {
// 	method: 'POST',
// }).then((res) => {

// 	console.log(res);
// 	console.log('ура');
// }, (reason) => {

// 	console.log('не ура')
// })




function App() {
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


export default App;
