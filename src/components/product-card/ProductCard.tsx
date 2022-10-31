import React from 'react';
import "./product-card.css";
import { Price } from '../price/Price';
import { Link } from "react-router-dom";
import { Images } from '../image-gallery';

export type product = {
          /**
   * Product id
   */
  id: number,
            /**
   * Product category
   */
  category: string,
        /**
   * Array of product images
   */
  images: Images;
    /**
   * Product title
   */
  name: string;
      /**
   * Product description
   */
  description: string;
      /**
   * Product rating (out of 5)
   */
  stars: 0 | 1 | 2 | 3 | 4 | 5;
    /**
   * Is the product on sale?
   */
  onSale: boolean;
    /**
   * Original product price
   */
  originalPrice: number;
      /**
   * Current product price (after discounts)
   */
  currentPrice: number;
  /**
   * Link to product page
   */
  url: string;
    /**
   * Additional info
   */
  additionalInfo: [{title: string, content: string}, {title: string, content: string}, {title: string, content: string}];
}

export interface ProductCardProps {
    product: product,
}

export const ProductCard = ({product}: ProductCardProps) => {
return (
   <Link to={product.url} className="ProductCard-link">
      <div className="ProductCard">
        <div className='ProductCard-image'>
          <img src={product.images[0]} className='image-1'/>
          <img src={product.images[1]} className='image-2'/>
        </div>
        <h3 className="ProductCard-product-name">{product.name}</h3>
        <Price currentPrice={product.currentPrice} originalPrice={product.originalPrice} onSale={product.onSale}/>
      </div>
   </Link>
)
};

