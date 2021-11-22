import React, { useContext, useState } from "react";
import Banner from "../../assets/DashboardIcons/bannerimage.png";
// import Close from "../../assets/shared/closeImage.svg";
import { ReactComponent as Location } from "../../assets/DashboardIcons/Location.svg";
import { ReactComponent as Dribbble } from "../../assets/DashboardIcons/dribpink.svg";
import { ReactComponent as Github } from "../../assets/DashboardIcons/gitcat.svg";
import { ReactComponent as Link } from "../../assets/DashboardIcons/prolink.svg";
import { ReactComponent as Mail } from "../../assets/DashboardIcons/mail.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalWrapper from "../ModalWrapper";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "../../api/api";
import { stateContext } from "../../context/DNDContext";
import { useHistory } from "react-router";

const ProfileOverview = ({
	name,
	usertype,
	self,
	city,
	address,
	country,
	email,
	portfolioURL,
	dribbbleusername,
	githubUsername,
	following = [2, 3, 4],
	followers = [5, 6, 7, 1],
}) => {
	const mystyle = {
		// eslint-disable-next-line no-useless-concat
		backgroundImage: "url(" + `${Banner}` + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		borderRadius: "23px 23px 0 0 ",
	};

	const { currentUser } = useContext(stateContext);

	let data;
	let files;
	let history = useHistory();
	const userId = localStorage.getItem("userId");
	const [loading, setLoading] = useState(false);
	const [visibleEditProfile, setVisibleEditProfile] = useState(false);
	const [citiesArray, setCitiesArray] = useState([]);
	const [editPostData, setEditPostData] = useState({
		username: currentUser.name,
		city: currentUser.address,
		description: currentUser.description,
		email: currentUser.email,
		dribbbleusername: currentUser.dribbbleusername,
		githubUsername: currentUser.githubusername,
		portfolioURL: currentUser.profileurl,
		following: [],
		profileimage: "",
	});

	const uploadImage = async (e) => {
		files = e.target.files;
	};

	const onSubmitHandler = async (e) => {
		setLoading(true);
		e.preventDefault();
		console.log(editPostData);

		// Uploading image to cloud
		try {
			data = new FormData();
			data.append("file", files[0]);
			data.append("upload_preset", "profile-images");
			const res = await axios.post(
				"https://api.cloudinary.com/v1_1/dws5zrl1l/image/upload",
				data
			);
			console.log(res.data.secure_url);
			setEditPostData({
				...editPostData,
				profileimage: res.secure_url,
			});
			const resPost = await axiosInstance.put(`/api/user/${userId}`, {
				name: editPostData.username,
				userId: userId,
				githubusername: editPostData.githubUsername,
				dribbbleusername: editPostData.dribbbleusername,
				address: editPostData.city,
				profileurl: editPostData.portfolioURL,
				profileimage: res.data.secure_url,
				description: editPostData.description,
			});
			if (resPost.status === 200) {
				setLoading(false);
				toast.success("Your profile is updated successfully 💯", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				history.push("/dashboard");
			}
		} catch (err) {
			console.log(err);
		}
		setVisibleEditProfile(!visibleEditProfile);
	};

	const commonAvatar =
		"https://cdn.dribbble.com/users/281679/screenshots/14892777/media/dda7cef00b08512ac10faec0cd7c630d.png?compress=1&resize=1600x1200";

	return (
		<>
			<div className="lg:w-96 h-105 max-h-110 rounded-3xl lg:sticky lg:top-28  shadow-tabShadows sm:mx-auto sm:w-full">
				<div className="w-full h-24 py-2 px-4 " style={mystyle}>
					<div className="rounded-full h-20  w-20 mx-auto absolute inset-x-1/4 top-36 lg:top-12 lg:inset-x-1/4  p-1 bg-white shadow-tabShadow">
						<img
							src={currentUser.profileimage || commonAvatar}
							alt="banner"
							className="rounded-full w-full h-full object-cover object-center  mx-auto z-0"
						/>
					</div>
					<div className="info w-full text-center mt-32 ">
						<p className="text-base font-semibold">{currentUser.name}</p>
						<p className="text-sm font-medium text-gray-400 capitalize">
							{currentUser.usertype === "both"
								? "Designer, Developer"
								: currentUser.usertype}
						</p>
						<div className=" items-center">
							{currentUser.address != null || "" || undefined ? (
								<div className="inline-flex items-center mx-auto mt-2">
									<Location />{" "}
									<p className="text-xs font-semibold ml-1">
										{currentUser.address}
									</p>
								</div>
							) : null}
						</div>
					</div>
					<div className="mt-3">
						<p
							className="text-sm overflow-clip overflow-hidden text-justify h-28 "
							style={{ "max-height": "100px" }}
						>
							{currentUser.description}
						</p>
						<ul className="list-none text-xs mt-4 font-semibold text-gray-500">
							<li className="flex mt-4 items-center ">
								<Mail width="22" />{" "}
								<a className="ml-2 hover:text-blue-600" href={`mailto:${currentUser.email}`}>
									{currentUser.email}
								</a>
							</li>
							{currentUser.usertype === "developer" ? (
								<li className="flex mt-4 items-cente ">
									<Github width="22" />{" "}
									<a
										className="ml-2 hover:text-blue-600"
										href={`https://github.com/${currentUser.githubusername}`}
										target="_blank"
										rel="noreferrer"
									>
										{currentUser.githubusername}
									</a>
								</li>
							) : currentUser.usertype === "designer" ? (
								<li className="flex mt-4 items-center ">
									<Dribbble width="22" />{" "}
									<a
										className="ml-2 hover:text-blue-600"
										href={`https://dribbble.com/${currentUser.dribbbleusername}`}
										target="_blank"
										rel="noreferrer"
									>
										{currentUser.dribbbleusername}
									</a>
								</li>
							) : (
								<>
									<li className="flex mt-4 items-center ">
										<Github width="22" />{" "}
										<a
											className="ml-2 hover:text-blue-600"
											href={`https://github.com/${currentUser.githubusername}`}
											target="_blank"
											rel="noreferrer"
										>
											{currentUser.githubusername}
										</a>
									</li>
									<li className="flex mt-4 items-center ">
										<Dribbble width="22" />{" "}
										<a
											className="ml-2 hover:text-blue-600"
											href={`https://dribbble.com/${currentUser.dribbbleusername}`}
											target="_blank"
											rel="noreferrer"
										>
											{currentUser.dribbbleusername}
										</a>
									</li>
								</>
							)}

							{currentUser.profileurl != null || "" || undefined ? (
								<li className="flex mt-4 items-center ">
									<Link width="22" />{" "}
									<a
										className="ml-2 hover:text-blue-600"
										href={`http://${currentUser.profileurl}`}
										target="_blank"
										rel="noreferrer"
									>
										{currentUser.profileurl}
									</a>
								</li>
							) : null}
						</ul>
						{self ? (
							<Button
								className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
								size="small"
								onClick={() => setVisibleEditProfile(!visibleEditProfile)}
							>
								Edit profile ✏️
							</Button>
						) : !following.includes(userId) && !followers.includes(userId) ? (
							<Button
								size="small"
								type="primary"
								children="Follow"
								className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
							/>
						) : followers.includes(userId) && !following.includes(userId) ? (
							<Button
								size="small"
								type="primary"
								children="Follow Back"
								className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
							/>
						) : (
							<Button
								size="small"
								type="primary"
								children="Unfollow"
								className="mx-auto w-full bg-blue-600 mt-6 text-white border-none py-2"
							/>
						)}
					</div>
				</div>
			</div>

			<ModalWrapper
				visible={visibleEditProfile}
				setVisible={setVisibleEditProfile}
			>
				<div className="mt-2">
					<div className="text-center">
						<h1 className="font-bold text-2xl text-blue-600 ">
							Update Profile
						</h1>
					</div>

					<form onSubmit={onSubmitHandler}>
						<Input
							label="Name"
							inputType="input"
							type="text"
							placeholder="Enter your name"
							name="username"
							value={editPostData.username}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>

						<Input
							label="City"
							inputType="input"
							type="text"
							placeholder="Enter your city"
							name="city"
							value={editPostData.city}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
							list="cities"
							id="city"
							citiesArray={citiesArray}
							setCitiesArray={setCitiesArray}
						/>
						<datalist id="cities">
							{citiesArray.map((city) => (
								<option value={city.name + ", " + city.country.name} />
							))}
						</datalist>

						<Input
							label="Email"
							inputType="input"
							type="email"
							placeholder="Enter your email"
							name="email"
							value={editPostData.email}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>
						{currentUser.usertype === "designer" ? (
							<Input
								label="Dribbble Username"
								inputType="input"
								type="text"
								placeholder="Enter your username"
								name="dribbbleusername"
								value={editPostData.dribbbleusername}
								state={editPostData}
								setState={setEditPostData}
								labelClass="mt-4"
							/>
						) : currentUser.usertype === "developer" ? (
							<Input
								label="Github Username"
								inputType="input"
								type="text"
								placeholder="Enter your Username"
								name="githubUsername"
								value={editPostData.githubUsername}
								state={editPostData}
								setState={setEditPostData}
								labelClass="mt-4"
							/>
						) : (
							<>
								<Input
									label="Github Username"
									inputType="input"
									type="text"
									placeholder="Enter your Username"
									name="githubUsername"
									value={editPostData.githubUsername}
									state={editPostData}
									setState={setEditPostData}
									labelClass="mt-4"
								/>
								<Input
									label="Dribbble Username"
									inputType="input"
									type="text"
									placeholder="Enter your username"
									name="dribbbleusername"
									value={editPostData.dribbbleusername}
									state={editPostData}
									setState={setEditPostData}
									labelClass="mt-4"
								/>
							</>
						)}
						<Input
							label="Portfolio URL"
							inputType="input"
							type="text"
							placeholder="Enter URL"
							name="portfolioURL"
							value={editPostData.portfolioURL}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>
						<Input
							label="Description"
							inputType="textarea"
							placeholder="Description about you"
							name="description"
							value={editPostData.description}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
							rows={3}
						/>
						<div className="flex flex-col items-start my-4">
							<label
								htmlFor="input"
								className="text-base mb-2 font-medium font-sample"
							>
								Profile Image
							</label>
							<input
								type="file"
								placeholder="choose image"
								name="profileimage"
								onChange={uploadImage}
							/>
							<span className="text-sm text-gray-400 my-2">
								<i>
									Note: To change the uploaded file click on Choose file again
								</i>
							</span>
						</div>
						{/* <Input
							label="Profile image"
							inputType="input"
							type="file"
							placeholder="choose image"
							name="profileimage"
							value={editPostData.profileimage}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
							setPreviewSource={setPreviewSource}
							previewSource={previewSource}
						/> */}
						{/* {previewSource ? (
							<>
								<img
									src={previewSource}
									alt="profileImage"
									className="w-40 mt-2 rounded-xl shadow-xl object-cover"
								/>
								<button
									onClick={() => setPreviewSource("")}
									className="flex items-center my-2"
								>
									<img src={Close} alt="profileImage" className="mr-2" /> Remove
								</button>
							</>
						) : null} */}

						<Button
							type="primary"
							size="full"
							className="my-4"
							isLoading={loading}
						>
							Update Profile 😎
						</Button>
					</form>
				</div>
			</ModalWrapper>
		</>
	);
};

export default ProfileOverview;
