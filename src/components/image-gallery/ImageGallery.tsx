import React, {useState} from "react";
import './image-gallery.css';

export interface ImageGalleryProps {
            /**
   * Thumbnail product images
   */
    images: [string, string, string],
}

export const ImageGallery = ({images}: ImageGalleryProps) => {

    const [image, setImage] = useState(images[0]);

    const handleClick = (image: string) => {
        setImage(image);
    }

    return (
        <div className="image-gallery">
            <img src={image} className="main-image" alt=""/>
            <div className="thumbnail-wrapper">
                <a onClick={() => handleClick(images[0])}><img src={images[0]} className="thumbnail" alt=""/></a>
                <a onClick={() => handleClick(images[1])}><img src={images[1]} className="thumbnail" alt=""/></a>
                <a onClick={() => handleClick(images[2])}><img src={images[2]} className="thumbnail" alt=""/></a>
            </div>
        </div>
    )
}