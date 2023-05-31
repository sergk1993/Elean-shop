import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { authApi, profileApi } from '../API/api';
import { IProfileAuth } from '../types/types';
import { RootType } from './redux-store';
const SET_USER_DATA = 'SET_USER_DATA';
const INITIALIZE_PAGE = 'INITIALIZE_PAGE';
const AUTH_GET_CAPTCHA = 'AUTH_GET_CAPTCHA';


let initialState = {
	isAuth: false as boolean,
	id: null as number | null,
	login: null as string | null,
	email: null as string | null,
	initializePage: true as boolean,
	getCaptcha: null as string | null,
}

export type InitialAuthStateType = typeof initialState;

function AuthReducer(state = initialState, action: AllAuthActionType): InitialAuthStateType {
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

		case AUTH_GET_CAPTCHA:
			return {
				...state,
				getCaptcha: action.captcha,
			}

		default:
			return state;
	}

}


type AllAuthActionType = SetProfileACType | InitializeACType | GetCaptchaType;
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


export const getProfileAuthTH = () => async (dispatch: DispatchAuthType) => {
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
	rememberMe?: boolean,
	captcha?: null | string,
}

export const loginTH = (data: LoginTHType): ThunkType => async (dispatch) => {
	let { login, password, rememberMe, captcha } = data
	const resp = await authApi.login(login, password, rememberMe, captcha);
	// если приходит 0, запрос правильный
	if (resp.resultCode === 0) {
		dispatch(getProfileAuthTH())
	} else if (resp.resultCode === 10) {
		dispatch(getCaptchaProfileTH())
	}

}

export const logOutTH = (): ThunkType => async (dispatch) => {
	const resp = await authApi.logOut();
	// если приходит 0, запрос правильный
	if (resp.data.resultCode === 0) {
		dispatch(setProfileAC(null, null, null, false))
	}
}


type GetCaptchaType = {
	type: typeof AUTH_GET_CAPTCHA,
	captcha: string | null
}

const getCaptchaAC = (captcha: string | null): GetCaptchaType => {
	return {
		type: AUTH_GET_CAPTCHA,
		captcha
	}
}


export const getCaptchaProfileTH = (): ThunkType => async (dispatch) => {
	let profileCaptchaApi = await profileApi.getProfileCaptcha();

	dispatch(getCaptchaAC(profileCaptchaApi.url))
}


export default AuthReducer;