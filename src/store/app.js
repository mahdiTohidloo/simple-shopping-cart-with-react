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


	const sortByMostPopular = () => {
		//TODO: define the login for this function
	};

	const sortByMostSale = () => {
		//TODO: define the login for this function
	};

	// context props
	const contextProps = {
		data: products,
		sortByMostPopular,
		sortByMostSale
	}

	return (
		<AppContext.Provider value={contextProps}>
			{props.children}
		</AppContext.Provider>
	);

};

export default AppContextProvider;