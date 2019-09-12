import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => (
	<button
		className={`Button ${props.className}`}
		onClick={props.onClick}
		disabled={props.disabled}
		type={props.type}
	>
		{props.children}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string
};

Button.defaultProps = {
	onClick: () => {},
	type: 'button',
	className: '',
	disabled: false
};

export default Button;