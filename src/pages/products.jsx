import React, {useContext, useEffect} from 'react';
import Header 		from '../components/header';
import ProductBox 	from '../components/productBox';
import {AppContext} from '../store/app';
import APIRoutes 	from '../assets/apiRoutes';


const Products = () => {

	// app context
	const context = useContext(AppContext);

	// fetch data from server
	useEffect(() => {
		fetch(APIRoutes.products)
		.then((payload) => payload.json())
		.then((payload) => {
			console.log(payload);
			context.saveProducts(payload.data.items);
		})
	}, []);

	return (
		<div className="Container">
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
	);
};


export default Products;