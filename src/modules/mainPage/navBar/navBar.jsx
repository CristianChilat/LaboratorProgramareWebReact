import styles from './navBar.module.css'
import  Logo from './images/navBarLogo.png'

function NavBar() {
	return (
		<nav className={styles.nav}>
			<div>
				<img src={Logo} alt=""/>
			</div>
			<div className={styles.buttonSide}>
				<div>Catalogue</div>
				<div>Fashion</div>
				<div>Favourite</div>
				<div>Lifestyle</div>
				<div className={styles.signUpButton}>Sign Up</div>
			</div>
		</nav>
	)
}

export default NavBar;