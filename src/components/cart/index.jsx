import React, {useContext, useState} from 'react';
import {CartContext} from "../../store/cart";
import Button from "../forms/button";
import CartProduct from "./product";

const Cart = () => {
	// this state is used to handle show cart details
	const [showCartDetails, changeShowDetailStatus] = useState(false);

	// cart context to handle the cart data
	const context = useContext(CartContext);


	return (
		<div className="Cart">
			<Button
				className={context.data.length === 0 ? 'cart-button Full-width no-data' : 'cart-button Full-width' }
				onClick={() => changeShowDetailStatus(!showCartDetails)}
			>
				<i className="material-icons">shopping_cart</i>
				<span>
					سبد خرید
					&nbsp;({context.data.length})
				</span>
				<i className="material-icons">keyboard_arrow_down</i>
			</Button>
			<div className={showCartDetails ? "details" : "Display-none"}>
				{
					context.data.map((product, index) =>
						<CartProduct
							data={product}
							index={index + 1}
							key={product.id}
						/>
					)
				}
			</div>
		</div>
	);
};


export default Cart;