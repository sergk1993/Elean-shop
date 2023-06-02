import React from 'react';
import styles from './InstagramCards.module.css';
import instagramCards1 from '../../assets/img/instagramCards/instagramCards1.jpg'
import instagramCards2 from '../../assets/img/instagramCards/instagramCards2.jpg'


const instagramCardsState = [
	{ id: 0, imgInsta: instagramCards1, name: 'Elena_official', brand: 'Кофемания / coffeemania' },
	{ id: 1, imgInsta: instagramCards2, name: 'Ira_official', brand: 'Кофемания / coffeemania' },
	{ id: 2, imgInsta: instagramCards1, name: 'Sofia_official', brand: 'Кофемания / coffeemania' },
	{ id: 3, imgInsta: instagramCards2, name: 'Sara_official', brand: 'Кофемания / coffeemania' },
]

function InstagramCards() {
	return (
		<section className={styles.instagramCards}>
			<h2>МЫ В INSTAGRAm</h2>

				<div className={styles.wrapper}>

					{
						instagramCardsState.map(e => {
							return (
								<div className={styles.infoBox} key={e.id}>
									<img className={styles.infoBoxImg} src={e.imgInsta} alt="instagram posing girl" />
									<a className={styles.descrBox} href='/'>
										<img className={styles.descrImg} src={e.imgInsta} alt="" />
										<div className={styles.descrBoxAbout} >
											<p className={styles.descrTitle}>{e.name} <span className={styles.subscribe}>Подписаться</span></p>
											<p className={styles.descrSubTItle}>{e.brand}</p>
										</div>
									</a>
								</div>
							);
						})
					}
				</div>



		</section>
	)
}

export default InstagramCards