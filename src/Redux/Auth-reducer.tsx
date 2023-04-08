import { authApi } from '../API/api';

const GET_PROFILE = 'GET_PROFILE';


let initialState = {
	isAuth: false,
	id: null,
	login: null,
	email: null,
}


function AuthReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_PROFILE:
			return {
				...state,
				...action.items,
				isAuth: true,
			}



		default:
			return state;
	}

}


export const getProfileAC = (items: any) => {
	
	return {
		type: GET_PROFILE,
		items
	}
}




export const getProfileTH = () => async (dispatch: any) => {
	const resp = await authApi.me()
	
	if (resp.resultCode === 0) {
		dispatch(getProfileAC(resp.data))
	}
}







export default AuthReducer;