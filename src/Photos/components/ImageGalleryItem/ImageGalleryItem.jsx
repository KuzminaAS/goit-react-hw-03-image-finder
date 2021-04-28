import React from 'react';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, largeImageURL, openModal}) => {
    return (
        <li className={styles.ImageGalleryItem} onClick={()=>openModal(largeImageURL)}>
            <img src={webformatURL} alt="" className={styles.ImageGalleryItem_image} />
        </li>
    )
};

export default ImageGalleryItem;
