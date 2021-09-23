import React from "react";
import cx from "classnames";
import Loader from "../Loader";

const Button = ({
	children,
	type,
	size,
	onClick,
	hasShadow,
	className,
	isLoading,
	action
}) => {
	const classes = cx(
		{
			"bg-blue-600 text-white border-blue-600": type === "primary",
			"bg-yellow-500 text-white border-yellow-500": type === "warning",
			"text-blue-600 border-blue-600": type === "secondary",
			"px-5 py-1": size === "small",
			"px-8 py-3": size === "medium",
			"w-full px-8 py-3": size === "full",
			"hover:shadow-btnShadow transition duration-500 ease-in-out": hasShadow,
			"cursor-not-allowed": isLoading,
			"opacity-50": isLoading,
		},

		"min-w-max font-medium flex items-center justify-center border-2 rounded-lg focus:outline-none",
		className
	);

	return (
		<button className={classes} onClick={onClick} type={action}>
			{isLoading ? (
				<Loader
					bg={type === "secondary" ? "#2563EB" : "#fff"}
					color={type === "secondary" ? "#2563EB" : "#fff"}
				/>
			) : null}
			{children}
		</button>
	);
};

export default Button;
