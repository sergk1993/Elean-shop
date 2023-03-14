import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { InitialStateType } from '../../Redux/Footer-reducer';
import { RootType } from '../../Redux/redux-store';
import SocialMedia from '../SocialMedia/SocialMedia';
import Title from '../Title/Title';
import styles from './Footer.module.css';
import FormFooter from './FormFooter/FormFooter';

type FooterPageType = {
	footerPage: InitialStateType
}

function Footer(props: FooterPageType): JSX.Element {



	return (
		<footer className={styles.footer}>

			<div >
				<div className={styles.footerNavigate}>
					<div className={styles.footerWidthTitle}>
						<Title />
					</div>
					<nav className={styles.footerNav}>
						<ol className={styles.footerNavList}>

							{
								props.footerPage.footerNav.map(e => {
									return (
										<li key={e.id}><Link to="/">{e.link}</Link></li>
									);
								})
							}

						</ol>
					</nav>
				</div>


				<div className={styles.feedback}>

					{
						props.footerPage.contactsPhone.map(e => {
							return (
								<div className={styles.contactsPhoneWrapper} key={e.id}>
									<a className={styles.contactsPhone} href={`tel:${e.phoneNumber}`}>{e.phoneNumberText}</a>
									<a href={`tel:${e.whatsappNumber}`}>{e.whatsappNumberText}</a>
								</div>
							);
						})
					}

					{
						props.footerPage.contactsAddress.map(e => {
							return (
								<address className={styles.contactsAddress} key={e.id}>
									<p className={styles.contactsAddressTitle}>	{e.address} </p>
									{e.location}
								</address>
							);
						})
					}


					{
						props.footerPage.workTimeBox.map(e => {
							return (
								<div className={styles.workTime} key={e.id}>
									<p className={styles.workTimeTitle}>{e.workTime} </p>
									<p>{e.workTimeText}</p>
								</div>
							);
						})
					}
				</div>

				<div className={styles.socialLink}>
					

					{
						props.footerPage.socialLinkBox.map(e => {
							return (
								<a className={styles.socialLinkEmail} 
								href={e.socialLink} key={e.id}>{e.socialLinkText}
								</a>
							);
						})
					}

					<div className={styles.socialMarginLeft}>
						<SocialMedia />
					</div>
				</div>

			</div>
			<div className={styles.form_left}>
				<FormFooter />
			</div>

		</footer>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		footerPage: state.footerPage
	}
}


export default connect(mapStateToProps)(Footer)