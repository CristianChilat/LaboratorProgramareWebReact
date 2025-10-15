import styles from './footer.module.css';
import SocialMediaImages from './imagesData/imagesData'

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.leftSide}>
				<h2>
					FASHION
				</h2>
				<div className={styles.footerQuote}>
					Complete your style with awesome <br/>
					clothes from us.
				</div>
				<div className={styles.socialMediaContainer}>
					{SocialMediaImages.map((image) => (
						<div className={styles.socialMediaImageContainer}>
							<img src={image} alt=""/>
						</div>
					))}
				</div>
			</div>
			<div className={styles.rightSide}>
				<div>
					<div>Company</div>
					<div>About</div>
					<div>Contact us</div>
					<div>Support</div>
					<div>Careers</div>
				</div>
				<div>
					<div>Quick Link</div>
					<div>Share Location</div>
					<div>Orders Tracking</div>
					<div>Size Guide</div>
					<div>FAQs</div>
				</div>
				<div>
					<div>Legal</div>
					<div>Terms & conditions</div>
					<div>Privacy Policy</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;