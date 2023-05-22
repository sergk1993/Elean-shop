import { Dispatch } from 'react';
import { InferActionType } from './redux-store';
import { productsApi } from '../API/apiShop'

export type CategoryProductsType = {
	id: number,
	title: string
	price: number,
	description: string,
	category: string,
	image: string | null,
	rating: {
		count: number,
		rate: number
	}
}




const initialState = {
	categoryAsideCollections: {
		categoryListTitle: ['Все товары', 'Мужская одежда', 'Женская одежда', 'Украшения', 'Электроника'] as Array<string>,


		categoryAsideUpList: [
			{ id: 0, categoryName: 'Все товары', path: 'all' },
			{ id: 1, categoryName: 'Мужская одежда', path: 'men\'s clothing' },
			{ id: 2, categoryName: 'Женская одежда', path: 'women\'s clothing' },
			{ id: 3, categoryName: 'Украшения', path: 'jewelery' },
			{ id: 4, categoryName: 'Электроника', path: 'electronics' },

		],

		categoryAsideDownTitle: 'КОЛЕКЦИи',
		categoryAsideDown: [
			{ id: 0, categoryName: 'Осень-зима 20-21' },
			{ id: 1, categoryName: 'Вечерние комплекты' },
			{ id: 2, categoryName: 'Предзаказ' },
			{ id: 3, categoryName: 'Свадьба и выпускной' },
		]
	},

	categoryProducts: [] as Array<CategoryProductsType>,
	categoryProductsIsLoading: true as boolean,

	currentCategoryProducts: [] as any
}

export type CategoryAsideType = typeof initialState;

type CategoryType = typeof initialState;

function Categories(state = initialState, action: ActionTypes): CategoryType {
	switch (action.type) {


		case 'CAT/GET_PRODUCTS':
			return {
				...state,
				categoryProducts: action.items,
				categoryProductsIsLoading: false
			}

		case 'CAT/FILTER_PRODUCTS':
			return {
				...state,
				categoryProducts: state.categoryProducts.filter((items: CategoryProductsType) => {
					if (action.items === 'all') {
						return items
					}
					if (items.category === action.items) {
						return items
					}
				})
			}

		case 'CAT/CURRENT_CATEGORY_PRODUCT':
			return {
				...state,
				currentCategoryProducts: state.categoryProducts.filter((items: any) => items.id === action.payload.id)
			}


		default:
			return state;
	}

}



type ActionTypes = InferActionType<typeof actionsCategory>
export type DispatchType = Dispatch<ActionTypes>

export const actionsCategory = {
	getProductsAC: (items: CategoryProductsType[]) => ({ type: 'CAT/GET_PRODUCTS', items } as const),
	filterProductsAC: (items: string | undefined) => ({ type: 'CAT/FILTER_PRODUCTS', items } as const),
	currentProductAC: (items: any) => ({ type: 'CAT/CURRENT_CATEGORY_PRODUCT', payload: items } as const),
}



export const getProductsTH = (items: string = 'all') => async (dispatch: DispatchType) => {
	try {
		const getApi = await productsApi.getProducts()
		dispatch(actionsCategory.getProductsAC(getApi))
		dispatch(actionsCategory.filterProductsAC(items))
	} catch (error) {
		// Handle any errors
		console.error(error);
	}
}





export default Categories;


