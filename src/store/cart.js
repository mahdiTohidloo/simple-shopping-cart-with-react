import React, {useState} from 'react';


export const CartContext = React.createContext();


const CartContextProvider = (props) => {
	// save the products that added to cart
	const [products, changeProducts] = useState([]);

	const changeCartProducts = () => {
		//TODO: write logic to change the products array
	};

	const addProduct = (productData) => {
		//TODO: write logic to add product
	};

	const removeProduct = (productData) => {
		//TODO: write logic to remove product
	};

	const incrementProductCount = (productData) => {
		//TODO: write logic to increment the product count
	};

	const decrementProductCount = (productData) => {
		//TODO: write logic to increment the product count
	};

	const contextProps = {
		data: products,
		addProduct,
		removeProduct,
		incrementProductCount,
		decrementProductCount
	};

	return (
		<CartContext.Provider value={contextProps}>
			{props.children}
		</CartContext.Provider>
	)
};
export default CartContextProvider;