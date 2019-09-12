import React from 'react';
import Sort from './sort';
import Cart from "../cart";

const Header = () => {
	return (
		<header className="row">
			<div className="col l12 s12">
				<div className="Header">
					<h1 className="title">تخفیفان</h1>
					<div className="controls Left row">
						<div className="col m6 l6">
							<Cart/>
						</div>
						<div className="col m6 l6 s12 ">
							<div className="Left">
								<Sort/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}


export default Header;