import React, {useContext} 	from 'react';
import Button 	            from '../forms/button';
import {CartContext}        from "../../store/cart";

const ProductBox = ({ data }) => {
	const context = useContext(CartContext);
	return (
		<section className="Product-box">
			<figure className="image">
				<img src={data.image} alt={data.title} />
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