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
    /**
   * Unique identifier
   */
  key: product["id"],
      /**
   * Product
   */
  product: product,
      /**
   * Function to handle adding items to cart
   */
  AddToCart?: () => void;
        /**
   * Function to handle quantity increase
   */
  HandleIncrease?: () => void;
          /**
   * Function to handle quantity decrease
   */
  HandleDecrease?: () => void;
          /**
   * Product quantity
   */
  quantity: number,
}

export const ProductPage = ({product, AddToCart, HandleIncrease, HandleDecrease, quantity, key}: ProductPageProps) => {

    return (
        <div className="ProductPage" key={key}>
            <div className="ProductPage-images"><ImageGallery images={product.images}/></div>
            <div className="ProductPage-info">
                <h2 className="ProductPage-product-title">{product.name}</h2>
                <Rating stars={product.stars}/>
                <div className="ProductPage-product-price"><Price currentPrice={product.currentPrice} originalPrice={product.originalPrice} onSale={product.onSale}/></div>
                <div className="ProductPage-description">{product.description}</div>
                <div className="ProductPage-buttons">
                    <div className="ProductPage-product-counter"><ProductCounter HandleIncrease={HandleIncrease} HandleDecrease={HandleDecrease} quantity={quantity}/></div>
                    <div className="ProductPage-button"><Button primary={true} label="Add To Basket" onClick={AddToCart}/></div>
                </div>
                <div className="ProductPage-accordion"><Accordion additionalInfo={product.additionalInfo}/></div>
            </div>
        </div>
    )
}