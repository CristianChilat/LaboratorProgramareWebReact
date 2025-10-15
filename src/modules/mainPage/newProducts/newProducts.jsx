import React from 'react';
import styles from './newProducts.module.css';
import imagesData from "./imagesData/imagesData";
import firstImage from './images/firstNewProduct.png'
import secondImage from './images/secondNewProduct.png'
import thirdImage from './images/thirdNewProduct.png'

function NewProducts() {
	return (
		<div className={styles.newProductsContainer}>
			<strong className={styles.sectionLabel}>
				NEW ARRIVALS
			</strong>
			<div className={styles.productsImagesContainer}>
				<div className={styles.imageContainer}>
					<img src={firstImage} alt=""/>
					<div className={styles.descriptionContainer}>
						<div>
							<strong>Hoodies & Sweetshirt</strong>
							<div>Explore now!</div>
						</div>
						<div className={styles.arrowDescriptionElement}>
							→
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<img src={secondImage} alt=""/>
					<div className={styles.descriptionContainer}>
						<div>
							<strong>Coats & Parkas</strong>
							<div>Explore now!</div>
						</div>
						<div className={styles.arrowDescriptionElement}>
							→
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<img src={thirdImage} alt=""/>
					<div className={styles.descriptionContainer}>
						<div>
							<strong>Tees & T-Shirt</strong>
							<div>Explore now!</div>
						</div>
						<div className={styles.arrowDescriptionElement}>
							→
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProducts;