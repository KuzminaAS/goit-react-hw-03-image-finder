import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ list, openModal, children }) => {
    const listElements = list.map((item) => <ImageGalleryItem key={item.id} openModal={openModal} {...item} />)
    return (
        <ul className={styles.ImageGallery}>
            {listElements}
            {children}
       </ul>
    )
};

export default ImageGallery;
