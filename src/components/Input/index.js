import React from "react";
import cx from "classnames";
import { autoSuggest } from "../../helper/citiesCountries";

const Input = ({
	className,
	label,
	inputType,
	type,
	placeholder,
	id,
	name,
	value,
	state,
	setState,
	labelClass,
	rows = 5,
	list,
	setCitiesArray,
	citiesArray,
	setPreviewSource,
	previewSource,
}) => {
	let inputName, inputValue;
	const onChangeHandler = (event) => {
		inputName = event.target.name;
		inputValue = event.target.value;
		setState({ ...state, [inputName]: inputValue });
	};
	const onRadioChange = (event) => {
		setState({ ...state, selected: event.target.value });
	};
	const onFileChange = (event) => {
		inputName = event.target.name;
		const file = event.target.files[0];
		previewFile(file);
	};
	const uploadImage = (base64EncodedImage) => {
		return base64EncodedImage;
	};
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
			setState({ ...state, profile: uploadImage(reader.result) });
		};
	};

	const StylesForInput = cx(
		{
			"text-base px-5 py-3 border-2 border-gray-300 rounded-xl text-gray-400	font-medium resize-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent":
				type === "text" ||
				type === "password" ||
				type === "number" ||
				type === "email" ||
				inputType === "textarea",
			"w-5 h-5": type === "radio" && inputType === "input",
		},
		className
	);

	const StylesForLabel = cx(
		{
			"text-base mb-2 font-medium font-sample":
				type === "text" ||
				type === "password" ||
				type === "number" ||
				type === "email" ||
				type === "file" ||
				inputType === "textarea",
			"text-base ml-3 font-medium my-auto":
				type === "radio" && inputType === "input",
		},
		labelClass
	);

	const StylesForInputGroup = cx({
		"flex flex-col":
			type === "text" ||
			type === "password" ||
			type === "number" ||
			type === "email" ||
			type === "file" ||
			inputType === "textarea",
		"flex w-min flex-row flex-row-reverse items-center": type === "radio",
	});

	return (
		<div className={StylesForInputGroup}>
			{label ? (
				<label htmlFor="input" className={StylesForLabel}>
					{label}
				</label>
			) : null}
			{inputType === "input" ? (
				<input
					className={StylesForInput}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={
						type === "file"
							? onFileChange
							: id === "city"
							? (event) => {
									autoSuggest(
										state.city,
										setState,
										state,
										event.target.name,
										event.target.value,
										setCitiesArray
									);
							  }
							: type === "radio"
							? onRadioChange
							: onChangeHandler
					}
					name={name}
					id={id}
					list={list}
					autoComplete="off"
					min={0}
				/>
			) : (
				<textarea
					className={StylesForInput}
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={onChangeHandler}
					name={name}
					rows={rows}
					id={id}
				/>
			)}
		</div>
	);
};

export default Input;
