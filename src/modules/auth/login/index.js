import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import AuthSvg from "../../../assets/shared/authsvg.svg";
import { ReactComponent as UnderLine } from "../../../assets/shared/underline2.svg";
import axios from "../../../api/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Login = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const onClickHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axios.post("/login", user);
			setLoading(false);
			console.log(res);
			localStorage.setItem("accessToken", res.data.accessToken);
			history.push("/dashboard");
			window.location.reload();
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
								isLoading={loading}
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
