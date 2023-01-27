import React from 'react';
import styles from './InstagramCards.module.css';
import instagramCards1 from '../../assets/img/instagramCards/instagramCards1.jpg'
import instagramCards2 from '../../assets/img/instagramCards/instagramCards2.jpg'


function InstagramCards() {
	return (
		<section className={styles.instagramCards}>
			<h2>МЫ В INSTAGRAm</h2>
			<div className={styles.wrapper}>

				<div className={styles.infoBox}>
					<img className={styles.infoBoxImg} src={instagramCards1} alt="instagram posing girl" />
					<a className={styles.descrBox} href='/'>
						<img className={styles.descrImg} src={instagramCards1} alt="" />
						<div className={styles.descrBoxAbout} >
							<p className={styles.descrTitle}>elena_official <span className={styles.subscribe}>Подписаться</span></p>
							<p className={styles.descrSubTItle}>Кофемания / coffeemania</p>
						</div>
					</a>
				</div>

				<div className={styles.infoBox}>
					<img className={styles.infoBoxImg} src={instagramCards2} alt="instagram posing girl" />
					<a className={styles.descrBox} href='/'>
						<img className={styles.descrImg} src={instagramCards2} alt="" />
						<div className={styles.descrBoxAbout} >
							<p className={styles.descrTitle}>elena_official <span className={styles.subscribe}>Подписаться</span></p>
							<p className={styles.descrSubTItle}>Кофемания / coffeemania</p>
						</div>
					</a>
				</div>
				<div className={styles.infoBox}>
					<img className={styles.infoBoxImg} src={instagramCards1} alt="instagram posing girl" />
					<a className={styles.descrBox} href='/'>
						<img className={styles.descrImg} src={instagramCards1} alt="" />
						<div className={styles.descrBoxAbout} >
							<p className={styles.descrTitle}>elena_official <span className={styles.subscribe}>Подписаться</span></p>
							<p className={styles.descrSubTItle}>Кофемания / coffeemania</p>
						</div>
					</a>
				</div>
				<div className={styles.infoBox}>
					<img className={styles.infoBoxImg} src={instagramCards2} alt="instagram posing girl" />
					<a className={styles.descrBox} href='/'>
						<img className={styles.descrImg} src={instagramCards2} alt="" />
						<div className={styles.descrBoxAbout} >
							<p className={styles.descrTitle}>elena_official <span className={styles.subscribe}>Подписаться</span></p>
							<p className={styles.descrSubTItle}>Кофемания / coffeemania</p>
						</div>
					</a>
				</div>
				
			</div>
		</section>
	)
}

export default InstagramCards