import styles from './Users.module.css';
import '../../index.css'
import emptyImg from '../../assets/img/emptyUser/emptyUser.png'
import { UserInitialType } from '../../Redux/Users-reducer';


type Props = {
	children?: React.ReactNode;
	users: UserInitialType,
	isLoad: boolean
};

const Users = (props: Props): JSX.Element => {

	
	return (
		<div className='container'>
			<section className={styles.users}>
				<div className={styles.usersWrapperCards}>



					{props.users.users.map((items: any) => {
						return (
							<article className={styles.usersCard} key={items.id}>
								<div className={styles.userCardInfo}>
									<img src={items.photos.small ? items.photos.small : emptyImg} alt="User Img" />

									<h3>{items.name}</h3>
								</div>

								<button>подписаться</button>
							</article>
						);
					})

					}


				</div>
			</section>
		</div>
	)
}



export default Users