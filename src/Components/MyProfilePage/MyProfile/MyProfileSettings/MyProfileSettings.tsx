import { Fragment, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IProfileInfo, IProfileInfoImg, IProfileInfoContacts } from '../../../../types/types';
import styles from './MyProfileSettings.module.css'

interface IprofileInfo extends IProfileInfoImg, IProfileInfo { }

type MyProfileSettingsType = {
	setIsOpenSettings: (items: boolean) => void,
	profileInfo: IProfileInfo | null,
	changeMyProfileDataInfoTH: (payload: IProfileInfo) => void,
	profileId: number | null,
}


function MyProfileSettings(props: MyProfileSettingsType) {

	const { profileInfo } = props;
	const { lookingForAJob, fullName, aboutMe, lookingForAJobDescription } = profileInfo || {};
	const { vk, facebook, github, instagram, mainLink, twitter, website, youtube } = profileInfo?.contacts || {}

	const profileSetModalRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		let handler = (event: MouseEvent) => {
			if (!profileSetModalRef?.current?.contains(event.target as Node)) {
				props.setIsOpenSettings(false)
			}
		}
		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])


	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: 'onBlur',
		defaultValues: {
			aboutMe: aboutMe || '',
			lookingForAJobDescription: lookingForAJobDescription || '',
			lookingForAJob: lookingForAJob || false,
			fullName: fullName || '',
			contacts: {
				github: github || '',
				vk: vk || '',
				facebook: facebook || '',
				instagram: instagram || '',
				twitter: twitter || '',
				youtube: youtube || '',
				website: website || '',
				mainLink: mainLink || '',
			},
		}
	});


	const onSubmit = (data: any) => {
		props.changeMyProfileDataInfoTH(data)
		props.setIsOpenSettings(false)
	};

	const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;


	if (!profileInfo) {
		return null
	}

	const contactKeys = Object.keys(profileInfo?.contacts || {}) as (keyof typeof profileInfo.contacts)[];

	return (
		<>
			<div className={styles.myProfileSettingsCloseBox}>
				<div ref={profileSetModalRef} className={styles.myProfileSettingsCloseWrapper}>
					<button className={styles.myProfileSettingsClose} onClick={() => props.setIsOpenSettings(false)} >
						<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 13L13 1" stroke="black" strokeWidth="2" />
							<path d="M13 13L1 1" stroke="black" strokeWidth="2" />
						</svg>
					</button>

					<h2>изменить данные</h2>

					<form className={styles.myProfileSettingsForm} onSubmit={handleSubmit(onSubmit)}>

						<ul className={styles.myProfileSettingsInputBox}>

							<li>
								<label>
									<p>aboutMe</p>
									<input type='textarea' {...register("aboutMe")} />
								</label>
							</li>
							<li>
								<label><p>fullName</p>
									<input {...register(`fullName`, {
										required: 'fullName должен содержать символы',
									})} />
								</label>
							</li>
							<li>
								<label>
									<p>Описание для работодателя</p>
									<input {...register("lookingForAJobDescription")} />
								</label>
							</li>

							{props.profileInfo?.contacts && contactKeys.map((contactKey: keyof IProfileInfoContacts['contacts']) => {
								return (
									<Fragment key={contactKey}>
										{
											<li>
												<label>
													<p>{contactKey}
														{errors?.contacts?.[contactKey] && <span className={styles.profileInfoSettingsError}>{errors.contacts[contactKey]?.message}</span>}
													</p>

													<input {...register(`contacts.${contactKey}`, { pattern: { value: urlRegExp, message: `${contactKey} должен содержать корректные символы` } })} />
												</label>

											</li>
										}
									</Fragment>
								);
							})}


							<li className={styles.myProfileSettingsCheckLi}>
								<label><p>Ищу работу</p><input type='checkbox' {...register(`lookingForAJob`,)} /></label>
							</li>
						</ul>
						<input className={styles.myProfileSettingsSubmit} type="submit" />

					</form>
				</div>
			</div>
		</>
	)
}

export default MyProfileSettings