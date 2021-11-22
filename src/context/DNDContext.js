import React, { useState, createContext } from "react";

export const stateContext = createContext();

export const DNDContextProvider = (props) => {
	const [currentUser, setCurrentUser] = useState({});
	const [dashboardPosts, setDashboardPosts] = useState([]);
	const [messages, setMessages] = useState([]);
	const [messageLoading, setMessageLoading] = useState(true);
	const [selectedGroupName, setSelectedGroupName] = useState("");

	return (
		<stateContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				dashboardPosts,
				setDashboardPosts,
				messages,
				setMessages,
				messageLoading,
				setMessageLoading,
				selectedGroupName,
				setSelectedGroupName,
			}}
		>
			{props.children}
		</stateContext.Provider>
	);
};
