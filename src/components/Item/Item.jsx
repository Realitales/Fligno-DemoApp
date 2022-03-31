import React, { useRef } from "react";
import StyledItem from "./StyledItem";
import { login, useAuth } from "../../firebase";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Item(props) {
  const location = useLocation();
  const { state } = location;
  let [quantityValue, setQuantityValue] = React.useState(1);

  const currentUserFirebase = useAuth();

  const currentUser = currentUserFirebase?.email;

  return (
    <StyledItem>
      <div className="item-content">
        <img
          id="product-image"
          src={state.productinfo.itemimg}
          product="true"
        />
        <h1>{state.productinfo.itemname}</h1>
        <p>Php {state.productinfo.itemprice},00</p>
        <form id="quantity-container">
          <label>Quantity: </label>
          <input
            type="number"
            min="1"
            placeholder="1"
            value={quantityValue}
            onChange={(e) => setQuantityValue(e.target.value)}
          />
        </form>
        <div className="item-btn-container">
          <button
            id="item-addtocart"
            disabled={currentUser === undefined ? true : false}
            onClick={() =>
              props.setCart((prev) => {
                const selectedProduct = prev.cartProduct.filter(
                  (item) => item.itemid === state.productinfo.itemid
                );

                const ProductExist = selectedProduct.length > 0;

                if (ProductExist)
                  return {
                    cartProduct: [
                      ...prev.cartProduct.map((item) => {
                        //Updating the selected product
                        if (item.itemid === state.productinfo.itemid) {
                          return {
                            ...state.productinfo,
                            quantity: item.quantity + Number(quantityValue),
                          };
                        }
                        //Copying the previous cart info.
                        return item;
                      }),
                    ],
                  };

                //Add the product.
                return {
                  ...prev,
                  cartProduct: [
                    ...prev.cartProduct,
                    {
                      ...state.productinfo,
                      quantity: Number(quantityValue),
                    },
                  ],
                };
              })
            }
          >
            <span>Add to cart</span> <img src="./icons/shopping-cart.svg" />
          </button>

          <button id="item-buynow">
            <Link to={currentUser === undefined ? "/login" : "/checkout"}>
              Buy Now{" "}
            </Link>
          </button>
        </div>
      </div>
    </StyledItem>
  );
}
