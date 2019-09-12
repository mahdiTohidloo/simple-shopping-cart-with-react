import React, {useContext} from 'react';
import {CartContext} from "../../store/cart";

const CartProduct = ({data, index}) => {
	// cart context to handle product data
	const context = useContext(CartContext);


	return (
		<div className="Cart-product-item">
			{/* title */}
			<span className="title">
				<span className="index-number">{index}</span>
				<span className="Ellipsis">{data.title}</span>
			</span>

			{/* price */}
			<span className="price">
				{data.price * data.count}
				&nbsp;تومان
			</span>

			{/* counting section */}
			<span className="counting">
				<i onClick={() => context.incrementProductCount(data)} className="material-icons">add</i>
				<span>{data.count}</span>
				<i onClick={() => context.decrementProductCount(data)} className="material-icons">remove</i>
			</span>
		</div>
	);
};


export default CartProduct;