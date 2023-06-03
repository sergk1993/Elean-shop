import { connect } from 'react-redux';
import { getProfileAuthTH, loginTH, LoginTHType, logOutTH } from '../../Redux/Auth-reducer';
import { getAuth, getCaptchaSL } from '../../Redux/selectors/Auth-selectors';
import { RootType } from '../../Redux/redux-store';
import { IProfileAuth, IProfileInfo } from '../../types/types';
import Login from '../common/Login/Login';
import styles from './MyProfilePageContainer.module.css';
import MyProfile from './MyProfile/MyProfile';
import { profileStatusTH, profileDataTH, updateStatusProfileTH, actionsProfile, changeMyProfileDataInfoTH, setFirstRender, sendNewImageProfileTH } from '../../Redux/Profile-reducer';
import { getCaptchaProfileTH } from '../../Redux/Auth-reducer';
import { getProfileDataSL, getProfileStatus, isProfileLoading, setFirstRenderSL, getNewImageSL, } from '../../Redux/selectors/Profile-selectors';

import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';




type MyProfilePageType = {
	auth: IProfileAuth,
	loginTH: (items: LoginTHType) => void,
	logOutTH: () => void,
	profileInfo: IProfileInfo | null,
	profileStatusTH: (id: number | null) => void,
	profileDataTH: (id: number | null) => void,
	updateStatusProfileTH: (str: string) => void,
	changeMyProfileDataInfoTH: (payload: IProfileInfo) => void,
	profileStatus: string | null,
	isProfileLoading: boolean,
	setFirstRender: (item: any) => void,
	isFirstRenderCheck: boolean,
	getProfileLoadingAC: (item: boolean) => void,
	sendNewImageProfileTH: (newImg: string) => void,
	getCaptchaProfileTH: () => void,
	captcha: string | null,

}


function MyProfilePageContainer(props: MyProfilePageType) {

	// проверка на одинакового юсера для скрытия разных кнопок 
	let [checkTheSameUser, setCheckTheSameUser] = useState(false)
	// открытие настроек 
	let [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);

	useEffect(() => {
		// проверка при первом рендере если авторизационный айди не найден присвой мой айди
		if (!props.profileInfo?.userId) {
			props.profileDataTH(props.auth.id);
			props.profileStatusTH(props.auth.id);

		} else if (props.isFirstRenderCheck) {
			props.profileDataTH(props.profileInfo.userId);
			props.profileStatusTH(props.profileInfo.userId);

			props.setFirstRender(false)
		}
	}, [props.profileInfo?.userId, props.auth.id, props.isFirstRenderCheck]);



	useEffect(() => {
		if (props.profileInfo?.userId === props.auth.id) {
			setCheckTheSameUser(true);
		} else {
			setCheckTheSameUser(false);
			setIsOpenSettings(false);
		}
	}, [props.profileInfo?.userId, props.auth.id, checkTheSameUser, isOpenSettings])


	return (




		<section className={styles.profilePage}>
			<div className="container">

				<div className={styles.profilePageWrapper}>

					<h3>Profile</h3>

					{!props.auth.isAuth ? <Login isLogin={props.loginTH} captcha={props.captcha} />
						:
						<MyProfile
							isProfileLoading={props.isProfileLoading}
							updateStatusProfileTH={props.updateStatusProfileTH}
							profileStatus={props.profileStatus}
							profileInfo={props.profileInfo}
							authProps={props.auth}
							changeMyProfileDataInfoTH={props.changeMyProfileDataInfoTH}
							profileDataTH={props.profileDataTH}
							profileStatusTH={props.profileStatusTH}
							checkTheSameUser={checkTheSameUser}
							setIsOpenSettings={setIsOpenSettings}
							isOpenSettings={isOpenSettings}
							sendNewImageProfileTH={props.sendNewImageProfileTH}

						/>

					}

					{props.isProfileLoading && props.isFirstRenderCheck && props.auth.isAuth ? <Skeleton height={50} width={250} /> :
						<>
							{
								props.auth.isAuth && checkTheSameUser &&
								<button className={styles.myProfilePageBtnLogOut} onClick={props.logOutTH}>выйти</button>
							}
						</>
					}


				</div>
			</div >
		</section>
	)
}

let mapStateToProps = (state: RootType) => {
	return {
		auth: getAuth(state),
		profileInfo: getProfileDataSL(state),
		profileStatus: getProfileStatus(state),
		isProfileLoading: isProfileLoading(state),
		isFirstRenderCheck: setFirstRenderSL(state),
		newImg: getNewImageSL(state),
		captcha: getCaptchaSL(state),
	}
}


let { getProfileStatusAC, getProfileLoadingAC, } = actionsProfile;

export default connect(mapStateToProps,
	{
		getProfileAuthTH,
		loginTH,
		logOutTH,
		profileStatusTH,
		profileDataTH,
		updateStatusProfileTH,
		getProfileStatusAC,
		changeMyProfileDataInfoTH,
		setFirstRender,
		getProfileLoadingAC,
		sendNewImageProfileTH,
		getCaptchaProfileTH,
	}
)(MyProfilePageContainer)