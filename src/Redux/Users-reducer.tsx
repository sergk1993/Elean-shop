
import { Dispatch } from "redux";
import { userApi } from '../API/api'
import { UserType } from '../types/types';
import { InferActionType } from './redux-store';


const initialState = {
	users: [] as Array<UserType>,
	pageSize: 12 as number,
	quantityUsers: 20 as number,
	currentPage: 1 as number,
	isFetching: true as boolean,
	disableBtn: [] as Array<number>,
	filter: {
		search: '' as string,
		// 'all' as string | undefined,
		follow: 'all' as string | undefined | any,
	}
}


function UsersReducer(state = initialState, action: AllActionType) {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.users,
			}

		case 'GET_QUANTITY_USERS':
			return {
				...state,
				quantityUsers: action.count
			}

		case 'CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentNumber

			}
		case 'IS_LOADING_FETCHING':

			return {
				...state,
				isFetching: action.isFetching
			}

		case 'SUBSCRIBE_USER':
			return {
				...state,
				users: state.users.map((items: any) => {
					if (items.id === action.subscribe) {
						return { ...items, followed: true }
					}
					return items
				}),
			}

		case 'UNSUBSCRIBE_USER':
			return {
				...state,
				users: state.users.map((items: any) => {
					if (items.id === action.unsubscribe) {
						return { ...items, followed: false }
					}
					return items
				}),
			}

		case 'ISBUTTON_DISABLED':

			return {
				...state,
				disableBtn: action.isFetch ?
					[...state.disableBtn, action.idUser]
					: [state.disableBtn.filter((item: any) => item !== action.idUser)]
			}
		case 'USERS/FILTER':
			return {
				...state,
				filter: action.payload
			}

		default:
			return state
	}
}


export type InitialUsertType = typeof initialState
export type FilterUsersInitType = typeof initialState.filter;
type AllActionType = InferActionType<typeof actions>
type DispatchType = Dispatch<AllActionType>



const actions = {
	getUsers: (users: Array<UserType>) => ({ type: 'GET_USERS', users } as const),
	getQuantityUsers: (count: number) => ({ type: 'GET_QUANTITY_USERS', count } as const),
	currentPage: (currentNumber: number) => ({ type: 'CURRENT_PAGE', currentNumber } as const),
	isFetchingAction: (isFetching: boolean) => ({ type: 'IS_LOADING_FETCHING', isFetching } as const),
	buttonDisabledAC: (idUser: number, isFetch: boolean) => ({ type: 'ISBUTTON_DISABLED', idUser, isFetch } as const),
	subscribeUser: (subscribe: number) => ({ type: 'SUBSCRIBE_USER', subscribe } as const),
	unsubscribeUser: (unsubscribe: number) => ({ type: 'UNSUBSCRIBE_USER', unsubscribe } as const),
	filterUser: (filter: any) => ({ type: 'USERS/FILTER', payload: filter } as const)
}



export const thunkUser = (numberPage: number, quantityUsers: number, filter: FilterUsersInitType) => async (dispatch: DispatchType) => {
	try {
		const response = await userApi.getUsers(numberPage, quantityUsers, filter.search, filter.follow)
		dispatch(actions.isFetchingAction(true));
		dispatch(actions.getUsers(response.items));
		dispatch(actions.getQuantityUsers(response.totalCount));
		dispatch(actions.currentPage(numberPage));
		dispatch(actions.isFetchingAction(false));
		dispatch(actions.filterUser(filter))

	} catch (err) {
		console.log('ошибка в запросе users-reducer', err)
		return err
	}
}


export const subscrUsersThunk = (items: number) => async (dispatch: DispatchType) => {
	dispatch(actions.buttonDisabledAC(items, true))
	userApi.subscribe(items).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(actions.subscribeUser(items))
		}
		dispatch(actions.buttonDisabledAC(items, false))
	})
}

export const unsubscribeUsersThunk = (items: number) => async (dispatch: DispatchType) => {
	dispatch(actions.buttonDisabledAC(items, true))
	userApi.unsubscribe(items).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(actions.unsubscribeUser(items))
		}
		dispatch(actions.buttonDisabledAC(items, false))
	})
}





export default UsersReducer