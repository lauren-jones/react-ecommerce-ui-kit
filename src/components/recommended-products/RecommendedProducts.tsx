import React from 'react';
import "./recommended-products.css";
import { ProductCard, product } from '../product-card/ProductCard';

export interface RecommendedProductsProps {
    products: [product, product, product],
}

export const RecommendedProducts = ({products}: RecommendedProductsProps) => {
return (
    <div className="recommended-products-container">
        <h2>you may also like</h2>
        <div className="cards-container">
            {products.map(function (card, index) {
                return (
                    <div className="card-container" key={index}>
                        <ProductCard product={card}/>
                    </div>
                )
            })}
        </div>
    </div>
)
};