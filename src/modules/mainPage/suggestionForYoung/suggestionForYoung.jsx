import React from 'react';
import styles from './suggestionForYoung.module.css';
import imagesData from "./imagesData/imagesData";

function SuggestionForYoung() {
	return (
		<div className={styles.suggestionsForYoungContainer}>
			<div>
				<h2 className={styles.suggestionsForYoungLabel}>Young’s Favourite</h2>
			</div>
			<div className={styles.suggestionContainer}>
				{
					imagesData.map((item, index) => (
						<div key={index} className={styles.imageContainer}>
							<img src={item.image} alt=""/>
							<div className={styles.descriptionContainer}>
								<div>
									<strong>{item.text}</strong>
									<div>Explore now!</div>
								</div>
								<div className={styles.arrowDescriptionElement}>
									→
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default SuggestionForYoung;