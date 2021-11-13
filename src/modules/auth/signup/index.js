import React from "react";
import { useState } from "react";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import AuthSvg from "../../../assets/shared/authsvg.svg";
import { ReactComponent as UnderLine } from "../../../assets/shared/underline2.svg";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../api/api";

const Signup = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		selected: "",
		dribbbleusername: "",
		githubusername: "",
	});

	let socialProfile;
	if (user.selected === "designer") {
		socialProfile = (
			<Input
				className="my-4"
				type="text"
				placeholder="Dribbble username"
				label="Dribbble username"
				inputType="input"
				name="dribbbleusername"
				id="dribbbleusername"
				value={user.dribbbleusername}
				state={user}
				setState={setUser}
			/>
		);
	} else if (user.selected === "developer") {
		socialProfile = (
			<Input
				className="my-4"
				type="text"
				placeholder="Github username"
				label="GitHub username"
				inputType="input"
				name="githubusername"
				id="githubusername"
				value={user.githubusername}
				state={user}
				setState={setUser}
			/>
		);
	} else if (user.selected === "both") {
		socialProfile = (
			<div className="mt-4">
				<Input
					className="my-4"
					type="text"
					placeholder="Dribbble username"
					label="Dribbble username"
					inputType="input"
					name="dribbbleusername"
					id="dribbbleusername"
					value={user.dribbbleusername}
					state={user}
					setState={setUser}
				/>
				<Input
					className="my-4"
					type="text"
					placeholder="Github username"
					label="GitHub username"
					inputType="input"
					name="githubusername"
					id="githubusername"
					value={user.githubusername}
					state={user}
					setState={setUser}
				/>
			</div>
		);
	} else {
		socialProfile = null;
	}

	const onClickHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("chal gya hai");
		if (user.selected === "designer") {
			setUser({
				...user,
				githubusername: "",
			});
		} else if (user.selected === "developer") {
			setUser({
				...user,
				dribbbleusername: "",
			});
		} else {
			console.log("sab badhiya hai");
		}
		// Hitting the api
		const {
			name,
			email,
			password,
			selected,
			dribbbleusername,
			githubusername,
		} = user;
		try {
			const res = await axios.post("/api/auth/register", {
				name,
				email,
				password,
				usertype: selected,
				dribbbleusername,
				githubusername,
			});
			setLoading(false);
			console.log(res);
			history.push("/login");
			toast.success("User Registered Successfully Login to Continue", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (err) {
			const msg = err.response.data.message;
			setLoading(false);
			console.log(msg);
			toast.error(msg, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<>
			<Header />
			<div className="flex px-0 md:px-0 lg:w-full justify-evenly p-16">
				<div className="w-80  md:max-w-7xl">
					<div className="flex justify-center md:justify-start">
						<h1 className="text-5xl font-extrabold">
							Sign<span className="text-blue-600"> Up!</span>
							<UnderLine className="w-48 mt-4" />
						</h1>
					</div>
					<div className="mt-6">
						<form method="post">
							<Input
								className="my-4"
								type="text"
								placeholder="Enter your name"
								label="Name"
								inputType="input"
								name="name"
								id="name"
								value={user.name}
								state={user}
								setState={setUser}
							/>
							<Input
								className="my-4"
								type="email"
								placeholder="Enter your email"
								label="Email"
								inputType="input"
								name="email"
								id="email"
								value={user.email}
								state={user}
								setState={setUser}
							/>
							<Input
								className="my-4"
								type="password"
								placeholder="Enter your password"
								label="Password"
								inputType="input"
								name="password"
								id="password"
								value={user.password}
								state={user}
								setState={setUser}
							/>
							<div className="my-4">
								<label className="text-base mb-2 font-medium font-sample">
									Choose category
								</label>
								<div className="flex flex-col md:flex-row justify-between mt-3">
									<Input
										type="radio"
										label="Designer"
										inputType="input"
										className="mt-0"
										name="usertype"
										id="designer"
										value="designer"
										state={user}
										setState={setUser}
									/>
									<Input
										type="radio"
										label="Developer"
										inputType="input"
										className="mt-2 md:mt-0"
										name="usertype"
										id="developer"
										value="developer"
										state={user}
										setState={setUser}
									/>
									<Input
										type="radio"
										label="Both"
										inputType="input"
										className="mt-2 md:mt-0"
										name="usertype"
										id="both"
										value="both"
										state={user}
										setState={setUser}
									/>
								</div>
							</div>
							{socialProfile}
							<Button
								className="mt-4"
								type="primary"
								size="full"
								children="Make It Happen 😎"
								hasShadow={true}
								onClick={onClickHandler}
								isLoading={loading}
							/>
							<div className="text-center mt-2">
								<Link to="/login">
									Already have an account?{" "}
									<span className="text-blue-600">Log in</span>
								</Link>
							</div>
						</form>
					</div>
				</div>
				<div className="hidden md:flex max-w-xs p-8 my-auto lg:max-w-sm  ">
					<img src={AuthSvg} className="w-full" alt="authimage" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Signup;
