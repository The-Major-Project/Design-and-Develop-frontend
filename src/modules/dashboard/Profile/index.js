import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";

const Profile = () => {
	return (
		<>
			<Layout sider={<SideMenu />} main={<div></div>} />
		</>
	);
};

export default Profile;
