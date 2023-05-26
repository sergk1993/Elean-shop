import { Dispatch } from 'react';
import { authApi, profileApi } from '../API/api';
import { IProfileInfo } from '../types/types';
import { InitialAuthStateType } from './Auth-reducer';
import { InferActionType } from './redux-store';
import { RootType } from './redux-store';

let initialState = {
	profileData: null as IProfileInfo | null,
	profileStatus: '' as string | null,
	isloadingProfile: true
}

export type initialProfileStateType = typeof initialState

function ProfileReducer(state = initialState, action: ActionProfileType): initialProfileStateType {
	switch (action.type) {

		case 'PF/GET_PROFILE_DATA':
			return {
				...state,
				profileData: action.payload,
			}

		case 'PF/GET_PROFILE_STATUS':
			return {
				...state,
				profileStatus: action.status,

			}
		case 'PF/GET_PROFILE_LOADING':
			return {
				...state,
				isloadingProfile: action.isLoading
			}




		default:
			return state
	}
}

export type ActionProfileType = InferActionType<typeof actionsProfile>;
type DispatchProfileType = Dispatch<ActionProfileType>;


export const actionsProfile = {
	getProfileData: (items: any) => ({ type: 'PF/GET_PROFILE_DATA', payload: items } as const),
	getProfileStatusAC: (status: string) => ({ type: 'PF/GET_PROFILE_STATUS', status } as const),
	getProfileLoadingAC: (isLoading: boolean) => ({ type: 'PF/GET_PROFILE_LOADING', isLoading } as const),
	getProfileDataInfoAC: (isLoading: boolean) => ({ type: 'PF/GET_PROFILE_LOADING', isLoading } as const),
}


export const profileDataTH = (id: number | null) => async (dispatch: DispatchProfileType) => {
	try {
		const profileData = await profileApi.getProfileData(id);
		if (profileData.userId === id) {
			dispatch(actionsProfile.getProfileData(profileData))
		}
	} catch (err: any) {
		console.log(`в ProfileReducer в санке profileDataTH пришел не правильный айди, ${err}`);
	}
}


export const profileStatusTH = (id: number | null) => async (dispatch: DispatchProfileType) => {
	try {
		dispatch(actionsProfile.getProfileLoadingAC(true));
		const profileStatus = await profileApi.getStatusProfile(id);
		dispatch(actionsProfile.getProfileStatusAC(profileStatus))
		dispatch(actionsProfile.getProfileLoadingAC(false));

	} catch (err) {
		dispatch(actionsProfile.getProfileLoadingAC(false));

		console.log(`в ProfileReducer в санке profileStatusTH пришел не правильный айди, ${err}`);
	}
}


export const updateStatusProfileTH = (newStatus: string) => async (dispatch: DispatchProfileType) => {
	try {
		dispatch(actionsProfile.getProfileLoadingAC(true));

		const updateStatus: any = await profileApi.updateStatusProfile(newStatus);


		if (updateStatus.resultCode === 0) {
			dispatch(actionsProfile.getProfileStatusAC(newStatus))
			dispatch(actionsProfile.getProfileLoadingAC(false));
		}

	} catch (err) {
		dispatch(actionsProfile.getProfileLoadingAC(false));
		console.log(`ошибка в ProfileReducer в санке updateStatusProfileTH, ${err}`);
	}
}


export const changeMyProfileDataInfoTH = (payload: IProfileInfo) => async (dispatch: DispatchProfileType | any, getState: () => RootType) => {
	dispatch(actionsProfile.getProfileLoadingAC(true));

	try {
		const changeProfileDataType = await profileApi.updateProfileDataInfo(payload);
		let myProfileId = getState().AuthPage.id;

		if (changeProfileDataType.resultCode === 0) {
			dispatch(profileDataTH(myProfileId));
			dispatch(actionsProfile.getProfileLoadingAC(false));

		}
	} catch (err) {
		dispatch(actionsProfile.getProfileLoadingAC(false));
		console.log(`ошибка в ProfileReducer в санке changeMyProfileDataInfoTH, ${err}`);

	}
};





export default ProfileReducer