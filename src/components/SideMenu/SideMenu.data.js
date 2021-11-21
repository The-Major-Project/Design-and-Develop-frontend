import { ReactComponent as Dashboard } from "../../assets/DashboardIcons/Dashboard.svg";
import { ReactComponent as DashboardIn } from "../../assets/DashboardIcons/DashboardIn.svg";
// eslint-disable-next-line no-unused-vars
import { ReactComponent as Happners } from "../../assets/DashboardIcons/Happners.svg";
// eslint-disable-next-line no-unused-vars
import { ReactComponent as HappnersIn } from "../../assets/DashboardIcons/HappnersIn.svg";
import { ReactComponent as Message } from "../../assets/DashboardIcons/Message.svg";
import { ReactComponent as MessageIn } from "../../assets/DashboardIcons/MessageIn.svg";
import { ReactComponent as Notification } from "../../assets/DashboardIcons/Notification.svg";
import { ReactComponent as NotificationIn } from "../../assets/DashboardIcons/NotificationIn.svg";
import { ReactComponent as Profile } from "../../assets/DashboardIcons/Profile.svg";
import { ReactComponent as ProfileIn } from "../../assets/DashboardIcons/ProfileIn.svg";

const activeWidth = 22;
const activeHeight = 23;
const inActiveWidth = 19;
const inActiveHeight = 20;
const userId = localStorage.getItem("userId");
export const SideMenuItems = [
	{
		iconActive: <Dashboard width={activeWidth} height={activeHeight} />,
		iconInactive: <DashboardIn width={inActiveWidth} height={inActiveHeight} />,
		label: "Dashboard",
		path: "/dashboard",
	},
	{
		iconActive: <Profile />,
		iconInactive: <ProfileIn />,
		label: "Profile",
		path: `/profile/${userId}`,
	},
	{
		iconActive: <Notification />,
		iconInactive: <NotificationIn />,
		label: "Notifications",
		path: "/notifications",
	},
	// {
	// 	iconActive: <Happners />,
	// 	iconInactive: <HappnersIn />,
	// 	label: "Happners",
	// 	path: "/happners",
	// },
	{
		iconActive: <Message />,
		iconInactive: <MessageIn />,
		label: "Messages",
		path: "/messages",
	},
];
