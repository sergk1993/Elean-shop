
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
		path: string,
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
		id: number,
		name: string,
		message: string,
		img: string | undefined,
	}[]
	message: string[],
}


/* типы для users начало */
export type PhotosType = {
	small: string | null,
	large: string | null,
}

export type UserType = {
	id: number,
	name: string,
	status: string | null,
	uniqueUrlName: string | null,
	photos: PhotosType,
	followed?: false | true,
}
/* типы для users конец */




/* типизация авторизации Profile */

export interface IProfileAuth {
	email: string | null,
	id: number | null,
	login: string | null,
	isAuth: boolean,
}


// свойства конкретного человека profile 

export type IProfileInfoContacts = {
	contacts: {
		facebook: string | null,
		website: string | null,
		vk: string | null,
		twitter: string | null,
		instagram: string | null,
		youtube: string | null,
		github: string | null,
		mainLink: string | null
	}
}


export interface IProfileInfo {
	aboutMe?: string | number | null,
	contacts?: Record<string, string>, // Record используется для определения объекта со строковыми ключами и строковыми значениями
	lookingForAJob?: boolean,
	lookingForAJobDescription?: string,
	fullName?: string,
	userId?: number,
}


export interface IProfileInfoImg {
	photos?: {
		small?: string | null,
		large?: string | null,
	}
}
