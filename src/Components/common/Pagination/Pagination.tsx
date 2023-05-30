import React, { useMemo, useState } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

type PaginationType = {
	pageSize: number,
	onPageChange: (firstNumber: number) => void,
	totalCount: number,
}



const Pagination: React.FC<PaginationType> = (props) => {
	const { totalCount, pageSize } = props;
	/* создал массив с общим количеством пользователей */
	let totalUsers: number[] = [];
	for (let i = 1; i <= totalCount; i++) {
		totalUsers.push(i)
	}

	/* разделил массив всех пользователей на количество карточек */
	const pageCount = Math.ceil(totalUsers.length / pageSize);


	const handlePageClick = (even: { selected: number }) => {
		let { selected } = even;
		props.onPageChange(selected + 1)
	};

	return (
		<>

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				containerClassName={styles.paginationBtnWrapper}
				pageClassName={styles.paginationBtnWrapperLists}
				previousClassName={styles.paginationLeft}
				nextClassName={styles.paginationRight}
				breakClassName={styles.paginationPoints}
				breakLinkClassName="page-link"
				activeClassName={styles.activeCurrentBtn}
				disabledClassName={styles.paginationDisabled}
			/>
		</>
	);
}

export default Pagination; 
