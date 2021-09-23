import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import AuthSvg from "../../../assets/shared/authsvg.svg";
import { ReactComponent as UnderLine } from "../../../assets/shared/underline2.svg";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const onClickHandler = (e) => {
		e.preventDefault();
		console.log(user);
	};

	return (
		<>
			<Header />
			<div className="flex px-0  md:px-0 lg:w-full justify-evenly p-16">
				<div className="w-80  md:max-w-7xl">
					<div className="flex justify-center md:justify-start">
						<h1 className="text-5xl font-extrabold">
							Log<span className="text-blue-600"> In!</span>
							<UnderLine className="w-48 mt-4" />
						</h1>
					</div>
					<div className="mt-6">
						<form>
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
							<Button
								className="mt-4"
								type="primary"
								size="full"
								children="Make It Happen 😎"
								hasShadow={true}
								onClick={onClickHandler}
							/>
							<div className="text-center mt-2">
								<Link to="/signup">
									New to D&D? <span className="text-blue-600">Sign up</span>
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

export default Login;
