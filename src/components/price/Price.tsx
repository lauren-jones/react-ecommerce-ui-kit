import React from "react";
import './price.css';

export interface PriceProps {
    /**
   * Current price in GBP (including any active discounts)
   */
  currentPrice: number,
      /**
   * Price before discount
   */
  originalPrice: number,
    /**
   * Is the price discounted?
   */
  onSale: boolean,
}

export const Price = ({currentPrice, originalPrice, onSale = false}: PriceProps) => {

    if (onSale) {
        return (
            <div className="Price-container">
                <p className="Price-full">£{currentPrice.toFixed(2)}</p>
                <p className="Price-discounted">£{originalPrice.toFixed(2)}</p>
            </div>)
    } else {
        return (<p className="Price-full">£{currentPrice.toFixed(2)}</p>)
    }
}