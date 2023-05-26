import React, { Fragment, useEffect, useState } from 'react'
import { IProfileInfo, IProfileInfoImg } from '../../../types/types'
import styles from './MyProfile.module.css'
import profileEmptyImg from '../../../assets/img/profile/profileUser.png';
import MyProfileSettings from './MyProfileSettings/MyProfileSettings';
import { Link } from 'react-router-dom';

interface IprofileInfo extends IProfileInfoImg, IProfileInfo { }

type MyProfileType = {
	authProps: {
		id: number | null,
		email: string | null,
		login: string | null,
	}
	profileInfo: IprofileInfo | null,
	profileStatus: string | null | any,
	updateStatusProfileTH: (str: string) => void,
	getProfileLoading: boolean,
	changeMyProfileDataInfoTH: (payload: IProfileInfo) => void,
}


function MyProfile(props: MyProfileType) {
	let [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
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





	return (
		<section className={styles.myProfileMain}>

			{props.profileInfo !== null &&
				<article className={styles.myProfileBox}>

					{props.profileInfo.photos?.large && <img className={styles.myProfileBoxImg} src={props.profileInfo.photos.large || profileEmptyImg} alt="" />}

					<div className={styles.myProfileBoxWrapper}>
						<div className={styles.myProfileTitleBox}>

							<h2 className={styles.myProfileBoxName}>{props.profileInfo.fullName ? props.profileInfo.fullName : 'Имя нет'}</h2>

							{status ?
								<p className={`${styles.myProfileBoxStatus}`}
									onClick={() => setStatus(false)}
									style={{ pointerEvents: !props.getProfileLoading ? 'auto' : 'none' }} // Отключение/включение взаимодействия с помощью CSS свойства pointer-events
								>
									{props.profileStatus ? props.profileStatus : 'status'}</p>

								: <input autoFocus onBlur={(e) => handlerMyStatus(getCurrentStatus)} onKeyDown={handleKeyDown}
									className={styles.myProfileBoxStatusInput} type="text" value={getCurrentStatus} onChange={(e) => setGetCurrentStatus(e.currentTarget.value)}
								/>
							}

							<div className={styles.myProfileBoxAboutMeBox}>

								<p >{props.profileInfo.aboutMe ? props.profileInfo.aboutMe : ''}</p>
								{props.profileInfo.lookingForAJobDescription ? <p>{props.profileInfo.lookingForAJobDescription}</p> : ''}
								{props.profileInfo.lookingForAJob ? <p className={styles.profileInfoLookingForAJob}>ищу работу</p> : <p className={styles.profileInfoLookingForAJob}>не ищу работу</p>}

							</div>


							<div className={styles.profileInfoBox}>
								<h3>Contacts</h3>
								{Object.keys(props.profileInfo?.contacts || {}).map((key: any, i: number) => {
									return (
										<Fragment key={i}>
											{props.profileInfo?.contacts && props.profileInfo?.contacts[key]
												? <Link className={styles.profileInfoContactsLink} to={props.profileInfo?.contacts[key]}>{key}</Link>
												: ''}
										</Fragment>
									);
								})}

							</div>
						</div>

						{isOpenSettings === false && <button className={styles.myProfileSettings} onClick={() => setIsOpenSettings(true)} >открыть настройки</button>}

					</div>
				</article>
			}

			{isOpenSettings === true && <MyProfileSettings  profileId={props.authProps.id} changeMyProfileDataInfoTH={props.changeMyProfileDataInfoTH} profileInfo={props.profileInfo} setIsOpenSettings={setIsOpenSettings} />}

		</section >
	)
}

export default MyProfile
