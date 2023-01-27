import { url } from 'inspector'
import React from 'react'
import styles from './ClientsReviews.module.css'
import peopleReviews from '../../../assets//img/clientsReviews/clientReviews.png';
import emptyPeopleReviews from '../../../assets//img/clientsReviews/emptyPeopleReviews.svg'

function ClientsReviews() {
	
	return (
		<section className={styles.clientsReviews}>

			<div className={styles.clientsReviewsWrapper}>


				<article className={styles.descr}>

				<img className={styles.hasImage} src={peopleReviews} alt="people review img" aria-hidden='true' />

					<div className={styles.descrTitle}>
						<h3>Ирина <span>г. Москва</span></h3>
						<time dateTime="2017-03-26">26 Марта 2017</time>
					</div>
					<p>Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</p>
				</article>

				<article className={styles.descr}>
				<img className={styles.hasImage} src={peopleReviews} alt="people review img" aria-hidden='true' />

					<div className={styles.descrTitle}>
						<h3>Ирина <span>г. Москва</span></h3>
						<time dateTime="2017-03-26">26 Марта 2017</time>
					</div>
					<p>Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</p>
				</article>

				<article className={styles.descr}>
				<img className={styles.hasImage} src={peopleReviews} alt="people review img" aria-hidden='true' />

					<div className={styles.descrTitle}>
						<h3>Ирина <span>г. Москва</span></h3>
						<time dateTime="2017-03-26">26 Марта 2017</time>
					</div>
					<p>Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</p>
				</article>

				<article className={styles.descr}>
				<img className={styles.hasImage} src={peopleReviews} alt="people review img" aria-hidden='true' />

					<div className={styles.descrTitle}>
						<h3>Ирина <span>г. Москва</span></h3>
						<time dateTime="2017-03-26">26 Марта 2017</time>
					</div>
					<p>Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</p>
				</article>


			</div>


			<a className={styles.clientsShowAllBtn} href="/">
				СМОТРЕТЬ ВСе
			</a>
		</section>
	)
}

export default ClientsReviews