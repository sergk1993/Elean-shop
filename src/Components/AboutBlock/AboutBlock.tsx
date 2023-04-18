
import React from 'react'
import styles from './AboutBlock.module.css';
import aboutJpg from '../../assets/img/aboutBlog/about.jpg';
import aboutWebp from '../../assets/img/aboutBlog/about.webp';
import { connect } from 'react-redux';
import { AboutBlockInterface } from '../../types/types';
import { RootType } from '../../Redux/redux-store';
import { getAboutBlock } from '../../Redux/selectors/AboutBlock-selectors';


type AboutBlockType = {
	AboutBlock: AboutBlockInterface
}

function AboutBlock(props: AboutBlockType): JSX.Element {
	return (
		<section className={styles.aboutBlock}>
			<h2 className={styles.title}>О Бренде</h2>
			<div className={styles.aboutBlockWrapper}>

				<div className={styles.boxImage}>
					<picture className={styles.aboutBlockImg} >
						<source srcSet={aboutWebp} type="image/webp" />
						<img src={aboutJpg} alt='about brand img' />
					</picture>
				</div>

				<div className={styles.aboutText}>
					{
						props.AboutBlock.aboutBlockText.map((e) => {
							return (
								<p key={e.id}>{e.info}</p>
							);
						})
					}



					{props.AboutBlock.aboutBlockBtn.map((e) => {
						return (
							<a className={styles.aboutBtn} href='/' aria-label='кнопка узнать подробнее о бренде' key={e.id}>

								<span className={styles.aboutBtnSlash}>{e.figure}</span>
							</a>
						);

					})
					}
				</div>


			</div>
		</section >
	)
}


const mapStateToPropr = (state: RootType) => {
	return {
		AboutBlock: getAboutBlock(state)
	}
}

export default connect(mapStateToPropr)(AboutBlock);