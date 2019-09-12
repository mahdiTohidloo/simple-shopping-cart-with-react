import React 	from 'react';
import {
	convertEnglishNumberToPersian
} 				from '../../utilities/utilities';
import Button 	from '../forms/button';

const ProductBox = ({ data }) => {
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
						{ convertEnglishNumberToPersian(data.price)} تومان
					</span>
					<span className="cta">
						<Button className="Full-width hide-on-small-and-down" disabled={data.quantity === 0}>
							همین حالا خرید کن
						</Button>
						<Button className="hide-on-med-and-up">
							<i className="material-icons">add</i>
						</Button>
					</span>
				</div>
			</div>

		</section>
	);
};


export default ProductBox;