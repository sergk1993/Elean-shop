import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IProfileInfo, IProfileInfoImg } from '../../../../types/types';
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
		let handler = (event:MouseEvent) => {
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
									<span>aboutMe</span>
									<input type='textArea' {...register("aboutMe")} />
								</label>
							</li>
							<li>
								<label><span>fullName</span>
									<input {...register(`fullName`, {
										required: 'fullName должен содержать символы',
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>Описание для работодателя</span>
									<input {...register("lookingForAJobDescription", { required: 'некорректны символы' })} />
								</label>
							</li>

							<li>
								<label><span>github</span>
									<input {...register(`contacts.github`, {
										pattern: urlRegExp,
									})} />
									{errors?.contacts?.github && <p>{errors?.contacts?.github.message || 'Ошибка'} </p>}
								</label>
							</li>
							<li><label><span>vk</span>
								<input {...register(`contacts.vk`, {
									pattern: urlRegExp,
								})} />
							</label>
							</li>
							<li>
								<label>
									<span>facebook</span>
									<input {...register(`contacts.facebook`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>instagram</span>
									<input {...register(`contacts.instagram`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>twitter</span>
									<input {...register(`contacts.twitter`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>website</span>
									<input {...register(`contacts.website`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>youtube</span>
									<input {...register(`contacts.youtube`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>
							<li>
								<label>
									<span>mainLink</span>
									<input {...register(`contacts.mainLink`, {
										pattern: urlRegExp,
									})} />
								</label>
							</li>

							<li className={styles.myProfileSettingsCheckLi}>
								<label><span>Ищу работу</span><input type='checkbox' {...register(`lookingForAJob`,)} /></label>
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