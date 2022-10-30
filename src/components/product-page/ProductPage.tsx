import React from "react";
import './product-page.css';
import { ImageGallery } from "../image-gallery/ImageGallery";
import { ProductCounter } from "../product-counter/ProductCounter";
import { Button } from "../buttons/Button";
import { Price } from "../price/Price";
import { Rating } from "../rating/Rating";
import { Accordion } from "../accordion/Accordion";
import { product } from "../product-card/ProductCard";

export interface ProductPageProps {
    product: product,
      /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const ProductPage = ({product, onClick}: ProductPageProps) => {
    return (
        <div className="ProductPage">
            <div className="ProductPage-images"><ImageGallery images={product.images}/></div>
            <div className="ProductPage-info">
                <h2 className="ProductPage-product-title">{product.name}</h2>
                <Rating stars={5}/>
                <div className="ProductPage-product-price"><Price currentPrice={product.currentPrice} originalPrice={product.originalPrice} onSale={product.onSale}/></div>
                <div className="ProductPage-description">{product.description}</div>
                <div className="ProductPage-buttons">
                    <div className="ProductPage-product-counter"><ProductCounter quantity={1}/></div>
                    <div className="ProductPage-button"><Button primary={true} label="Add To Basket" onClick={onClick}/></div>
                </div>
                <div className="ProductPage-accordion"><Accordion additionalInfo={product.additionalInfo}/></div>
            </div>
        </div>
    )
}