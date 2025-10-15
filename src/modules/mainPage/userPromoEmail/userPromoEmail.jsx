import styles from './userPromoEmail.module.css';

function UserPromoEmail() {
	return (
		<div className={styles.userPromoEmailContainer}>
			<h2 className={styles.userPromoEmailLabel}>
				JOIN SHOPPING COMMUNITY TO <br/>
				GET MONTHLY PROMO
			</h2>
			<div className={styles.userInputSuggestion}>
				Type your email down below and be young wild generation
			</div>

			<div className={styles.userInputContainer}>
				<form action="#">
					<input name="User email" className={styles.userEmailInput} type="email" placeholder="Add your email here" />
				</form>
				<button className={styles.sendEmailButton}>
					<strong>SEND</strong>
				</button>
			</div>
		</div>
	)
}

export default UserPromoEmail;