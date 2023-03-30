
import { Dispatch } from "redux";
import { userApi } from '../API/api'
import { UserType } from '../types/types';
const GET_USERS = 'GET_USERS'
const GET_QUANTITY_USERS = 'GET_QUANTITY_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE'

export type UserInitialType = {
	users: Array<number>,
	isAuth: boolean,
	pageSize: number,
	quantityUsers: number,
	currentPage: number
}


const initialState: UserInitialType = {
	users: [],
	isAuth: false,
	pageSize: 10,
	quantityUsers: 20,
	currentPage: 1,
}


function UsersReducer(state = initialState, action: AllActionType) {

	switch (action.type) {

		case GET_USERS:
			return {
				...state,
				users: [...action.users]
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

		default:
			return state
	}
}




type AllActionType = GetUsersType | GetQuantityUsersType | CurrentPageType;
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


export const currentPage = (currentNumber: number): CurrentPageType => {
	return {
		type: CURRENT_PAGE,
		currentNumber
	}
}







export const thunkUser = (numberPage: number, quantityUsers: number) => async (dispatch: DispatchType) => {
	const response = await userApi.getUsers(numberPage, quantityUsers)
	dispatch(getUsers(response.data.items))
	dispatch(getQuantityUsers(response.data.totalCount))
	dispatch(currentPage(numberPage))
	
}


// export const getCurrentPageTH = (number:number) => (dispatch: DispatchType) => {
	
// }






export default UsersReducer