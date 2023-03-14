import styles from './Catalog.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { CatalogInterface } from '../../types/types';
import { RootType } from '../../Redux/redux-store';




function Catalog(props: CatalogInterface): JSX.Element {

	let CatalogNames = props.catalogPage.catalogList.map((e) => {
		return (
			<a href="/" key={e.id}>
				<figure >
					<figcaption>
						{e.title}
					</figcaption>
					<picture>
						<source srcSet={e.photoImgWebp} type='image/webp' />
						<img src={e.photoImgJpeg} alt='items' />
					</picture>
				</figure>

			</a>
		);
	})


	let catalogListDown = props.catalogPage.catalogListDown.map((e) => {
		return (
			<a href="/" key={e.id}>
				<figure >
					<figcaption>
						{e.title}
					</figcaption>
					<picture>
						<source srcSet={e.photoImgWebp} type='image/webp' />
						<img src={e.photoImgJpeg} alt="blouses img" />
					</picture>
				</figure>
			</a>
		);
	})


	return (
		<>
			<section className={styles.catalog}>
				<div className={styles.gridCatalogTop}>
					{CatalogNames}
				</div>

				<div className={styles.gridCatalogDown}>
					{
						catalogListDown
					}
				</div>

			</section>
		</>
	);
}


function mapStateToProps(state: RootType) {
	return {
		catalogPage: state.catalogListPage.catalogPage
	}
}


export default connect(mapStateToProps)(Catalog);