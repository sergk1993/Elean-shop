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
import './Swiper.css';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



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
			>
				<SwiperSlide className='swiper-slide'>
					<picture className='swiperOne'>
						<source srcSet={swiprePhotoOneWebP} type='image/webp' />
						<img src={swiprePhotoOne} alt="posing girl" />
					</picture>
					<p className='swiperPhotoText'>ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ</p>
				</SwiperSlide>

				<SwiperSlide className='swiper-slide'>
					<picture className='swiperOne'>
						<source srcSet={swiprePhotoTwoWebP} type='image/webp' />
						<img src={swiprePhotoTwo} alt="posing girl" />
					</picture>
					<p className='swiperPhotoText'>ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ</p>
				</SwiperSlide>

				<SwiperSlide className='swiper-slide'>
					<picture className='swiperOne'>
						<source srcSet={swiprePhotoThreeWebP} type='image/webp' />
						<img src={swiprePhotoThree} alt="posing girl" />
					</picture>
					<p className='swiperPhotoText'>ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ</p>
				</SwiperSlide>


				<SwiperSlide className='swiper-slide'>
					<picture className='swiperOne'>
						<source srcSet={swiprePhotoFourWebP} type='image/webp' />
						<img src={swiprePhotoFour} alt="posing girl" />
					</picture>
					<p className='swiperPhotoText'>ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ</p>
				</SwiperSlide>

				<SwiperSlide className='swiper-slide' >
					<picture className='swiperOne' >
						<source srcSet={swiprePhotoFiveWebP} type='image/webp' />
						<img src={swiprePhotoFive} alt="posing girl" />
					</picture>
					<p className='swiperPhotoText'>ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ</p>
				</SwiperSlide>

			</Swiper>


		</>
	);
};


export default SwiperTop;