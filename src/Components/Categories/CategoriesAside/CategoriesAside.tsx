import React, { useMemo, useState } from 'react';
import { redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CategoryAsideType } from '../../../Redux/Categories-reducer';
import styles from './CategoriesAside.module.css';


type AsidePropsType = {
	categoryAside: CategoryAsideType,
	getPropertyAsideText: (path: string, title: string) => void,
}

const CategoriesAside = (props: AsidePropsType): JSX.Element => {
	/* useState для active в className */
	let [activeList, setActiveList] = useState<string>('все товары')
	
	/* получил массив списка бокового меню */
	let { categoryAsideUpList } = props.categoryAside.categoryAsideCollections;

	return (
		<aside className={styles.categoriesAside}>


			<ul className={styles.categoryAsideUpList}>

				{
					/* перебираю массив переключалок бокового меню */
					categoryAsideUpList.map((items) => {

						/* получаю из массива переключалок бокового меню имя категории */
						let categoryName = items.categoryName.toLowerCase()
						/* получаю из массива переключалок бокового меню имя пути */
						let categoryPathName = items.path.toLowerCase()
						
						return (
							<li className={styles.categoryAsideUpLists} key={items.id}>
								<button className={ categoryName === activeList  ? styles.categoryAsideActive : ''}

									onClick={(item) => {
										/* прокинул функцию. 1-параметр, имена из массива бокового меню 2-ой получаю нажимаемое имя*/
										props.getPropertyAsideText(categoryPathName, item.currentTarget.innerText)

										/* получаю кликнутое имя для className active стилизации */
										setActiveList(item.currentTarget.innerText.toLowerCase())
										
									}}
								>
									{items.categoryName}
								</button>
							</li>

						);
					})
				}


			</ul>

		</aside>
	)
}






export default CategoriesAside;