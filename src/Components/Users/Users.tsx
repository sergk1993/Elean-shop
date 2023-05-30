import styles from './Users.module.css';
import emptyImg from '../../assets/img/emptyUser/emptyUser.png'
import Pagination from '../common/Pagination/Pagination';
import { UserType } from '../../types/types'
import { Link } from 'react-router-dom';


type Props = {
	children?: React.ReactNode;
	users: Array<UserType>,
	subscribeUser: (id: number) => void
	unsubscribe: (id: number) => void,
	quantityUsers: number,
	pageSize: number,
	portionSize: number,
	onPageChange: (numberPage: number) => void,
	isDisabledBtn: Array<any>,
	profileDataTH: (numberPage: number | null) => void,
	profileStatusTH: (numberPage: number | null) => void,
}



const Users = (props: Props): JSX.Element => {

	return (
		<>
			<section className={styles.users}>
				<div className={styles.usersWrapperCards}>
					{props.users.map((items: UserType) => {
						return (
							<article className={styles.usersCard} key={items.id}>
								<div className={styles.userCardInfo}>

									<Link className={styles.userCardInfoUserLinkImg} onClick={() => {
										props.profileDataTH(items.id)
										props.profileStatusTH(items.id)
									}}
										to={`/profile/${items.id}`}>

										<img src={items.photos.small ? items.photos.small : emptyImg} alt="User Img" />
									</Link>

									<h3>{items.name}</h3>
								</div>

								{
									items.followed ? <button disabled={props.isDisabledBtn.some(id => id === items.id)} onClick={() => props.unsubscribe(items.id)}>отписаться </button> : <button disabled={props.isDisabledBtn.some(id => id === items.id)} onClick={() => props.subscribeUser(items.id)}>подписаться</button>
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
					totalCount={props.quantityUsers}
					pageSize={props.pageSize}
				/>
			}
		</>
	)
}


export default Users