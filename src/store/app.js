import React, {useState} from 'react';

// craete new context
export const AppContext = React.createContext();

// app context model
const AppContextModel = {
	products: []
};


// context provider
const AppContextProvider = (props) => {

	// current state for the contex
	const [products, changeProducts] = useState(AppContextModel.products);

	// sort by `createdAt` value. (descending)
	const sortByNews = () => {
		changeProducts([...products].sort((a, b) => b.createdAt  - a.createdAt));
	};

	// sort by `soldCount` value. (descending)
	const sortByMostSale = () => {
		changeProducts([...products].sort((a, b) => b.soldCount - a.soldCount));
	};


	// save products data
	const saveProducts = (data) => {
		changeProducts(data);
	};
	
	// context props
	const contextProps = {
		data: products,
		saveProducts,
		sortByNews,
		sortByMostSale
	};

	return (
		<AppContext.Provider value={contextProps}>
			{props.children}
		</AppContext.Provider>
	);

};

export default AppContextProvider;