import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import swiprePhotoOne from '../../assets/img/swiper/swiper_1.jpg';
import swiprePhotoOneWebP from '../../assets/img/swiper/swiper_1.webp';
import swiprePhotoTwo from '../../assets/img/swiper/swiper_2.jpg';
import swiprePhotoTwoWebP from '../../assets/img/swiper/swiper_2.webp';
import swiprePhotoThree from '../../assets/img/swiper/swiper_3.jpg';
import swiprePhotoThreeWebP from '../../assets/img/swiper/swiper_3.webp';
import swiprePhotoFour from '../../assets/img/swiper/swiper_4.jpg';
import swiprePhotoFourWebP from '../../assets/img/swiper/swiper_4.webp';
import swiprePhotoFive from '../../assets/img/swiper/swiper_5.jpg';
import swiprePhotoFiveWebP from '../../assets/img/swiper/swiper_5.webp';
import './SwiperTop.css';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imgSwiper = {
	photoSwiper: [
		{
			id: 0,
			photoJpg: swiprePhotoOne,
			photoWebp: swiprePhotoOneWebP,
			swiperText: 'ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕрНИЕ МЕРОПРИЯТИЯ'
		},
		{
			id: 1,
			photoJpg: swiprePhotoTwo,
			photoWebp: swiprePhotoTwoWebP,
			swiperText: 'ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕрНИЕ МЕРОПРИЯТИЯ'
		},
		{
			id: 2,
			photoJpg: swiprePhotoThree,
			photoWebp: swiprePhotoThreeWebP,
			swiperText: 'ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕрНИЕ МЕРОПРИЯТИЯ'
		},
		{
			id: 3,
			photoJpg: swiprePhotoFour,
			photoWebp: swiprePhotoFourWebP,
			swiperText: 'ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕрНИЕ МЕРОПРИЯТИЯ'
		},
		{
			id: 4,
			photoJpg: swiprePhotoFive,
			photoWebp: swiprePhotoFiveWebP,
			swiperText: 'ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕрНИЕ МЕРОПРИЯТИЯ'
		},
	],


}



const SwiperTop = (): JSX.Element => {
	return (
		<>
			<Swiper
				modules={[Pagination, Navigation]}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className="headerSwiper"
				breakpoints={{
					480: {
						slidesPerView: 1,

					},
					318: {
						slidesPerView: 3,
					}
				}}
			>
				{
					imgSwiper.photoSwiper.map(e => {
						return (
							<SwiperSlide className='swiperTop-slide' key={e.id} >
								<picture className='swiperOne'>
									<source srcSet={e.photoWebp} type='image/webp' />
									<img src={e.photoJpg} alt='' />
								</picture>
								<p className='swiperPhotoText'>{e.swiperText}</p>
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</>
	);
};


export default SwiperTop;