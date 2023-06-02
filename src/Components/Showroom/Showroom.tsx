import React from 'react'
import styles from './Showroom.module.css';


import showroomOneWebp from '../../assets/img/showroom/showroomOne.webp'
import showroomOneJpj from '../../assets/img/showroom/showroomOne.jpg'

import showroomTwoWebp from '../../assets/img/showroom/showroomTwo.webp'
import showroomTwoJpj from '../../assets/img/showroom/showroomTwo.jpg'

import showroomThreeWebp from '../../assets/img/showroom/showroomThree.webp'
import showroomThreeJpj from '../../assets/img/showroom/showroomThree.jpg'

function Showroom() {
	return (
		<section>
			<h2 className={styles.showroomTitle}>НАШ ШОУРУм</h2>
			<div className={styles.wrapper}>

				<picture className={styles.showRoomImgBox}>
					<source srcSet={showroomOneWebp} />
					<img src={showroomOneJpj} alt="" />
				</picture>

				<picture className={styles.showRoomImgBox}>
					<source srcSet={showroomTwoWebp} />
					<img className={styles.imgTwo} src={showroomTwoJpj} alt="" />
				</picture>

				<picture className={styles.showRoomImgBox}>
					<source srcSet={showroomThreeWebp} />
					<img className={styles.imgThree} src={showroomThreeJpj} alt="" />
				</picture >

			</div>
		</section>
	)
}

export default Showroom