import React from "react";
import './product-counter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export interface ProductCounterProps {
    /**
   * Quantity
   */
    quantity: number,
    /**
   * Function to handle increase in quantity
   */
    handleQuantity?: () => void;
}

export const ProductCounter = ({quantity, handleQuantity}: ProductCounterProps) => {

    return (
        <div className="product-counter">
            <a onClick={handleQuantity} className="decrease" >
                <div className="counter-link"><FontAwesomeIcon icon={faMinus} /></div>
            </a>
            <span className="counter-number">{quantity}</span>
            <a className="increase" onClick={handleQuantity}>
                <div className="counter-link"><FontAwesomeIcon icon={faPlus} /></div>
            </a>
        </div>
    )
}