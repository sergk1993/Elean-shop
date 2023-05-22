import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { authApi } from '../API/api';
import { IProfileAuth } from '../types/types';
import { RootType } from './redux-store';
const SET_USER_DATA = 'SET_USER_DATA';
const INITIALIZE_PAGE = 'INITIALIZE_PAGE'


let initialState = {
	isAuth: false,
	id: null as number | null | any,
	login: null as string | null,
	email: null as string | null,
	initializePage: true,
}

export type InitialStateType = typeof initialState;

function AuthReducer(state = initialState, action: AllAuthActionType) {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.items,
			}

		case INITIALIZE_PAGE:

			return {
				...state,
				initializePage: false
			}

		default:
			return state;
	}

}


type AllAuthActionType = SetProfileACType | InitializeACType;
type DispatchAuthType = Dispatch<AllAuthActionType>

type ThunkType = ThunkAction<Promise<void>, RootType, unknown, AllAuthActionType>



type InitializeACType = {
	type: typeof INITIALIZE_PAGE,

}
const initializeAC = (): InitializeACType => {
	return {
		type: INITIALIZE_PAGE,
	}
}


/* получаю свойства профиля */
type SetProfileACType = {
	type: typeof SET_USER_DATA,
	items: IProfileAuth
}

const setProfileAC = (email: string | null, id: number | null, login: string | null, isAuth: boolean): SetProfileACType => {
	return {
		type: SET_USER_DATA,
		items: { email, id, login, isAuth }
	}
}
export const getProfileTH = () => async (dispatch: DispatchAuthType) => {
	await authApi.me().then(resp => {
		dispatch(initializeAC())
		// если приходит 0, запрос правильный
		if (resp.resultCode === 0) {
			let { email, id, login } = resp.data;
			dispatch(setProfileAC(email, id, login, true))
		}
	})
}


export type LoginTHType = {
	login: string,
	password: string,
}

export const loginTH = (data: LoginTHType): ThunkType => async (dispatch) => {
	let { login, password } = data
	const resp = await authApi.login(login, password);
	// если приходит 0, запрос правильный
	if (resp.resultCode === 0) {
		dispatch(getProfileTH())
	}
}

export const logOutTH = (): ThunkType => async (dispatch) => {
	const resp = await authApi.logOut();
	// если приходит 0, запрос правильный
	if (resp.data.resultCode === 0) {
		dispatch(setProfileAC(null, null, null, false))
	}
}


export default AuthReducer;