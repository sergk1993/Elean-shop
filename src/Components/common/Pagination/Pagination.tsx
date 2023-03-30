import React, { useState } from 'react'
import styles from './Pagination.module.css';

// type Props = {
// 	pageSize: number,
// 	quantityUsers: number,
// }

const Pagination = ({ props, currentPage, portionSize = 5 }: any) => {

	let [portionNumber, setPortionNumber] = useState(1);

	let pagesCount = Math.ceil(props.quantityUsers / props.pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / props.pageSize);


	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;




	return (
		<section className={styles.pagination}>
			<div className='container'>

				{
					portionNumber > 1 ? <button className={styles.paginationLeft} onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}>PREV</button>
						:
						<button className={styles.paginationLeft} disabled>PREV</button>
				}

				{
					pages.filter((e: number) => e >= leftPortionPageNumber && e <= rightPortionPageNumber)
						.map((item: number, i) => {
							debugger
							return (
								<div className={styles.paginationBtnWrapper}>
									<span className={props.currentPage === item ? styles.activeCurrentBtn : styles.paginationBtn } key={i} onClick={() =>	currentPage(item)}>{item}</span>
								</div>
							)
						})
				}

				{portionCount > portionNumber &&
					<button className={styles.paginationRight} onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}>Next</button>
				}

			</div>
		</section>
	)
}

export default Pagination