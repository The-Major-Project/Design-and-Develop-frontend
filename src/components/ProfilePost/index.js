import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Trash } from "../../assets/DashboardIcons/trash.svg";
import { ReactComponent as Edit } from "../../assets/DashboardIcons/edit.svg";
import { ReactComponent as Avatar } from "../../assets/DashboardIcons/gitprofile.svg";
import { ReactComponent as DeleteImage } from "../../assets/deletepop.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalWrapper from "../ModalWrapper";
import { toast } from "react-toastify";
import axios from "../../api/api";
import { stateContext } from "../../context/DNDContext";
import { useParams } from "react-router";

const ProfilePost = ({
	title,
	description,
	self,
	postId,
	designer,
	developer,
	date = "15 Jun 2021",
	setUserPost,
	requestors = [],
}) => {
	const [loading, setLoading] = useState(false);
	const [loadingUpdate, setLoadingUpdate] = useState(false);
	const [loadingRequest, setLoadingRequest] = useState(false);
	const [visibleEdit, setVisibleEdit] = useState(false);
	const [visibleDelete, setVisibleDelete] = useState(false);
	const { currentUser } = useContext(stateContext);
	const [btnText, setBtnText] = useState("Let's collab 🤝");
	const [disabled, setDisabled] = useState(
		requestors.includes(localStorage.getItem("userId"))
	);

	const params = useParams();

	const [editPostData, setEditPostData] = useState({
		title,
		description,
		developers: developer,
		designers: designer,
	});

	const handleLetsCollab = async () => {
		setLoadingRequest(true);
		try {
			const res = await axios.put(
				`/api/posts/${localStorage.getItem("userId")}/collabrequest`,
				{
					postId: postId,
				}
			);
			console.log(res);
			const resNotify = await axios.put(`/api/user/${params.id}/notification`, {
				currentUserId: localStorage.getItem("userId"),
				postId: postId,
			});
			console.log(resNotify);
			setLoadingRequest(false);
			setBtnText("Collab req sent 🛩️");
			setDisabled(true);
			toast.success("Your collaboration request was sent successfully 💯", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (err) {
			console.log(err);
			setLoading(false);
			toast.error(err, {
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

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoadingUpdate(true);
		console.log(editPostData);
		try {
			const res = await axios.put(`/api/posts/${postId}`, {
				title: editPostData.title,
				description: editPostData.description,
				developer: editPostData.developers,
				designer: editPostData.designers,
				userId: localStorage.getItem("userId"),
			});
			console.log(res);
			const resPost = await axios.get(
				`/api/posts/${localStorage.getItem("userId")}/all`,
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
						userId: localStorage.getItem("userId"),
					},
				}
			);
			setUserPost(resPost.data.data);
			setLoadingUpdate(false);
			console.log(currentUser.name, currentUser._id, currentUser.profileimage);
			toast.success("Your collab job is successfully updated 💯", {
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
		setVisibleEdit(!visibleEdit);
	};

	const handleDelete = async () => {
		setLoading(true);
		try {
			const res = await axios.delete(`/api/posts/${postId}`, {
				userId: localStorage.getItem("userId"),
			});
			console.log(res);
			const resPost = await axios.get(
				`/api/posts/${localStorage.getItem("userId")}/all`,
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
						userId: localStorage.getItem("userId"),
					},
				}
			);
			setUserPost(resPost.data.data);
			toast.success("Your post is deleted 🗑️", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setVisibleDelete(!visibleDelete);
		} catch (err) {
			const msg = err.response.data.message;
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
			<motion.div
				className="w-68 rounded-2xl px-4 py-5 border-2"
				whileHover={{ scale: 1.05 }}
			>
				<div className="flex items-center">
					<Avatar />
					<h3
						className=" text-lg font-bold truncate ... ml-2 text-blue-600 "
						style={{ "max-width": "20ch" }}
					>
						{title}
					</h3>
				</div>
				<div className="mt-2">
					<p
						className=" text-sm overflow-clip overflow-hidden "
						style={{ "max-width": "50ch", "max-height": "100px" }}
					>
						{description}
					</p>
				</div>

				<div className="text-blue-600 text-xs font-medium mt-2 w-full flex">
					<div>
						{developer}
						{developer > 1 ? " Developers, " : " Developer, "}
						{designer}
						{designer > 1 ? " Designers" : " Designer"}
					</div>
					<div className=" ml-auto  text-gray-400">{date}</div>
				</div>

				<div className="flex w-auto text-sm font-semibold items-center justify-between mt-4">
					{self ? (
						<>
							<div className="flex text-blue-600 my-auto">
								<div className=" items-center mr-2 flex">
									<Button
										size="icon"
										className="p-4"
										type="warning"
										onClick={() => setVisibleEdit(!visibleEdit)}
									>
										<Edit className="mr-2" /> Edit
									</Button>
								</div>
								<div className=" items-center mr-2 flex ">
									<Button
										size="icon"
										className="p-4 bg-red-500 text-white"
										onClick={() => setVisibleDelete(!visibleDelete)}
									>
										<Trash className="mr-2" /> Delete
									</Button>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="flex items-center w-full">
								<Button
									size="full"
									children={btnText}
									type="primary"
									className="h-10"
									onClick={handleLetsCollab}
									isLoading={loadingRequest}
									disabled={disabled}
								/>
							</div>
						</>
					)}
				</div>
			</motion.div>

			{/* Delete Post */}
			<ModalWrapper visible={visibleDelete} setVisible={setVisibleDelete}>
				<div className=" text-center mt-6">
					<h1 className="font-bold text-2xl text-blue-600">
						Are you sure want to delete?
					</h1>
					<div className="w-full  mt-10">
						<DeleteImage className="mx-auto w-auto" width="250" height="250" />
					</div>
					<div className=" inline-flex mx-auto mt-16">
						<Button
							className="py-2 w-32 mr-6"
							type="primary"
							size="small"
							onClick={() => setVisibleDelete(!visibleDelete)}
						>
							Cancel
						</Button>
						<Button
							className="py-2 bg-red-500 w-32 text-white ml-6"
							size="small"
							isLoading={loading}
							onClick={handleDelete}
						>
							<Trash />
							<span className="ml-2">Delete</span>
						</Button>
					</div>
				</div>
			</ModalWrapper>

			{/* Edit Post */}
			<ModalWrapper visible={visibleEdit} setVisible={setVisibleEdit}>
				<div className="mt-2">
					<div className="text-center">
						<h1 className="font-bold text-2xl text-blue-600 ">Update Post</h1>
					</div>

					<form>
						<Input
							label="Title"
							inputType="input"
							type="text"
							placeholder="Title of your project"
							name="title"
							value={editPostData.title}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>
						<Input
							label="Description"
							inputType="textarea"
							placeholder="Description of your project"
							name="description"
							value={editPostData.description}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
							rows={3}
						/>
						<Input
							label="Developers required"
							inputType="input"
							type="number"
							placeholder="e.g. 2"
							name="developers"
							value={editPostData.developers}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>
						<Input
							label="Designers required"
							inputType="input"
							type="number"
							placeholder="e.g. 2"
							name="designers"
							value={editPostData.designers}
							state={editPostData}
							setState={setEditPostData}
							labelClass="mt-4"
						/>
						<Button
							type="primary"
							size="full"
							className="my-4"
							onClick={onSubmitHandler}
							isLoading={loadingUpdate}
						>
							Update post 🧾
						</Button>
					</form>
				</div>
			</ModalWrapper>
		</>
	);
};

export default ProfilePost;
