import styles from './brandsShowUp.module.css';
import productImages from './imagesData/imagesData'

function BrandsShowUp() {
	return (
		<div className={styles.container}>
			{productImages.map((image, index) => (
				<img key={index} src={image} alt=""/>
			))}
		</div>
	)
}

export default BrandsShowUp;