import React, {useContext} from 'react';
import Header from '../components/header';
import ProductBox from '../components/productBox';
import {AppContext} from '../store/app';

const Products = () => {
	
	// app context
	const context = useContext(AppContext);

	return (
		<div>
			<Header />
			<ProductBox />
		</div>
	);
};


export default Products;