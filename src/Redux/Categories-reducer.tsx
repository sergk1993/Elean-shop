const initialState = {
	categoryAsideCollections: {
		categoryListTitle: ['новинки','КАТЕГОРИИ', 'Юбки','Смокинги','Костюмы','Аксессуары','Брюки','Блузы','Платья','Топы и жилеты'],
		

		categoryAsideUpList: [
			{ id: 0, categoryName: 'Новинки', path: 'news' },
			{ id: 1, categoryName: 'Юбки', path: 'skirts' },
			{ id: 2, categoryName: 'Смокинг', path: 'tuxedo' },
			{ id: 3, categoryName: 'Костюмы', path: 'costumes' },
			{ id: 4, categoryName: 'Аксессуары', path: 'accessories' },
			{ id: 5, categoryName: 'Брюки', path: 'trousers' },
			{ id: 6, categoryName: 'Блузы', path: 'blouses' },
			{ id: 7, categoryName: 'Платья', path: 'dresses' },
			{ id: 8, categoryName: 'Топы и жилеты', path: 'Tops-vests ' },
		],

		categoryAsideDownTitle: 'КОЛЕКЦИи',
		categoryAsideDown: [
			{ id: 0, categoryName: 'Осень-зима 20-21' },
			{ id: 1, categoryName: 'Вечерние комплекты' },
			{ id: 2, categoryName: 'Предзаказ' },
			{ id: 3, categoryName: 'Свадьба и выпускной' },
		]
	}

}

export type CategoryAsideType = typeof initialState;

type CategoryType = typeof initialState;

function Categories(state = initialState, action: any): CategoryType {
	switch (action.type) {


		default:
			return state;
	}

}

export default Categories;