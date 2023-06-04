import { NavCategoryInterface } from '../types/types'

let initialState: NavCategoryInterface = {
	headerNavPage: [
		// { id: 1, text: 'наши коллекции', path: 'collections' },
		// { id: 3, text: 'о бренде', path: 'brand' },
		// { id: 5, text: 'контакты', path: 'contacts' },
		// { id: 4, text: 'шоурум', path: 'showroom' },
		// { id: 1, text: 'покупателям', path: 'shopper' },
		{ id: 0, text: 'категории', path: 'categories' },
		{ id: 1, text: 'Диалоги', path: 'dialogs' },
		{ id: 2, text: 'пользователи', path: 'users' },
		{ id: 3, text: 'Корзина', path: 'cart' },
	],

	dropDownMenu: [
		{ id: 0, name: 'Доставка', path: 'categories/news' },
		{ id: 1, name: 'Оплата', path: '/payment' },
		{ id: 2, name: 'Возврат', path: '/refund' },
		{ id: 3, name: 'Размерная таблица', path: '/table-size' },
		{ id: 4, name: 'Примерка', path: '/fitting' },
		{ id: 5, name: 'Оптовым покупателям', path: '/wholesale' },
	],
}

type StateNavType = typeof initialState;

const NavCategory = (state = initialState, action: any): StateNavType => {
	return state
}



export default NavCategory