import styles from './Users.module.css';
import emptyImg from '../../assets/img/emptyUser/emptyUser.png'
import Pagination from '../common/Pagination/Pagination';
import {UserType} from '../../types/types'


type Props = {
	children?: React.ReactNode;
	users: Array<UserType> | number[],
	subscribeUser: (id: number) => void
	unsubscribe: (id: number) => void,
	quantityUsers: number,
	currentPage: number,
	pageSize: number,
	portionSize: number,
	onPageChange: (numberPage: number) => void
	isDisabledBtn: Array<any>
}



const Users = (props: Props): JSX.Element => {

	return (
		<div className='container'>
			<section className={styles.users}>
				<div className={styles.usersWrapperCards}>
					{props.users.map((items: any) => {

						return (
							<article className={styles.usersCard} key={items.id}>
								<div className={styles.userCardInfo}>
									<img src={items.photos.small ? items.photos.small : emptyImg} alt="User Img" />

									<h3>{items.name}</h3>
								</div>

								{
									items.followed ? <button disabled={props.isDisabledBtn.some(id => id === items.id)} onClick={() => props.unsubscribe(items.id)}>отписаться </button> : <button disabled={props.isDisabledBtn.some(id => id === items.id)}  onClick={() => props.subscribeUser(items.id)}>подписаться</button>
								}
							</article>
						);
					})

					}


				</div>
			</section>
				{
					<Pagination
						onPageChange={props.onPageChange}
						quantityUsers={props.quantityUsers}
						pageSize={props.pageSize}
						currentPage={props.currentPage}
						portionSize={props.pageSize}
					/>
				}
		</div>
	)
}


export default Users