
import React from 'react'
import styles from './AboutBlock.module.css';
import aboutJpg from '../../assets/img/aboutBlog/about.jpg';
import aboutWebp from '../../assets/img/aboutBlog/about.webp';



function AboutBlock() {
	return (
		<section className={styles.aboutBlock}>
			<h2 className={styles.title}>О Бренде</h2>
			<div className={styles.aboutBlockWrapper}>

				<div className={styles.boxImage}>
					<picture className={styles.aboutBlockImg} >
						<source srcSet={aboutWebp} type="image/webp" />
						<img  src={aboutJpg} alt='about brand img' />
					</picture>
				</div>

				<div className={styles.aboutText}>
					<p >
						Сегодня ELENA - это первый в России магазин готового женского смокинга. У нас каждая женщина может подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники.
					</p>

					<p>
						Костюм со смокингом ELENA - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных женщин-руководителей, представительниц научной и деловой элиты.
					</p>

					<p>
						История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора коллекции, Елены Алъятевой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли женственные платья и костюмы.
					</p>

					<a className={styles.aboutBtn} href='/' aria-label='кнопка узнать подробнее о бренде'>
						Подробнее
						<span className={styles.aboutBtnSlash}>\</span>
					</a>
				</div>

			
			</div>
		</section >

	)
}

export default AboutBlock