import { RootType } from '../redux-store';


export const getProfileDataSL = (state: RootType) => state.profile.profileData;
export const getProfileStatus = (state: RootType) => state.profile.profileStatus;
export const getProfileLoading = (state: RootType) => state.profile.isloadingProfile;
