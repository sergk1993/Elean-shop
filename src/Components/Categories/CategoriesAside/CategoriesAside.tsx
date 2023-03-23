import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CategoryAside } from '../../../Redux/Categories-reducer';
import styles from './CategoriesAside.module.css';


type AsidePropsType = {
	state: CategoryAside,
	findTitle: (name: string) => void
}

const CategoriesAside = (props: AsidePropsType): JSX.Element => {

	let { categoryAsideUpList, } = props.state;






	return (
		<aside className={styles.categoriesAside}>
			
 
			<ul className={styles.categoryAsideUpList}>
				{categoryAsideUpList.map((items) => {
					return (
						<li className={styles.categoryAsideUpLists} key={items.id}>
							<NavLink
								className={({ isActive }) => (isActive ? styles.active : '')}
								to={items.path.toLowerCase()}
								onClick={(e) => props.findTitle(e.currentTarget.innerText)}
								>
								{items.categoryName}
							</NavLink>
						</li>

					);
				})
				}


			</ul> 


		</aside>
	)
}






export default CategoriesAside;