import React, {useContext, useState} from 'react';
import {AppContext} from '../../store/app';


const Sort = () => {
	// app context
	const context = useContext(AppContext);

	// this state is used to handle show sort menu
	const [showSort, changeSortMenuStatus] = useState(false);
	const toggleSortMenu = () => {
		changeSortMenuStatus(!showSort);
	};
 
	return (
		<ul className="Sort">
			<li onClick={toggleSortMenu}>
				<i className="material-icons">sort</i>
				<span className="hide-on-small-and-down">مرتب سازی</span>
				<ul className={showSort ? 'submenu' : 'Display-none'}>
					<li onClick={context.sortByNews}>جدید</li>
					<li onClick={context.sortByMostSale}>پر فروش</li>
				</ul>
			</li>
		</ul>
	);
};


export default Sort;