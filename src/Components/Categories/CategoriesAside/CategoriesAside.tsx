import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CategoryAsideType } from '../../../Redux/Categories-reducer';
import styles from './CategoriesAside.module.css';


type AsidePropsType = {
	categoryAside: CategoryAsideType,
	findTitle: (name: string) => void
}

const CategoriesAside = (props: AsidePropsType): JSX.Element => {
	
	let { categoryAsideUpList } = props.categoryAside.categoryAsideCollections;






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