import styles from './Catalog.module.css';
import pictureOneJpg from '../../assets/img/catalog/catalog_1.jpg';
import pictureOneWebp from '../../assets/img/catalog/catalog_1.webp';

import pictureTwoJpg from '../../assets/img/catalog/catalog_2.jpg';
import pictureTwoWebp from '../../assets/img/catalog/catalog_2.webp';

import pictureThreeJpg from '../../assets/img/catalog/catalog_3.jpg';
import pictureThreeWebp from '../../assets/img/catalog/catalog_3.webp';

import pictureFourJpg from '../../assets/img/catalog/catalog_4.jpg';
import pictureFourWebp from '../../assets/img/catalog/catalog_4.webp';

import pictureFiveJpg from '../../assets/img/catalog/catalog_5.jpg';
import pictureFiveWebp from '../../assets/img/catalog/catalog_5.webp';

import pictureSixJpg from '../../assets/img/catalog/catalog_6.jpg';
import pictureSixWebp from '../../assets/img/catalog/catalog_6.webp';

import pictureSevenJpg from '../../assets/img/catalog/catalog_7.jpg';
import pictureSevenWebp from '../../assets/img/catalog/catalog_7.webp';

import pictureEightJpg from '../../assets/img/catalog/catalog_8.jpg';
import pictureEightWebp from '../../assets/img/catalog/catalog_8.webp';

import pictureNineJpg from '../../assets/img/catalog/catalog_9.jpg';
import pictureNineWebp from '../../assets/img/catalog/catalog_9.webp';







function Catalog(): JSX.Element {
	return (
		<>
			<section className={styles.catalog}>
				<div className={styles.gridCatalogTop}>
					<a className={styles.firstItem} href="/" aria-label='new product'>
						<figure >
							<figcaption>
								новинки
							</figcaption>

							<picture>
								<source srcSet={pictureOneWebp} type='image/webp' />
								<img className={styles.newImg} src={pictureOneJpg} alt="new product" />
							</picture>
						</figure>
					</a>

					<a href="/">
						<figure>
							<figcaption>
								Акции
							</figcaption>
							<picture>
								<source srcSet={pictureTwoWebp} type='image/webp' />
								<img src={pictureTwoJpg} alt="stocks img" />
							</picture>
						</figure>
					</a>

					<a href="/">
						<figure>
							<figcaption>
								Костюмы
							</figcaption>
							<picture>
								<source srcSet={pictureThreeWebp} type='image/webp' />
								<img src={pictureThreeJpg} alt="suits img" />
							</picture>
						</figure>
					</a>

					<a href="/">
						<figure>
							<figcaption>
								Смокинги
							</figcaption>
							<picture>
								<source srcSet={pictureFourWebp} type='image/webp' />
								<img src={pictureFourJpg} alt="Tuxedos img" />
							</picture>
						</figure>
					</a>

					<a href="/">
						<figure>
							<figcaption>
								Брюки 5
							</figcaption>
							<picture>
								<source srcSet={pictureFiveWebp} type='image/webp' />
								<img src={pictureFiveJpg} alt="Trousers img" />
							</picture>
						</figure>
					</a>

					<a className={styles.dressesTopImg} href="/" >
						<figure >
							<figcaption>
								Платья
							</figcaption>
							<picture>
								<source srcSet={pictureSixWebp} type='image/webp' />
								<img src={pictureSixJpg} alt="Dresses img" />
							</picture>
						</figure>
					</a>
				</div>



				<div className={styles.gridCatalogDown}>
					<a href="/">
						<figure >
							<figcaption>
								Платья
							</figcaption>
							<picture>
								<source srcSet={pictureNineWebp} type='image/webp' />
								<img src={pictureNineJpg} alt="blouses img" />
							</picture>
						</figure>
					</a>
					
					<a href="/">
						<figure >
							<figcaption>
							Юбки
							</figcaption>
							<picture>
								<source srcSet={pictureTwoWebp} type='image/webp' />
								<img src={pictureTwoJpg} alt="skirts img" />
							</picture>
						</figure>
					</a>

					<a href="/">
						<figure >
							<figcaption>
							Топы и жилеты
							</figcaption>
							<picture>
								<source srcSet={pictureEightWebp} type='image/webp' />
								<img src={pictureEightJpg} alt="Tops and vests img" />
							</picture>
						</figure>
					</a>	
					
					<a href="/">
						<figure >
							<figcaption>
							Аксессуары
							</figcaption>
							<picture>
								<source srcSet={pictureSevenWebp} type='image/webp' />
								<img src={pictureSevenJpg} alt="Accessories img" />
							</picture>
						</figure>
					</a>


				</div>
			</section>
		</>
	);
}

export default Catalog;