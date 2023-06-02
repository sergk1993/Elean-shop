import ClientsSwiperJpg1 from '../assets/img/ClientsSwiper/ClientsSwiper1.jpg'
import ClientsSwiperWebp1 from '../assets/img/ClientsSwiper/ClientsSwiper1.webp'
import peopleReviews from '../assets//img/clientsReviews/clientReviews.jpg';
import ClientsSwiperJpg2 from '../assets/img/ClientsSwiper/ClientsSwiper2.jpg'
import ClientsSwiperWebp2 from '../assets/img/ClientsSwiper/ClientsSwiper2.webp'





const initialState = {
	clientsSwiper: [
		{ id: 0, name: 'Альбина Джанабаева', imgJpg: ClientsSwiperJpg1, imgWebp: ClientsSwiperWebp1 },
		{ id: 1, name: 'Екатерина Данилова', imgJpg: ClientsSwiperJpg2, imgWebp: ClientsSwiperWebp2 },
		{ id: 2, name: 'Альбина Джанабаева', imgJpg: ClientsSwiperJpg1, imgWebp: ClientsSwiperWebp1 },
		{ id: 3, name: 'Екатерина Данилова', imgJpg: ClientsSwiperJpg2, imgWebp: ClientsSwiperWebp2 },
		{ id: 4, name: 'Альбина Джанабаева', imgJpg: ClientsSwiperJpg1, imgWebp: ClientsSwiperWebp1 },
		{ id: 5, name: 'Екатерина Данилова', imgJpg: ClientsSwiperJpg2, imgWebp: ClientsSwiperWebp2 },
		{ id: 6, name: 'Альбина Джанабаева', imgJpg: ClientsSwiperJpg1, imgWebp: ClientsSwiperWebp1 },
		{ id: 7, name: 'Екатерина Данилова', imgJpg: ClientsSwiperJpg2, imgWebp: ClientsSwiperWebp2 },
	],

	clientsReviews: [
		{ id: 0, img: peopleReviews, name: 'Ирина', city: 'г. Москва', dataTime: '26 Марта 2017', data: '26 Марта 2017', textInfo: 'Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.', },
		{ id: 1, img: peopleReviews, name: 'Альбина', city: 'г. England', dataTime: '29 Марта 2019', data: '29 Марта 2019', textInfo: 'Я хотел бы поделиться своим восторженным отзывом о доставке одежды, которую я получил недавно. Это был безукоризненный опыт от начала до конца!', },
		{ id: 2, img: peopleReviews, name: 'Екатерина', city: 'г. Санкт-Петербург', dataTime: '5 Марта 2020', data: '5 Марта 2020', textInfo: 'Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.', },
		{ id: 3, img: '', name: 'Сергей', city: 'г. Москва', dataTime: '6 Марта 2017', data: '26 Марта 2017', textInfo: 'Я просто влюблен в одежду, которую мне доставили! Каждый предмет оказался именно таким, как я представлял себе, а качество превзошло все мои ожидания', },
	] ,
}

type InitialStateType = typeof initialState;


function ClientsSwiperReducer(state = initialState, action: any): InitialStateType {
	return state
}

export default ClientsSwiperReducer;