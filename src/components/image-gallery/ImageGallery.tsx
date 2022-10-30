import React, {useState} from "react";
import './image-gallery.css';

export type Images = [
    image1: string,
    image2: string,
]

export interface ImageGalleryProps {
            /**
   * Thumbnail product images
   */
    images: Images,
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
            </div>
        </div>
    )
}