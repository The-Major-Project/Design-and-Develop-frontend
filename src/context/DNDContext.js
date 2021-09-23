import React, { useState, createContext } from "react";

export const DNDContext = createContext();

export const DNDContextProvider = (props) => {
	// const [x, setX] = useState([]);
	// const [name, setName] = useState("");

	return (
		<DNDContext.Provider
			value={
				{
					// x: x,
					// setX: setX,
					// name,
					// setName,
				}
			}
		>
			{props.children}
		</DNDContext.Provider>
	);
};
