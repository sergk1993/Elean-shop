import { connect } from 'react-redux';
import { getProfileAuthTH, loginTH, LoginTHType, logOutTH } from '../../Redux/Auth-reducer';
import { getAuth } from '../../Redux/selectors/Auth-selectors';
import { RootType } from '../../Redux/redux-store';
import { IProfileAuth, IProfileInfo } from '../../types/types';
import Login from '../common/Login/Login';
import styles from './MyProfilePageContainer.module.css';
import MyProfile from './MyProfile/MyProfile';
import { getProfileDataSL, isProfileLoading, getProfileStatus, setFirstRenderSL, getNewImageSL } from '../../Redux/selectors/Profile-selectors';
import { profileStatusTH, profileDataTH, updateStatusProfileTH, actionsProfile, changeMyProfileDataInfoTH, setFirstRender, sendNewImageProfileTH } from '../../Redux/Profile-reducer';
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
}


function MyProfilePageContainer(props: MyProfilePageType) {
	// проверка на одинакового юсера для скрытия разных кнопок 
	let [checkTheSameUser, setCheckTheSameUser] = useState(false)
	// открытие настроек 
	let [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);


	useEffect(() => {
		// проверка при первом рендере если авторизационный айди не найден присвой мой айди
		if (!props.profileInfo?.userId) {
			setTimeout(() => {
				props.profileDataTH(props.auth.id);
				props.profileStatusTH(props.auth.id);
			}, 200)
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
	}, [props.profileInfo?.userId, props.auth.id])



	return (
		<div className="container">




			<section className={styles.profilePage}>

				<h3>Profile</h3>

				{!props.auth.isAuth ? <Login isLogin={props.loginTH} />
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

				{props.isProfileLoading && props.isFirstRenderCheck ? <Skeleton height={50} width={250} /> :
					<>
						{
							props.auth.isAuth && checkTheSameUser &&
							<button className={styles.myProfilePageBtnLogOut} onClick={props.logOutTH}>выйти</button>
						}
					</>
				}

			</section>

		</div>
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
	}
)(MyProfilePageContainer)