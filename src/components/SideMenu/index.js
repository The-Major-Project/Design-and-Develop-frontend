import React from "react";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import { SideMenuItems } from "./SideMenu.data";
import { ReactComponent as Logout } from "../../assets/DashboardIcons/Logout.svg";

const SideMenuItem = ({ path, label, iconActive, iconInactive }) => {
	const pathname = window.location.pathname;

	if (pathname === "/") {
		document.title = "Design & Develop";
	} else {
		document.title = pathname.slice(1);
	}

	return (
		<Link
			to={path}
			className={cx(
				"flex flex-row w-full items-center my-2 rounded-2xl p-5",
				{
					"bg-blue-50 text-blue-600 font-semibold": pathname.includes(path),
					"bg-white text-gray-500 font-medium hover:bg-gray-100":
						!pathname.includes(path),
				},
				"pointer-events: none"
			)}
		>
			{pathname.includes(path) ? iconActive : iconInactive}
			<div
				className={cx("w-10/12 pl-4 ", {
					"": pathname.includes(path),
				})}
			>
				{label}
			</div>
		</Link>
	);
};

const SideMenu = () => {
	const history = useHistory();

	const logoutUser = () => {
		localStorage.removeItem("accessToken");
		history.push("/");
		window.location.reload();
	};

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="p-5">
				<h1 className="text-center text-xl font-bold text-blue-600 mb-12">
					Design <span className="text-gray-900">&</span> Develop
				</h1>
				{SideMenuItems.map((item, index) => (
					<SideMenuItem
						key={index}
						path={item.path}
						label={item.label}
						iconActive={item.iconActive}
						iconInactive={item.iconInactive}
					/>
				))}
			</div>
			<div onClick={logoutUser} className="cursor-pointer hover:bg-gray-50">
				<hr />
				<div className="flex justify-center py-3">
					<Logout />
					<span className="ml-4 text-lg font-semibold">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
