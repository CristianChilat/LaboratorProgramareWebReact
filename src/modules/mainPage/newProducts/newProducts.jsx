import React from 'react';
import styles from './newProducts.module.css';
import imagesData from "./imagesData/imagesData";

function NewProducts() {
    return (
        <div className={styles.newProductsContainer}>
            <strong className={styles.sectionLabel}>
                NEW ARRIVALS
            </strong>
            <div className={styles.productsImagesContainer}>
                {imagesData.map((item, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={item.image} alt=""/>
                        <div className={styles.descriptionContainer}>
                            <div>
                                <strong>{item.name}</strong>
                                <div>Explore now!</div>
                            </div>
                            <div className={styles.arrowDescriptionElement}>
                                →
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewProducts;