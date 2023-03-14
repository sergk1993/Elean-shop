const INPUT_ADD_NAME = 'INPUT_ADD_TEXT';
const INPUT_ADD_EMAIL = 'INPUT_ADD_EMAIL';
const INPUT_CHECKBOX = 'INPUT_CHECKBOX';


interface FooterInitialState {
	footerNav: {
		id: number,
		link: string
	}[],

	contactsPhone: {
		id: number,
		phoneNumber: number,
		phoneNumberText: string,
		whatsappNumber: number,
		whatsappNumberText: string,
	}[],

	contactsAddress: {
		id: number,
		location: string,
		address: string,
	}[]

	workTimeBox: {
		id: number,
		workTimeText: string,
		workTime: string
	}[],

	socialLinkBox: {
		id: number,
		socialLink: string,
		socialLinkText: string,
	}[],

	formText: string,

	formEmailText: string,
	inputCheckBox: boolean,
}

const initialState: FooterInitialState = {
	footerNav: [
		{ id: 0, link: 'доставка' },
		{ id: 1, link: 'оплата' },
		{ id: 2, link: 'возврат' },
		{ id: 3, link: 'размерная таблица' },
		{ id: 4, link: 'примерка' },
		{ id: 5, link: 'контакты' },
	],

	contactsPhone: [
		{
			id: 0,
			phoneNumber: 84951501477,
			phoneNumberText: 'ТЕЛ.: 8 (495) 150-14-77',
			whatsappNumber: 79777282738,
			whatsappNumberText: 'WHATSAPP: +7 (977) 728-27-38',
		},

	],

	contactsAddress: [
		{
			id: 0,
			location: '	АДРЕС:',
			address: 'г. Москва, Новая площадь 8, стр.2, 5 этаж',
		}
	],

	workTimeBox: [
		{
			id: 0,
			workTime: 'РЕЖИМ РАБОТЫ: ',
			workTimeText: 'с 9.00 до 21.00 шоурум: с 12.00 до 21.00'
		}
	],

	socialLinkBox: [
		{
			id: 0,
			socialLink: 'info@elenaboutique.ru',
			socialLinkText: 'EMAIL: info@elenaboutique.ru',
		}
	],

	formText: '',
	formEmailText: '',
	inputCheckBox: false,
}



export type InitialStateType = typeof initialState

function FooterReducer(state = initialState, action: any): InitialStateType {
	switch (action.type) {
		case INPUT_ADD_NAME:
			return {
				...state,
				formText: action.name,
			}

		case INPUT_ADD_EMAIL:
			return {
				...state,
				formEmailText: action.email
			}


		case INPUT_CHECKBOX:
			return {
				...state,
				inputCheckBox: action.changeBox
			}

		default:
			return state;
	}


}




export const addInputName = (name: string) => {
	return { type: INPUT_ADD_NAME, name }
}

export const addInputEmail = (email: string) => {
	return { type: INPUT_ADD_EMAIL, email }
}

export const changeInputCheckBox = (changeBox: boolean) => {
	return { type: INPUT_CHECKBOX, changeBox }
}



export type FooterActionCreatorType = typeof addInputEmail & typeof addInputEmail & typeof changeInputCheckBox


export default FooterReducer



