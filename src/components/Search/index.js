import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/DashboardIcons/Search.svg";

const Search = () => {
	const onChangeHandler = () => {};

	return (
		<div className="flex px-4 items-center border-2 rounded-lg w-80">
			<SearchIcon className="" />
			<input
				className="py-2 pl-4 text-sm text-gray-700 font-medium w-full outline-none"
				type="text"
				placeholder="Search..."
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default Search;
