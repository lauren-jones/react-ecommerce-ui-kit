import React, {useState} from "react";
import './product-counter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export interface ProductCounterProps {
             /**
   * Quantity
   */
    quantity: number,
}

export const ProductCounter = ({quantity}: ProductCounterProps) => {

    const [counter, setCounter] = useState(quantity);

    function handleIncrease (event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setCounter(counter + 1);
    }

    function handleDecrease (event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();

        if (counter === 1) {
            setCounter(1);
        } else {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="product-counter">
            <a onClick={handleDecrease} className="decrease" >
                <div className="counter-link"><FontAwesomeIcon icon={faMinus} /></div>
            </a>
            <span className="counter-number">{counter}</span>
            <a className="increase" onClick={handleIncrease}>
                <div className="counter-link"><FontAwesomeIcon icon={faPlus} /></div>
            </a>
        </div>
    )
}