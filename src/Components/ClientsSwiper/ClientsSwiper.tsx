import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ClientsSwiper.css';
import ClientsSwiperJpg1 from '../../assets/img/ClientsSwiper/ClientsSwiper1.jpg'
import ClientsSwiperWebp1 from '../../assets/img/ClientsSwiper/ClientsSwiper1.webp'

import ClientsSwiperJpg2 from '../../assets/img/ClientsSwiper/ClientsSwiper2.jpg'
import ClientsSwiperWebp2 from '../../assets/img/ClientsSwiper/ClientsSwiper2.webp'
import 'swiper/css/navigation';

function ClientsSwiper(): JSX.Element {


	return (
		<section className='swiperMainBottomWrapper'>


			<Swiper
				modules={[Pagination, Navigation]}
				spaceBetween={10}
				slidesPerView={5}
				pagination={{ clickable: true }}

				navigation={{
					prevEl: '.ClientsSwiperPrev',
					nextEl: '.ClientsSwiperNext',
				}}

				grabCursor={true}
				className='swiperMainBottom'
			>


				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp1} />
							<img src={ClientsSwiperJpg1} alt="" />
						</picture>
						<p >Альбина Джанабаева </p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp2} />
							<img src={ClientsSwiperJpg2} alt="" />
						</picture>
						<p>Екатерина Данилова</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp1} />
							<img src={ClientsSwiperJpg1} alt="" />
						</picture>
						<p >Альбина Джанабаева </p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp2} />
							<img className='ClientsSwiperImage' src={ClientsSwiperJpg2} alt="" />
						</picture>
						<p>Екатерина Данилова</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp1} />
							<img src={ClientsSwiperJpg1} alt="" />
						</picture>
						<p >Альбина Джанабаева </p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp2} />
							<img src={ClientsSwiperJpg2} alt="" />
						</picture>
						<p>Екатерина Данилова</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp1} />
							<img src={ClientsSwiperJpg1} alt="" />
						</picture>
						<p >Альбина Джанабаева </p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='ClientsSwiperImageBox'>
						<picture>
							<source srcSet={ClientsSwiperWebp2} />
							<img src={ClientsSwiperJpg2} alt="" />
						</picture>
						<p>Екатерина Данилова</p>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className="ClientsSwiperPrev" />
			<div className="ClientsSwiperNext" />


				<div >
					
				</div>
		</section>
	)
}

export default ClientsSwiper;