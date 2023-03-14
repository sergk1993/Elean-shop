import { url } from 'inspector';
import styles from './ClientsReviews.module.css';
import peopleReviews from '../../../assets//img/clientsReviews/clientReviews.jpg';
import emptyPeopleReviews from '../../../assets//img/clientsReviews/emptyPeopleReviews.svg';
import hidePeopleReviews from '../../../assets//img/clientsReviews/clientsHiddenPicture.svg';
import { Link } from 'react-router-dom';
import { ClientsReviewsInterface } from '../../../types/types';



type ClientsReviewsType = {
	clientsReviews: Array<ClientsReviewsInterface>
}

function ClientsReviews(props: ClientsReviewsType) {
	return (
		<section className={styles.clientsReviews}>

			<div className={styles.clientsReviewsWrapper}>
				{
					props.clientsReviews.map((e: any) => {
						return (
							<article className={styles.descr} key={e.id}>

								<div className={styles.clientsImageWrapper}>
									<img className={styles.clientsImage} src={e.img} alt="" />
								</div>
								<div className={styles.descrTitle}>
									<h3>{e.name} <span>{e.city}</span></h3>
									<time dateTime={e.dataTime}>{e.data}</time>
								</div>
								<p>{e.textInfo}</p>
							</article>
						)
					}
					)
				}

			</div>
			<Link className={styles.clientsShowAllBtn} to="/reviews">
				СМОТРЕТЬ ВСе
			</Link>
		</section>
	)
}



export default ClientsReviews