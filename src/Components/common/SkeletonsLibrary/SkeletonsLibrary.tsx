import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SkeletonsLibrary.module.css'


function SkeletonsLibrary({ cards }: any) {
	return (
		<>

			{
				Array(cards)
					.fill(0)
					.map((_, i: any) => {
						return (
							<div className={styles.cardSkeletonLib} key={i}>
								<Skeleton className={styles.cardSkeletonLibTopImg} />

								<div className={styles.cardSkeletonLibTitleBox}>
									<Skeleton className={styles.cardSkeletonTitle} width={200} height={25} />
									<Skeleton className={styles.cardSkeletonTitleBtn} width={30} height={30} />
								</div>

						
									<Skeleton className={styles.cardSkeletonLibBottomPrice} width={70} height={20} />
								
							</div>
						);

					})
			}

		</>
	);


}

export default SkeletonsLibrary