import { url } from 'inspector';
import styles from './ClientsReviews.module.css';
import peopleReviews from '../../../assets//img/clientsReviews/clientReviews.jpg';
import emptyPeopleReviews from '../../../assets//img/clientsReviews/emptyPeopleReviews.svg';
import hidePeopleReviews from '../../../assets//img/clientsReviews/clientsHiddenPicture.svg';
import { Link } from 'react-router-dom';
import { ClientsReviewsInterface } from '../../../types/types';
import { useEffect, useState } from 'react';



type ClientsReviewsType = {
	clientsReviews: Array<ClientsReviewsInterface>
}

function ClientsReviews(props: ClientsReviewsType) {
	const [numCards, setNumCards] = useState(1); // Количество карточек по умолчанию для мобильных устройств

	useEffect(() => {
		const handleResize = () => {
			// Определение количества карточек в зависимости от ширины экрана
			if (window.innerWidth >= 700) {
				setNumCards(4); // Для ширины экрана 700px и больше - 4 карточки
			} else {
				setNumCards(1); // Для меньших ширин экрана - 1 карточка
			}
		};

		// Установка начального значения количества карточек при загрузке страницы
		handleResize();

		// Добавление обработчика события изменения размера окна
		window.addEventListener('resize', handleResize);

		// Очистка обработчика при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	return (
		<section className={styles.clientsReviews}>

			<div className={styles.clientsReviewsWrapper}>
				{
					props.clientsReviews.slice(0, numCards).map((e: any) => {
						return (
							<article className={styles.descr} key={e.id}>

								<div className={styles.clientsImageWrapper}>
									<img className={styles.clientsImage} src={e.img ? e.img : emptyPeopleReviews} alt="" />
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
			<Link className={styles.clientsShowAllBtn} to="">
				СМОТРЕТЬ ВСе
			</Link>
		</section>
	)
}



export default ClientsReviews