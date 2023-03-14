
/* типизация CatalogPage*/
export interface CatalogInterface {
	catalogPage: {
		catalogList: {
			id: number,
			title: string,
			photoImgJpeg: string,
			photoImgWebp: string,
			path: string,
		}[],

		catalogListDown: {
			id: number,
			title: string,
			photoImgJpeg: string,
			photoImgWebp: string,
			path: string,
		}[]
	}
}

/* типизация Nav */
export interface NavCategoryInterface {
	headerNavPage: {
		id: number
		text: string
		path: string
	}[],

	dropDownMenu: {
		id: number,
		name: string,
		path: string ,
	}[],
}



/*  типизация AboutBlock */
export interface AboutBlockInterface {
	aboutBlockText: {
		id: number,
		info: string
	}[],

	aboutBlockBtn: {
		id: number,
		mainName: string,
		figure: string,
	}[],
}





/* типизация ClientsSwiper */
export interface ClientsSwiperInterface {
	id: number,
	name: string,
	imgJpg: string,
	imgWebp: string
}

export interface ClientsReviewsInterface {
	id: number,
	img: string,
	name: string,
	city: string,
	dataTime: string,
	data: string,
	textInfo: string,
}



/* типизация DialogsPage */
export interface DialogsPageInterface {
	users: {
		id:number, 
		name: string,
		message: string,
		img: string | undefined,
	}[]
	message: string[],
}



