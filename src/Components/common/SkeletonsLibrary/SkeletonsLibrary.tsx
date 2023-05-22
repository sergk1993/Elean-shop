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
								<div className={styles.cardSkeletonLibTopImg}>
									<Skeleton width={270} height={270} />
								</div>
								<div className={styles.cardSkeletonLibTitleBox}>
								<Skeleton width={200} height={25} />
								<Skeleton width={30} height={30} />

								</div>
								<div className={styles.cardSkeletonLibBottomPrice}>
								<Skeleton width={70} height={20} />

								</div>
							</div>
						);

					})
			}

		</>
	);


}

export default SkeletonsLibrary