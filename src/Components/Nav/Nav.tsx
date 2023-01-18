
import React from 'react';
import styles from './Nav.module.css'

function Nav():JSX.Element {
	return (
		<nav className={styles.nav} aria-label='navigation'>
			<ol className={styles.list}>
				<li>
					<a href="/" >Навигация</a>
				</li>
				<li>
					<a href="/">КАТЕГОРИИ</a>
				</li>
				<li>
					<a href="/">НАШИ КОЛЛЕКЦИИ</a>
				</li>
				<li>
					<a href="/">ПОКУПАТЕЛЯМ</a>
				</li>
				<li>
					<a href="/">О БРЕНДЕ</a>
				</li>
				<li>
					<a href="/">ШОУРУМ</a>
				</li>
				<li>
					<a href="/">КОНТАКТЫ</a>
				</li>
			</ol>

		</nav>
	)
}



export default Nav;