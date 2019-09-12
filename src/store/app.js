import React, {useState} from 'react';
import { ToastContainer }   from 'react-toastify';

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
		console.log([...products].sort((a, b) => b.createdAt  - a.createdAt));
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

	return <React.Fragment>
		<ToastContainer
			position="top-right"
			hideProgressBar={true}
			newestOnTop={false}
			toastClassName="Base-font"
			closeOnClick
			rtl
			draggable
			pauseOnHover
		/>
		<AppContext.Provider value={contextProps}>
			{props.children}
		</AppContext.Provider>
	</React.Fragment>

};

export default AppContextProvider;