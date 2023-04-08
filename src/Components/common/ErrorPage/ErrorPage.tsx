import { Link } from 'react-router-dom';
import { useRouteError, useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css'



export function ErrorPage() {
	const error: any = useRouteError();


	return (


		<section id="errorPage">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		<Link to='/'>Назад</Link>
		</section>

	);

}