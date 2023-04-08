
import { Dispatch } from "redux";
import { userApi } from '../API/api'
import { UserType } from '../types/types';

const GET_USERS = 'GET_USERS'
const GET_QUANTITY_USERS = 'GET_QUANTITY_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE'
const IS_LOADING_FETCHING = 'IS_LOADING_FETCHING'
const SUBSCRIBE_USER = 'SUBSCRIBE_USER';
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE_USER'
const ISBUTTON_DISABLED = 'ISBUTTON_DISABLED'


export type UserInitialType = {
	users: Array<number>,
	isAuth: boolean,
	pageSize: number,
	quantityUsers: number,
	currentPage: number,
	isLoading: boolean,
	disableBtn: Array<any>,
}

const initialState: UserInitialType = {
	users: [],
	isAuth: false,
	pageSize: 10,
	quantityUsers: 20,
	currentPage: 1,
	isLoading: true,
	disableBtn: []
}


function UsersReducer(state: UserInitialType = initialState, action: AllActionType) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.users,
			}

		case GET_QUANTITY_USERS:

			return {
				...state,
				quantityUsers: action.count
			}

		case CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentNumber

			}
		case IS_LOADING_FETCHING:

			return {
				...state,
				isLoading: action.isFetching
			}

		case SUBSCRIBE_USER:
			return {
				...state,
				users: state.users.map((items: any) => {
					if (items.id === action.subscribe) {
						return { ...items, followed: true }
					}
					return items
				}),
			}

		case UNSUBSCRIBE_USER:
			return {
				...state,
				users: state.users.map((items: any) => {
					if (items.id === action.unsubscribe) {
						return { ...items, followed: false }
					}
					return items
				}),
			}

		case ISBUTTON_DISABLED:

			return {
				...state,
				disableBtn: action.isFetch ?
					[...state.disableBtn, action.idUser]
					: [state.disableBtn.filter((item: any) => item !== action.idUser)]
			}

		default:
			return state
	}
}




type AllActionType = GetUsersType | GetQuantityUsersType | CurrentPageType | SubscribeType | isFetchingActionType | UnsubscribeType | ButtonDisabledType;
type DispatchType = Dispatch<AllActionType>


type GetUsersType = {
	type: typeof GET_USERS,
	users: Array<UserType>
}
const getUsers = (users: Array<UserType>): GetUsersType => {
	return {
		type: GET_USERS,
		users
	}
}


type GetQuantityUsersType = {
	type: typeof GET_QUANTITY_USERS,
	count: number
}
const getQuantityUsers = (count: number): GetQuantityUsersType => {
	return {
		type: GET_QUANTITY_USERS,
		count
	}
}


type CurrentPageType = {
	type: typeof CURRENT_PAGE,
	currentNumber: number
}

const currentPage = (currentNumber: number): CurrentPageType => {
	return {
		type: CURRENT_PAGE,
		currentNumber
	}
}


type isFetchingActionType = {
	type: typeof IS_LOADING_FETCHING,
	isFetching: boolean
}

const isFetchingAction = (isFetching: boolean): isFetchingActionType => {
	return {
		type: IS_LOADING_FETCHING,
		isFetching
	}
}



export const thunkUser = (numberPage: number, quantityUsers: number) => async (dispatch: DispatchType) => {
	try {
		const response = await userApi.getUsers(numberPage, quantityUsers)
		dispatch(isFetchingAction(true));
		dispatch(getUsers(response.items));
		dispatch(getQuantityUsers(response.totalCount));
		dispatch(currentPage(numberPage));
		dispatch(isFetchingAction(false));

	} catch (err) {
		console.log('ошибка в запросе users-reducer', err)
		return err
	}
}




type ButtonDisabledType = {
	type: typeof ISBUTTON_DISABLED,
	idUser: number,
	isFetch: boolean,
}
export const buttonDisabledAC = (idUser: number, isFetch: boolean): ButtonDisabledType => {
	return {
		type: ISBUTTON_DISABLED,
		idUser,
		isFetch
	}
}



type SubscribeType = {
	type: typeof SUBSCRIBE_USER,
	subscribe: number
}

const subscribeUser = (subscribe: number): SubscribeType => {
	return {
		type: SUBSCRIBE_USER,
		subscribe
	}
}

export const subscrUsersThunk = (items: number) => async (dispatch: DispatchType) => {
	dispatch(buttonDisabledAC(items, true))
	userApi.subscribe(items).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(subscribeUser(items))
		}
		dispatch(buttonDisabledAC(items, false))
	})
}





type UnsubscribeType = {
	type: typeof UNSUBSCRIBE_USER,
	unsubscribe: number
}

const unsubscribeUser = (unsubscribe: number): UnsubscribeType => {
	return {
		type: UNSUBSCRIBE_USER,
		unsubscribe
	}
}

export const unsubscribeUsersThunk = (items: number) => async (dispatch: DispatchType) => {
	dispatch(buttonDisabledAC(items, true))
	userApi.unsubscribe(items).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(unsubscribeUser(items))
		}
		dispatch(buttonDisabledAC(items, false))
	})
}





export default UsersReducer