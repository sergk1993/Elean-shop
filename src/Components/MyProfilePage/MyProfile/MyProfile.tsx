import React, { Fragment, useEffect, useState } from 'react'
import { IProfileAuth, IProfileInfo, IProfileInfoImg } from '../../../types/types'
import styles from './MyProfile.module.css'
import profileEmptyImg from '../../../assets/img/profile/profileUser.png';
import MyProfileSettings from './MyProfileSettings/MyProfileSettings';
import { Link } from 'react-router-dom';
import SceletonsProfile from '../SceletonProfile/SceletonsProfile';
import Skeleton from 'react-loading-skeleton';

interface IprofileInfo extends IProfileInfoImg, IProfileInfo { }

type MyProfileType = {
	authProps: IProfileAuth,
	profileInfo: IprofileInfo | null,
	profileStatus: string | null | any,
	updateStatusProfileTH: (str: string) => void,
	isProfileLoading: boolean,
	changeMyProfileDataInfoTH: (payload: IProfileInfo) => void,
	profileStatusTH: (id: number | null) => void,
	profileDataTH: (id: number | null) => void,
	checkTheSameUser: boolean,
	setIsOpenSettings: (item: boolean) => void,
	isOpenSettings: boolean,
	sendNewImageProfileTH: (newImg: string) => void,
}


function MyProfile(props: MyProfileType) {

	let [status, setStatus] = useState(true);
	let [getCurrentStatus, setGetCurrentStatus] = useState(props.profileStatus);


	let handlerMyStatus = (item: string) => {
		if (item !== props.profileStatus) {
			props.updateStatusProfileTH(item)
		}
		setStatus(true)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handlerMyStatus(getCurrentStatus);
		}
	};

	useEffect(() => {
		if (getCurrentStatus !== props.profileStatus) {
			setGetCurrentStatus(props.profileStatus)
		}
	}, [props.profileStatus])

	const sendNewImg = (e: any) => {
		if (e.target.files.length) {
			props.sendNewImageProfileTH(e.target.files[0])
		}

	}

	return (
		<>
			{props.isProfileLoading ? <Skeleton height={460} style={{ marginBottom: 20 }} /> :

				<section className={styles.myProfileMain}>

					{props.profileInfo !== null &&
						<article className={styles.myProfileBox}>

							<div className={styles.myProfileBoxImgBox}>


								{props.checkTheSameUser ? <>
									<img className={styles.myProfileBoxImg} src={props.profileInfo.photos?.large ? props.profileInfo.photos?.large : 'https://static.thenounproject.com/png/1438946-200.png'} alt="" />
									<input className={styles.myProfileBoxImgInput} type="file" alt='сменить картинку' title='сменить картинку' onChange={sendNewImg} />
								</> : <img className={styles.myProfileBoxImg} src={props.profileInfo.photos?.large ? props.profileInfo.photos?.large : 'https://static.thenounproject.com/png/1438946-200.png'} alt="" />
								}

							</div>

							<div>
								<div className={styles.myProfileTitleBox}>

									<h2 className={styles.myProfileBoxName}>{props.profileInfo.fullName ? props.profileInfo.fullName : 'Имя нет'}</h2>

									{/* изменение статуса с проверкой */}
									{props.checkTheSameUser ? <>
										{status ?
											<p className={styles.myProfileBoxStatus}
												onClick={() => setStatus(false)}
												// Отключение/включение клика на статус
												style={{ pointerEvents: !props.isProfileLoading ? 'auto' : 'none' }}
											>{props.profileStatus ? props.profileStatus : 'status'}</p>
											:
											<input
												autoFocus onBlur={(e) => handlerMyStatus(getCurrentStatus)}
												onKeyDown={handleKeyDown}
												className={styles.myProfileBoxStatusInput}
												type="text"
												value={getCurrentStatus}
												onChange={(e) => setGetCurrentStatus(e.currentTarget.value)}
											/>

										}


									</> : <p className={styles.myProfileBoxProfileUserStatus}>{props.profileStatus ? props.profileStatus : 'Статус пустой'}</p>
									}

									<div className={styles.myProfileBoxAboutMeBox}>

										{props.profileInfo.aboutMe ? <p >{props.profileInfo.aboutMe}</p> : ''}
										{props.profileInfo.lookingForAJobDescription ? <p>{props.profileInfo.lookingForAJobDescription}</p> : ''}
										{props.profileInfo.lookingForAJob ? <p className={styles.profileInfoLookingForAJobYes}>ищу работу</p> : <p className={styles.profileInfoLookingForAJobNo}>не ищу работу</p>}

									</div>


									<div className={styles.profileInfoBox}>
										<h3>Contacts</h3>
										{Object.keys(props.profileInfo?.contacts || {}).map((key: any, i: number) => {

											return (
												<Fragment key={i}>
													{props.profileInfo?.contacts && props.profileInfo?.contacts[key]
														? <Link target='_blank' className={styles.profileInfoContactsLink} to={props.profileInfo?.contacts[key]}>{key}</Link>
														: ''}
												</Fragment>
											);
										})}

									</div>
								</div>

								{props.checkTheSameUser ? <>
									{props.isOpenSettings === false && <button className={styles.myProfileSettings} onClick={() => props.setIsOpenSettings(true)} >открыть настройки</button>}
								</> : ''}

							</div>
						</article>
					}

					{/* кнопка включения/выключения настроек */}
					{props.checkTheSameUser ? <>{props.isOpenSettings === true && <MyProfileSettings profileId={props.authProps.id} changeMyProfileDataInfoTH={props.changeMyProfileDataInfoTH} profileInfo={props.profileInfo} setIsOpenSettings={props.setIsOpenSettings} />}</> : ''}


				</section >
			}</>
	)
}

export default MyProfile
