import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootType } from '../../Redux/redux-store';
import { connect } from 'react-redux';
import ClientsReviews from './ClientsReviews/ClientsReviews';
import 'swiper/css';
import 'swiper/css/navigation';
import './ClientsSwiper.css';
import { ClientsReviewsInterface, ClientsSwiperInterface } from '../../types/types';
import { getClientsSwiper } from '../../Redux/selectors/ClientsSwiper-selectors';



type ClientsSwiperType = {
	clientsSwiper: {
		clientsSwiper: Array<ClientsSwiperInterface>
		clientsReviews: Array<ClientsReviewsInterface>
	}
}

function ClientsSwiper(props: ClientsSwiperType): JSX.Element {
	return (
		<section className='swiperMainBottom swiperMainBott_MarginBottom'>
			<div className='swiperMainBottomWrapper'>
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



					{
						props.clientsSwiper.clientsSwiper.map(e => {
							return (
								<SwiperSlide key={e.id}>
									<div className='ClientsSwiperImageBox'>
										<picture>
											<source srcSet={e.imgWebp} />
											<img src={e.imgJpg} alt="" />
										</picture>
										<p >{e.name}</p>
									</div>
								</SwiperSlide>
							);
						})
					}


				</Swiper>
				<div className="ClientsSwiperPrev" />
				<div className="ClientsSwiperNext" />

			</div>

			<div >

			</div>


			<ClientsReviews clientsReviews={props.clientsSwiper.clientsReviews} />
		</section>
	)
}


const mapStateToProps = (state: RootType) => {
	return {
		clientsSwiper: getClientsSwiper(state)
	}
}

export default connect(mapStateToProps)(ClientsSwiper);