import { NavCategoryType } from '../types/types'

let initialState:NavCategoryType = {
	headerNavPage: [
		{ id: 0, text: 'навигация' },
		{ id: 1, text: 'категории' },
		{ id: 2, text: 'наши коллекции' },
		{ id: 3, text: 'покупателям' },
		{ id: 4, text: 'о бренде' },
		{ id: 5, text: 'шоурум' },
		{ id: 6, text: 'контакты' }
	] ,

	dropDownMenu: [
		{ id: 0, name: 'Доставка' },
		{ id: 1, name: 'Оплата' },
		{ id: 2, name: 'Возврат' },
		{ id: 3, name: 'Размерная таблица' },
		{ id: 4, name: 'Примерка' },
		{ id: 5, name: 'Оптовым покупателям' },
	],
}

const NavCategory = (state = initialState, action: unknown) => {
	return state
}



export default NavCategory