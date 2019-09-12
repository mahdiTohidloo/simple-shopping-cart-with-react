import React, {useContext, useEffect, useState} from 'react';
import Header 		from '../components/header';
import ProductBox 	from '../components/productBox';
import {AppContext} from '../store/app';
import APIRoutes 	from '../assets/apiRoutes';
import CartContextProvider from '../store/cart';


// list of images to randomly generate image for each product
const productImages = [
	require('../assets/images/product1.jpg'),
	require('../assets/images/product2.jpg'),
	require('../assets/images/product3.jpg')
];

const Products = () => {

	const [isLoadingData, changeLoadingDataStatus] = useState(true);
	// app context
	const context = useContext(AppContext);

	// fetch data from server
	useEffect(() => {
		fetch(APIRoutes.products)
		.then((payload) => payload.json())
		.then((payload) => {
			// stop showing progress indicator
			changeLoadingDataStatus(false);
			// assign an image to each product item and save the data
			context.saveProducts([...payload.data.items].map((item) => {
				return {...item, image: productImages[Math.floor(Math.random() * (+2 - +0)) + +0]}
			}));
		})
	}, []);

	return (
		<CartContextProvider>
			{
				isLoadingData && <div className="loading-wrapper"><div className="Loading" /></div>
			}
			<div className={isLoadingData ? "Display-none" : "Container"}>
				<Header />
				<div className="row">
					{
						// generate product box list by saved data in context
						context.data.map((product, index) =>
							<div key={index} className="col l4 m6 s12 Product-wrapper">
								<ProductBox data={product}/>
							</div>
						)
					}
				</div>
			</div>
		</CartContextProvider>
	);
};


export default Products;