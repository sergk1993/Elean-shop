import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import { NavCategoryType } from '../../types/types';
import styles from './Nav.module.css'


type NavType = {
	nav: NavCategoryType
}

type NavOpenType = {

}
const handleChange = (e: MouseEventInit) => {

}

function Nav(props:NavType): JSX.Element  {

	let [open, setOpen] = useState<Boolean>(false)

	const showDropDown = () => {
		setOpen(true);
		
	}

	const hideDropDown = () => {
		setOpen(false);
	}



	let findCategoryName = props.nav.headerNavPage.map((name) => {
		let letterCase = name.text.toString().toLowerCase();
	
		if (letterCase === 'покупателям') {
			return (
				<li onMouseEnter={showDropDown} onMouseLeave={hideDropDown} key={name.id}>
					<button >ПОКУПАТЕлЯМ</button>
					{open && <ol className={styles.navDropDown} >
						{props.nav.dropDownMenu.map((e) => {
							return (
								<li key={e.id}>
									<a href="/">
										{e.name}
									</a>
								</li>
							);
						})}
					</ol>}
				</li>
			);
		}


		return (
			<li key={name.id}>
				<a href="/catalog">{name.text}</a>
			</li>
		);
	});



	return (
		<nav className={styles.nav} aria-label='navigation'>
			<ol className={styles.list}>
				{
					findCategoryName
				}
			</ol>

		</nav>
	)
}



function mapStateToProps(store:RootType) {
	return {
		nav: store.navCategory
	}
}


export default connect(mapStateToProps)(Nav);

