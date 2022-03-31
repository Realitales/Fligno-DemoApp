import React from "react";
import { motion } from "framer-motion";
import StyledCheckout from "./StyledCheckout";

export default function Checkout(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledCheckout>
        {props.cart.cartProduct.length === 0 ? (
          ""
        ) : (
          <h1 id="total-price">Total Price: Php {props.cart.totalPrice},00</h1>
        )}

        <div className="checkout-content">
          {props.cart.cartProduct.map((product) => {
            return (
              <div className="product-container" key={product.itemid}>
                <div className="product-info">
                  <img src={product.itemimg} alt="" />
                  <div className="product-desc">
                    <h1>{product.itemname}</h1>

                    <p>Quantity : {product.quantity}</p>
                    <button
                      id="remove-item-btn"
                      onClick={() =>
                        props.setCart((prev) => {
                          return {
                            ...prev,
                            cartProduct: prev.cartProduct.filter((item) => {
                              return item.itemid !== product.itemid;
                            }),
                          };
                        })
                      }
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {props.cart.cartProduct.length === 0 ? (
            <span id="no-item">There are no currently no items.</span>
          ) : (
            <div className="user-finalbtn">
              <button className="checkout-btn">Checkout</button>
              <button
                className="clear-cart"
                onClick={() => {
                  props.setCart((prev) => {
                    return { cartProduct: [], totalQuantity: 0, totalPrice: 0 };
                  });
                }}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </StyledCheckout>
    </motion.div>
  );
}
