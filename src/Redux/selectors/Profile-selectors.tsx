import { RootType } from '../redux-store';

export const getProfileDataSL = (state: RootType) => state.profile.profileData;
export const getProfileStatus = (state: RootType) => state.profile.profileStatus;
export const isProfileLoading = (state: RootType) => state.profile.isLoadingProfile;
export const setFirstRenderSL = (state: RootType) => state.profile.isFirstRender;
export const getNewImageSL = (state: RootType) => state.profile.newImg;
