import React from 'react';
import styles from './SocialSideMenu.module.css'
import socialSideMenu from '../../assets/img/SocialSideMenu/arrowUp.png';

function SocialSideMenu(): JSX.Element {
	return (
		<>

			<section className={styles.SocialSideMenuWrapper}>

				<div className={styles.arrowUpBox}>

					<a href="/" className={styles.arrowUp}>
						<img src={socialSideMenu} alt="" />
					</a>

					<h2 className={styles.menuText}>
						<span className={styles.menuTextSlash}>
							/
						</span>
						вверх
					</h2>

				</div>


				<button className={styles.SocialSideMenuPhone} aria-label='phone icon call the main office'>
					<span className={styles.SocialSideMenuPhoneSpan}></span>
				</button>

				<button className={styles.SocialSideMenuMessage} aria-label='phone message call the main office'>
					<span className={styles.SocialSideMenuMessageSpan}></span>
				</button>

			</section>

		</>
	)
}

export default SocialSideMenu