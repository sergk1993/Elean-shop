import { RootType } from '../redux-store';

export const getAuth = (state:RootType) => state.AuthPage;
export const getCaptchaSL = (state: RootType) => state.AuthPage.getCaptcha;


