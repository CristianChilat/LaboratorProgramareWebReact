import styles from './introElement.module.css'
import Woman from './images/main.png';

function IntroElement() {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<h1 className={styles.elementHeader}>
					LET’S <br/>
					EXPLORE <br/>
					UNIQUE <br/>
					CLOTHES. <br/>
				</h1>
				<div className={styles.secondaryText}>
					Live for Influential and Innovative fashion!
				</div>
				<div className={styles.shopButton}>
					Shop Now
				</div>
			</div>
			<img className={styles.womanImage} src={Woman} alt=""/>
		</div>
	)
}

export default IntroElement;