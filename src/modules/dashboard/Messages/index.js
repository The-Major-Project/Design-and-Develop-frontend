import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";

const Messages = () => {
	return (
		<>
			<Layout sider={<SideMenu />} main={<div></div>} />
		</>
	);
};

export default Messages;
