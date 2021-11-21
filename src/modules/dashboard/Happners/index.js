import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import Tabs from "../../../components/Tabs";
import HappnersCard from "../../../components/HappnersCard";

const Happners = () => {
	// useEffect(() => {
	//   const getAllUsers = async () => {
	//     try {
	//       const res = await axiosInstance.get(`/api/user/${params.id}`, {
	//         headers: {
	//           Accept: "application/json",
	//           "Content-Type": "application/json",
	//           "Access-Control-Allow-Origin": "*",
	//           accessToken: localStorage.getItem("accessToken"),
	//         },
	//       });
	//     } catch (err) {
	//       console.log(err);
	//     }
	//   };
	//   getAllUsers();
	// })

	const data = [
		{
			id: 1,
			tabname: "Suggestions",
			tabdata: (
				<>
					<HappnersCard name="Mihir Verma" />
					<HappnersCard name="Yash Sharma" />
					<HappnersCard name="Manvi Jain" />
					<HappnersCard name="Meemansha Jain" />
				</>
			),
		},
		{
			id: 2,
			tabname: "Followers",
			tabdata: (
				<>
					<HappnersCard name="Yash Sharma" />
					<HappnersCard name="Manvi Jain" />
					<HappnersCard name="Mihir Verma" />
					<HappnersCard name="Meemansha Jain" />
				</>
			),
		},
		{
			id: 3,
			tabname: "Following",
			tabdata: (
				<>
					<HappnersCard name="Meemansha Jain" />
					<HappnersCard name="Yash Sharma" />
					<HappnersCard name="Mihir Verma" />
					<HappnersCard name="Manvi Jain" />
				</>
			),
		},
	];
	return (
		<>
			<Layout
				sider={<SideMenu />}
				main={
					<div>
						<Tabs data={data} />
					</div>
				}
			/>
		</>
	);
};

export default Happners;
