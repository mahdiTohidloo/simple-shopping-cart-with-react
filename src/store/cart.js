import React, {useState} from 'react';


export const CartContext = React.createContext();


const CartContextProvider = (props) => {
	// save the products that added to cart
	const [products, changeProducts] = useState([]);

	// add `count` property to product model to handle the product count to buy
	const convertProductModelToCartModel = (productData) => {
		return {...productData, count: 1};
	};

	// replace new products array with old array
	const changeCartProducts = (newProducts) => {
		changeProducts(newProducts || []);
	};

	const addProduct = (productData) => {
		/*
		* check if the product is exist in cart, increment the count of the product in cart.
		* otherwise add it to cart as new product
		*/
		const existItem = products.filter((existProduct) => existProduct.id === productData.id)[0];
		if (existItem) {
			// increment exist product count
			incrementProductCount(existItem);
		} else {
			// add product as new product
			changeCartProducts([...products, convertProductModelToCartModel(productData)]);
		}
	};

	const removeProduct = (productData) => {
		changeProducts([...products].filter((existProduct) => existProduct.id !== productData.id));
	};

	const incrementProductCount = (productData) => {
		/*
		 * if selected products count is lower than than the product quantity
		 * then increment the products count
		 */
		console.log(productData);
		if (productData.count < productData.quantity) {
			changeProducts([...products].map((product) => {
				if (product.id === productData.id)
					return {...productData, count: productData.count + 1};
				return product;
			}));
		}
	};

	const decrementProductCount = (productData) => {
		/*
		 * if selected count of the product is more than one
		 * then decrement  the products count
		 * otherwise remove the product from cart
		 */
		if (productData.count > 1) {
			changeProducts([...products].map((product) => {
				if (product.id === productData.id)
					return {...productData, count: productData.count - 1};
				return product;
			}));
		} else {
			removeProduct(productData);
		}
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