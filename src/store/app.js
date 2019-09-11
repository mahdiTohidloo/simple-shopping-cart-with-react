import React, {useState, useEffect} from 'react';

const AppContextModel = {
	products: []
};

const AppContext = React.createContext();


const AppContextProvider = (props) => {
	const [products, changeProducts] = useState(AppContextModel.products);


	const sortByMostPopular = () => {

	};

	const sortByMostSale = () => {

	};

	const contextProps = {
		data: products,
		sortByMostPopular,
		sortByMostSale
	}

	return (
		<AppContext.Provider value={...contextProps}>
			{props.children}
		</AppContext.Provider>
	);

};

export default AppContextProvider;