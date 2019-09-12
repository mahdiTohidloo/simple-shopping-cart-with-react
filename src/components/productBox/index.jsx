import React, {useContext} 	from 'react';
import Button 	            from '../forms/button';
import {CartContext}        from "../../store/cart";

const ProductBox = ({ data }) => {
	const context = useContext(CartContext);


	console.log(context.data);
	return (
		<section className="Product-box">
			<figure className="image">
				<img src={require('../../assets/images/product1.jpg')} alt="" />
			</figure>
			<div className="content">
				<h2 className="title">
					{data.title}
				</h2>
				<p className="Ellipsis">
					{data.description}
				</p>
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