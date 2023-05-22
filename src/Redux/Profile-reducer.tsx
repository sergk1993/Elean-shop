import { Dispatch } from 'react'
import { profileApi } from '../API/api'
import { IProfileInfo } from '../types/types'
import { InferActionType } from './redux-store'


let initialState = {
	profileData: [],
}

export type initialProfileStateType = typeof initialState

function ProfileReducer(state = initialState, action: ActionProfileType) {
	switch (action.type) {

		case 'PF/GET_PROFILE_DATA':
			return {
				...state,
				profileData: [action.payload]
			}


		default:
			return state
	}
}

export type ActionProfileType = InferActionType<typeof actionsProfile>;

export const actionsProfile = {
	getProfileData: (items: any) => ({ type: 'PF/GET_PROFILE_DATA', payload: items } as const),
}

type DispatchType = Dispatch<ActionProfileType>;

export const profileDataTC = (id: number | null) => async (dispatch: DispatchType) => {
	try {
		let data = await profileApi.getProfileData(id);
		dispatch(actionsProfile.getProfileData(data))
	} catch (err) {
		console.log(err);
	}
}




export default ProfileReducer