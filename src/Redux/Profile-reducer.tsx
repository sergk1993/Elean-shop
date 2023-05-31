import { Dispatch } from 'react';
import { profileApi } from '../API/api';
import { IProfileInfo, IProfileInfoImg } from '../types/types';
import { InferActionType } from './redux-store';
import { RootType } from './redux-store';

interface IProfileData extends IProfileInfoImg, IProfileInfo { }

let initialState = {
	profileData: null as IProfileData | null,
	profileStatus: '' as string | null,
	isLoadingProfile: true as boolean,
	isFirstRender: true as boolean, //  отслеживает выполнение первого рендера
	newImg: '' as any,
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
				isLoadingProfile: action.isLoading
			}

		case 'PF/IS_FIRST_RENDER':
			return {
				...state,
				isFirstRender: action.isFirstRender
			}

		case 'PF/SEND_NEW_IMAGE':
			return {
				...state,
				profileData: { ...state.profileData, photos: action.newImg },
			}

		default:
			return state
	}
}

export type ActionProfileType = InferActionType<typeof actionsProfile>;
type DispatchProfileType = Dispatch<ActionProfileType>;

interface IProfileImage {
  small?: string | null,
  large?: string | null,
}

export const actionsProfile = {
	getProfileData: (items: any) => ({ type: 'PF/GET_PROFILE_DATA', payload: items } as const),
	getProfileStatusAC: (status: string) => ({ type: 'PF/GET_PROFILE_STATUS', status } as const),
	getProfileLoadingAC: (isLoading: boolean) => ({ type: 'PF/GET_PROFILE_LOADING', isLoading } as const),
	setIsFirstRender: (isFirstRender: boolean) => ({ type: 'PF/IS_FIRST_RENDER', isFirstRender } as const),
	sendNewImg: (newImg: IProfileImage) => ({ type: 'PF/SEND_NEW_IMAGE', newImg } as const),
}

export const profileDataTH = (id: number | null) => async (dispatch: DispatchProfileType) => {
	try {
		const profileData = await profileApi.getProfileData(id);
		dispatch(actionsProfile.getProfileLoadingAC(false));

		if (profileData.userId === id) {
			dispatch(actionsProfile.getProfileData(profileData))
			dispatch(actionsProfile.setIsFirstRender(false))
			setTimeout(() => {
				dispatch(actionsProfile.getProfileLoadingAC(false));
			}, 200)
		}
	} catch (err: any) {
		console.log(`в ProfileReducer в санке profileDataTH пришел не правильный айди, ${err}`);
	}
}

export const profileStatusTH = (id: number | null) => async (dispatch: DispatchProfileType) => {
	try {
		const profileStatus = await profileApi.getStatusProfile(id);
		dispatch(actionsProfile.getProfileStatusAC(profileStatus))
		dispatch(actionsProfile.setIsFirstRender(false))
	} catch (err) {
		console.log(`в ProfileReducer в санке profileStatusTH пришел не правильный айди, ${err}`);
	}
}

export const updateStatusProfileTH = (newStatus: string) => async (dispatch: DispatchProfileType) => {
	try {
		dispatch(actionsProfile.getProfileLoadingAC(true));

		const updateStatus: any = await profileApi.updateStatusProfile(newStatus);


		if (updateStatus.resultCode === 0) {
			dispatch(actionsProfile.getProfileStatusAC(newStatus))
			setTimeout(() => {
				dispatch(actionsProfile.getProfileLoadingAC(false));
			}, 200)
			dispatch(actionsProfile.setIsFirstRender(false))

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

export const setFirstRender = (isFirstRender: boolean) => ({
	type: 'PF/SET_FIRST_RENDER',
	isFirstRender
} as const);


export const sendNewImageProfileTH = (newImg: string) => async (dispatch: DispatchProfileType) => {
	const newImgApi = await profileApi.sendNewImg(newImg)
	if (newImgApi.resultCode === 0) {
		dispatch(actionsProfile.sendNewImg(newImgApi.data.photos))
	}
}





export default ProfileReducer