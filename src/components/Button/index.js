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
	action,
	disabled,
}) => {
	const classes = cx(
		{
			"bg-blue-600 text-white border-blue-600": type === "primary",
			"text-blue-600 border-blue-600": type === "secondary",
			"bg-yellow-500 text-white border-yellow-500": type === "warning",
			"bg-green-500 text-white border-green-500": type === "success",
			"px-5 py-1": size === "small",
			"px-8 py-3": size === "medium",
			"w-full px-8 py-3": size === "full",
			"w-10 h-10 rounded-xl": size === "icon",
			"hover:shadow-btnShadow transition duration-500 ease-in-out": hasShadow,
			"cursor-not-allowed opacity-50": isLoading || disabled,
		},

		"min-w-max font-medium flex items-center justify-center border-2 rounded-lg focus:outline-none",
		className
	);

	return (
		<button
			className={classes}
			onClick={onClick}
			type={action}
			disabled={disabled}
		>
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
