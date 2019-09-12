import React from 'react';
import Sort from './sort';

const Header = () => {
	return (
		<header className="row">
			<div className="col l12 s12">
				<div className="Header">
					<h1 className="title">تخفیفان</h1>
					<div className="controls Left">
						<Sort />
					</div>
				</div>
			</div>
		</header>
	);
}


export default Header;