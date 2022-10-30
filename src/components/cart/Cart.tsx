import React, { useState } from "react";
import './cart.css';
import { ProductCounter } from "../product-counter/ProductCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Price } from '../price/Price';
import { Button } from '../buttons/Button';
import { product } from '../product-card/ProductCard';

export type cartProducts = {product: product, quantity: number}[];

export interface CartProps {
             /**
   * Array of products and quantities in the cart
   */
    cartProducts: cartProducts,
      /**
   * Click handler for update cart
   */
  handleUpdate?: () => void;
        /**
   * Click handler for delete cart item
   */
  handleDelete?: () => void;
          /**
   * Click handler for go to checkout
   */
  toCheckout?: () => void;
}

export const Cart = ({cartProducts, handleUpdate, handleDelete, toCheckout}: CartProps) => {

    const cartItemTotals: number[] = [];
    cartProducts.forEach(function(cartItem) {
        cartItemTotals.push(cartItem.quantity * cartItem.product.currentPrice);
    })

    const totalAtStart = cartItemTotals.reduce((accumulator, value) => {
    return accumulator + value;
    }, 0);

    const [total] = useState(totalAtStart);

    return (
      <div className="cart">
        <div className='cart-header'>
            <h2>Shopping Cart</h2>
        </div>
        {cartProducts.map(function (cartProduct, index) {
            return (
                <div className='cart-item' key={index}>
                    <div className="cart-item-left">
                        <img src={cartProduct.product.images[0]} className='cart-item-image' alt=""/>
                        <div className="cart-item-info">
                            <h4>{cartProduct.product.name}</h4>
                            <Price onSale={cartProduct.product.onSale} currentPrice={cartProduct.product.currentPrice} originalPrice={cartProduct.product.originalPrice}/>
                            <ProductCounter quantity={2} />
                            
                        </div>
                    </div>
                    <a className="cart-item-delete" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} className="accordion-icon"/></a>
                </div>
            )
        })}
        <div className="cart-summary">
            <div className='cart-summary-links'>
                <a onClick={handleUpdate} className="cart-update">Update cart</a>
                <a href="/" className="continue-shopping">Continue shopping</a>
            </div>
            <div className="cart-summary-subtotal">
                <p>Subtotal</p>
                <p>£{total.toFixed(2)}</p>
            </div>
        </div>
        <Button primary={true} label="Go To Checkout" onClick={toCheckout}/>
      </div>
    )
}