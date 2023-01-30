import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia';
import Title from '../Title/Title';
import styles from './Footer.module.css';



function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>

			<div className={styles.footerWrapper}>

				<div className={styles.footerNavigate}>
					<div className={styles.footerWidthTitle}>
						<Title />
					</div>
					<nav className={styles.footerNav}>
						<ol className={styles.footerNavList}>
							<li><a href="/"> доставка</a></li>
							<li><a href="/"> оплата</a></li>
							<li><a href="/"> возврат</a></li>
							<li><a href="/"> размерная таблица</a></li>
							<li><a href="/"> примерка</a></li>
							<li><a href="/"> контакты</a></li>
						</ol>
					</nav>
				</div>


				<div className={styles.feedback}>

					<div className={styles.contacts}>
						<a className={styles.contactsPhone} href="tel:84951501477">ТЕЛ.: 8 (495) 150-14-77</a>
						<a href="tel:+79777282738">WHATSAPP: +7 (977) 728-27-38</a>
					</div>

					<address className={styles.contactsAddress}>
						<p className={styles.contactsAddressTitle}>	АДРЕС: </p>
						г. Москва, Новая площадь 8, стр.2, 5 этаж
					</address>

					<div className={styles.workTime}>
						<p className={styles.workTimeTitle}>РЕЖИМ РАБОТЫ: </p>
						<p>с 9.00 до 21.00 шоурум: с 12.00 до 21.00</p>
					</div>
				</div>

				<div className={styles.socialLink}>
					<a className={styles.socialLinkEmail} href="mailto:info@elenaboutique.ru">EMAIL: info@elenaboutique.ru
					</a>

					<div className={styles.socialMarginLeft}>
						<SocialMedia />
					</div>
				</div>

			</div>

			<form className={styles.form}>
				<input className={styles.formStyleInput} type="text" placeholder='ИМЯ' required/>
				<input className={styles.formStyleInput} type="text" placeholder='E-mail' required/>

				<label className={styles.formCheckboxWrapper}>
					<input className={styles.formCheck} type="checkbox" required/>
					<span className={styles.formCheckPartText}>Я согласен </span> с политикой конфиденциальности
					<span className={styles.formCheckbox}></span>
				</label>

				<button className={styles.formBtnSubscribe}>ПОДПИСАТЬСя</button>
			</form>
		</footer>
	)
}

export default Footer