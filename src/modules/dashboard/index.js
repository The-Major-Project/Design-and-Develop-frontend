import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./../../components/Layout";
import SideMenu from "../../components/SideMenu";
import DashboardBanner from "../../components/DashboardBanner";

const DashBoard = () => {
	const history = useHistory();

	//   VERIFIYING FOR THE ACCESS TO THIS PAGE
	const verifyDashboard = async () => {
		try {
			const res = await axios.get("/", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					accessToken: localStorage.getItem("accessToken"),
				},
				credentials: "include",
				withCredentials: true,
			});

			console.log("res" + res);

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			history.push("/login");
		}
	};

	// USING THIS EFFECT HOOK FOR JWT VERIFICATION
	useEffect(() => {
		verifyDashboard();
	}, []);

	return (
		<Layout
			sider={<SideMenu />}
			header="HEADER"
			main={
				<div className="flex-row">
					<DashboardBanner />
					<p className="mt-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id
						veritatis expedita fugit iusto recusandae facilis possimus enim vero
						mollitia? Praesentium aspernatur laudantium provident voluptatibus
						suscipit voluptatem optio officia sequi dolor, repellat vitae quos
						error culpa sit numquam. Culpa consectetur id libero debitis, minus
						voluptates fuga perferendis impedit sed rem animi? Ipsum, sint, quod
						natus repudiandae molestias, exercitationem error ad repellendus
						distinctio sit velit facilis quo explicabo ipsa vero quasi dolorem
						et sed voluptates voluptate qui. Deserunt eligendi voluptate officia
						ducimus minus magnam, eos impedit sapiente, illo voluptatum eum qui,
						totam itaque? Dolore minus ad itaque quisquam magni, exercitationem
						illo facere eaque. Tempore, saepe laudantium ullam quod, dolores
						amet expedita voluptates recusandae ipsam molestiae commodi
						consequuntur accusantium adipisci corrupti eligendi itaque mollitia,
						odit iste reiciendis illo cupiditate nobis quis esse! Eos neque
						numquam voluptatum commodi dicta, animi corporis minus quas sit
						illum explicabo tempora doloribus molestias quam voluptatem magni
						possimus ea quasi! Officia quasi autem accusamus repellendus, sed
						voluptatum vitae odio debitis, esse repellat nesciunt at dolorem
						similique, voluptatibus nobis vel porro velit? Nemo neque cupiditate
						at accusantium vitae, modi ex exercitationem! Sit, perspiciatis. Ea
						hic eum ipsam ex, debitis, at omnis aspernatur earum id dicta sed
						natus, ullam vitae eaque? Unde omnis commodi sunt quod optio placeat
						molestiae veritatis, pariatur et dignissimos excepturi molestias,
						cumque architecto? Architecto inventore aliquid quod sunt nisi
						molestiae dolores et. Doloribus officia dolor soluta recusandae
						fugiat exercitationem est enim! Sequi accusamus aspernatur iure rem
						quidem ut ea porro omnis dolore ex molestiae ipsa eius animi, qui
						nobis? Et magni voluptatum illum sapiente labore repudiandae natus
						consectetur dicta. Consectetur distinctio adipisci placeat
						exercitationem alias tenetur accusantium id sit aliquam totam odit
						animi temporibus voluptatum est at, non, ullam deleniti unde
						corporis quam harum. Placeat ad dolorum doloribus omnis minus ea
						officiis quam praesentium quaerat distinctio sunt nesciunt, alias
						quia nulla, fuga temporibus necessitatibus repellat inventore
						veritatis maxime quos vero eaque! Veritatis voluptas accusamus
						voluptate earum. Eaque, vero ex quaerat delectus quasi temporibus.
						Ex sed minus dolores repellendus, commodi reiciendis culpa enim
						beatae laboriosam temporibus voluptate. Consequatur nobis explicabo
						porro et totam quam ut ex atque quod eius possimus eligendi eaque
						maxime dolor at neque esse amet natus magnam, harum laudantium
						recusandae nihil rerum libero. Reprehenderit rerum cumque incidunt
						aliquid, quasi exercitationem fugiat consequatur? Repellat quam
						omnis voluptatibus, deserunt magnam tempora. Minima et sed
						architecto debitis, tempora suscipit maiores distinctio aliquam
						voluptatem minus, provident optio delectus tempore, ad in quis
						quibusdam ullam consectetur at. Nemo, laborum incidunt nihil eaque
						aliquid reprehenderit perspiciatis ad suscipit tempora sit in eum!
						Minima sed culpa pariatur, aliquam facere ipsum! Accusantium vel ab
						illo aspernatur autem beatae consequuntur aperiam sed, dolores,
						laboriosam dolorem amet magnam, odio dolorum ipsa mollitia iusto
						necessitatibus laborum facere! Ducimus quis tempora atque tenetur
						at. Magni, officiis neque hic animi excepturi corporis, iure
						repellat doloremque suscipit possimus repudiandae sint officia
						laboriosam beatae? Repellat maxime culpa quae, esse omnis recusandae
						ullam quisquam atque? Unde numquam vel blanditiis necessitatibus
						tempore illo iure, deleniti earum quis minima nobis aspernatur
						nostrum.
					</p>
				</div>
			}
		/>
		// <div>
		// 	<form method="get">This is user dashboard</form>
		// </div>
	);
};

export default DashBoard;
