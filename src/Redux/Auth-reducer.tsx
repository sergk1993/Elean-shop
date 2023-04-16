import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { authApi } from '../API/api';
import { IProfile } from '../types/types';
import { RootType } from './redux-store';
const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
	isAuth: false,
	id: null,
	login: null  as string | null,
	email: null  as string | null,
}

export type InitialStateType = typeof initialState;

function AuthReducer(state = initialState, action: AllAuthActionType) {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.items,
			}

		default:
			return state;
	}

}


type AllAuthActionType =  SetProfileACType ;
type DispatchAuthType = Dispatch<AllAuthActionType>

type ThunkType = ThunkAction<Promise<void>, RootType, unknown, AllAuthActionType>


/* получаю свойства профиля */
type SetProfileACType = {
	type: typeof SET_USER_DATA,
	items: IProfile
}

const setProfileAC = (email: string | null , id: number | null, login: string | null , isAuth: boolean):SetProfileACType => {
	return {
		type: SET_USER_DATA,
		items: { email, id, login, isAuth }
	}
}
export const getProfileTH = () => async (dispatch: DispatchAuthType) => {
	const resp = await authApi.me()
	if (resp.resultCode === 0) {
		let { email, id, login } = resp.data;
		dispatch(setProfileAC(email, id, login, true))
	}
}


export type LoginTHType = {
	login: string,
	password: string,
}

export const loginTH = (data: LoginTHType):ThunkType => async (dispatch) => {
	let { login, password } = data
	const resp = await authApi.login(login, password);
	if (resp.resultCode === 0) {
		dispatch(getProfileTH())
	}
}

export const logOutTH = ():ThunkType => async (dispatch) => {
	const resp = await authApi.logOut();
	if (resp.data.resultCode === 0) {

		dispatch(setProfileAC(null,  null,  null, false))
	}
}


export default AuthReducer;