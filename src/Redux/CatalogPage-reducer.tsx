import img1Jpg from '../assets/img/catalog/catalog_1.jpg';
import img2Jpg from '../assets/img/catalog/catalog_2.jpg';
import img3Jpg from '../assets/img/catalog/catalog_3.jpg';
import img4Jpg from '../assets/img/catalog/catalog_4.jpg';
import img5Jpg from '../assets/img/catalog/catalog_5.jpg';
import img6Jpg from '../assets/img/catalog/catalog_6.jpg';
import img7Jpg from '../assets/img/catalog/catalog_7.jpg';
import img8Jpg from '../assets/img/catalog/catalog_8.jpg';
import img9Jpg from '../assets/img/catalog/catalog_9.jpg';

import img1Webp from '../assets/img/catalog/catalog_1.webp';
import img2Webp from '../assets/img/catalog/catalog_2.webp';
import img3Webp from '../assets/img/catalog/catalog_3.webp';
import img4Webp from '../assets/img/catalog/catalog_4.webp';
import img5Webp from '../assets/img/catalog/catalog_5.webp';
import img6Webp from '../assets/img/catalog/catalog_6.webp';
import img7Webp from '../assets/img/catalog/catalog_7.webp';
import img8Webp from '../assets/img/catalog/catalog_8.webp';
import img9Webp from '../assets/img/catalog/catalog_9.webp';

import { CatalogInterface } from '../types/types';


let initialState: CatalogInterface = {
	catalogPage: {
		catalogList:
			[
				{ id: 1, title: 'Новинки', photoImgJpeg: img1Jpg, photoImgWebp: img1Webp, path: '/new-products', },
				{ id: 2, title: 'Акции', photoImgJpeg: img2Jpg, photoImgWebp: img2Webp, path: '/stocks', },
				{ id: 3, title: 'Костюмы', photoImgJpeg: img3Jpg, photoImgWebp: img3Webp, path: '/costumes', },
				{ id: 4, title: 'Смокинги', photoImgJpeg: img4Jpg, photoImgWebp: img4Webp, path: '/tuxedos', },
				{ id: 5, title: 'Брюки', photoImgJpeg: img5Jpg, photoImgWebp: '', path: '/trousers', },
				{ id: 6, title: 'Платья', photoImgJpeg: img6Jpg, photoImgWebp: '', path: '/dresses', }
			],



		catalogListDown: [
			{ id: 1, title: 'Блузы', photoImgJpeg: img2Jpg, photoImgWebp: img2Webp, path: '/blouses' },
			{ id: 2, title: 'Юбки', photoImgJpeg: img9Jpg, photoImgWebp: img9Webp, path: '/skirts' },
			{ id: 3, title: 'Топы и жилеты', photoImgJpeg: img8Jpg, photoImgWebp: img8Webp, path: '/tops-and-vests' },
			{ id: 4, title: 'Аксессуары', photoImgJpeg: img7Jpg, photoImgWebp: img7Webp, path: '/accessories' },
		]
		// catalogImages: {
		// 	imgJpeg: [
		// 		'../assets/img/catalog/catalog_7.jpg',
		// 		'../assets/img/catalog/catalog_8.jpg',
		// 		'../assets/img/catalog/catalog_9.jpg',
		// 	],

		// 	imgWebp: [

		// 		'../assets/img/catalog/catalog_7.webp',
		// 		'../assets/img/catalog/catalog_8.webp',
		// 		'../assets/img/catalog/catalog_9.webp',
		// 	],
		// }




	},
}

function CatalogPage(state: any = initialState, action: any) {
	return state
}



export default CatalogPage;