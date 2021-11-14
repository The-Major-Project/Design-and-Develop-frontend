import React, { useState, createContext } from "react";

export const stateContext = createContext();

export const DNDContextProvider = (props) => {
	const [currentUser, setCurrentUser] = useState({});
	const [dashboardPosts, setDashboardPosts] = useState([]);

	return (
		<stateContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				dashboardPosts,
				setDashboardPosts,
			}}
		>
			{props.children}
		</stateContext.Provider>
	);
};
