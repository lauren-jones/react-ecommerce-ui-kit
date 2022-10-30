import React from 'react';
import "./recommended-products.css";
import { ProductCard, product } from '../product-card/ProductCard';

export interface RecommendedProductsProps {
    title: string,
    products: [product, product, product],
}

export const RecommendedProducts = ({products, title}: RecommendedProductsProps) => {
return (
    <div className="recommended-products-container">
        <h2>{title}</h2>
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