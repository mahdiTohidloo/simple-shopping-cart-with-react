import React, {useContext} 	from 'react';
import Button 	            from '../forms/button';
import {CartContext}        from "../../store/cart";

const ProductBox = ({ data }) => {
	const context = useContext(CartContext);

	const productImages = [
		require('../../assets/images/product1.jpg'),
		require('../../assets/images/product2.jpg'),
		require('../../assets/images/product3.jpg'),
	];
	console.log(context.data);
	return (
		<section className="Product-box">
			<figure className="image">
				<img src={productImages[Math.floor(Math.random() * (+2 - +0)) + +0 ]} alt="" />
			</figure>
			<div className="content">
				<h2 className="title">
					{data.title}
				</h2>
				<p className="Ellipsis">
					{data.description}
				</p>
				<span className={data.quantity === 0 ? "sold-out" : "Display-none"}>تمام شد</span>
				<div className="shopping">
					<span className="price">
						{data.price} تومان
					</span>
					<span className="cta">
						<Button
							className="Full-width"
							onClick={() => context.addProduct(data)}
							disabled={data.quantity === 0}
						/>
					</span>
				</div>
			</div>
		</section>
	);
};


export default ProductBox;