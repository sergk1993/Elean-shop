import { Dispatch } from 'react';
import { InferActionType } from './redux-store';





function getItemFromLocalStorage(key: string, defaultValue: any) {
	const item = localStorage.getItem(key);
	return item !== null ? JSON.parse(item) : defaultValue;
}

const initialState = {
	carts: {
		data: getItemFromLocalStorage('cartItems', []),
		countProducts: getItemFromLocalStorage('countProducts', 0),
		totalCountCartHeart: getItemFromLocalStorage('totalCountCartHeart', 0)
	} as any,
	orderList: getItemFromLocalStorage('orderList', [])
}


export type CategoryAsideType = typeof initialState;

type CategoryType = typeof initialState;

function CartReducer(state = initialState, action: ActionTypes): CategoryType {
	switch (action.type) {

		case 'CAT/ADD_CART':
			return {
				...state,
				carts: {
					data: addCart(state.carts.data, action.payload),
					countProducts: state.carts.countProducts + 1,
					totalCountCartHeart: state.carts.totalCountCartHeart + 1,
				}
			}

		case 'CAT/REMOVE_CART':
			let findRemoveCart = state.carts.data.find((el: any) => el.id === action.id)
			return {
				...state,
				carts: {
					data: findRemoveCart && state.carts.data.filter((items: any) => items.id !== action.id),
					countProducts: findRemoveCart.count >= 1 && state.carts.countProducts - findRemoveCart.count,
					totalCountCartHeart: findRemoveCart.count >= 1 && state.carts.totalCountCartHeart - 1
				}
			}

		case 'CAT/INCREASE_CART':
			const findTheSameIncreaseCartItem = state.carts.data.find((el: any) => el.id === action.id)
			return {
				...state,
				carts: {
					data: findTheSameIncreaseCartItem && state.carts.data.map((el: any) => el.id === action.id ? { ...el, count: el.count + 1 } : el),
					countProducts: findTheSameIncreaseCartItem.count >= 1 && state.carts.countProducts + 1,
					totalCountCartHeart: state.carts.totalCountCartHeart,
				}
			}

		case 'CAT/DECREASE_CART':
			const findTheSameDecreaseCartItem = state.carts.data.find((el: any) => el.id === action.id)

			return {
				...state,
				carts: {
					data: findTheSameDecreaseCartItem && state.carts.data.map((el: any) => el.id === action.id
						? { ...el, count: el.count - 1 } : el),
					countProducts: findTheSameDecreaseCartItem.count >= 1 && state.carts.countProducts - 1,
					totalCountCartHeart: state.carts.totalCountCartHeart,
				}
			}

		case 'CAT/DELETE_CART_PRODUCT':
			const findTheSameDeleteCartItem = state.carts.data.find((el: any) => el.id === action.id)
			return {
				...state,
				carts: {
					data: findTheSameDeleteCartItem && state.carts.data.filter((el: any) => el.id !== action.id),
					countProducts: state.carts.countProducts - findTheSameDeleteCartItem.count,
					totalCountCartHeart: findTheSameDeleteCartItem && state.carts.totalCountCartHeart - 1,

				}
			}


		case 'CAT/ORDER_LIST':
			return {
				...state,
				orderList: [...action.payload]
			}



		default:
			return state;
	}

}



type ActionTypes = InferActionType<typeof actionsCarts>
export type DispatchType = Dispatch<ActionTypes>

export const actionsCarts = {
	addCartProduct: (item: any) => ({ type: 'CAT/ADD_CART', payload: item } as const),
	removeCartProduct: (id: any) => ({ type: 'CAT/REMOVE_CART', id } as const),
	increaseCartProduct: (id: any) => ({ type: 'CAT/INCREASE_CART', id } as const),
	decreaseCartProduct: (id: any) => ({ type: 'CAT/DECREASE_CART', id } as const),
	deleteCartProduct: (id: any) => ({ type: 'CAT/DELETE_CART_PRODUCT', id } as const),
	orderCartList: (item: any) => ({ type: 'CAT/ORDER_LIST', payload: item } as const),
}




function addCart(state: any, action: any) {
	const addFindTheSameCart = state.find((el: any) => el.id === action.id) !== undefined;

	if (addFindTheSameCart) {
		return state.map((el: any) => el.id === action.id ? { ...el, count: el.count + 1 } : el)
	} else {
		return [...state, { ...action, count: 1 }]
	}
}





export default CartReducer;


