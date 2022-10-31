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
    handleIncrease?: () => void;
    /**
   * Function to handle decrease in quantity
   */
    handleDecrease?: () => void;
}

export const ProductCounter = ({quantity, handleIncrease, handleDecrease}: ProductCounterProps) => {

    return (
        <div className="product-counter">
            <a onClick={handleDecrease} className="decrease" >
                <div className="counter-link"><FontAwesomeIcon icon={faMinus} /></div>
            </a>
            <span className="counter-number">{quantity}</span>
            <a className="increase" onClick={handleIncrease}>
                <div className="counter-link"><FontAwesomeIcon icon={faPlus} /></div>
            </a>
        </div>
    )
}