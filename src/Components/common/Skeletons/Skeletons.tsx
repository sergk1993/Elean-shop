import React from 'react'
import styles from './Skeletons.module.css'


function Skeletons() {
	return (
		<div className='container'>
			<section className={styles.skeletons}>
				{
					[...new Array(12)].map((_, i) => {
						return (
							<article className={styles.skeletonCard} key={i}>
								<div className={styles.skeletonInfo}>
									<div className={styles.skeletonInfoImg}></div>

									<h3></h3>
								</div>

								<button></button>
							</article>
						)
					})
				}
			</section>
		</div>
	)
}

export default Skeletons