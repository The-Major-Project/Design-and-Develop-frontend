import React, { useEffect, useState } from "react";
import icon from "../../assets/NotificationIcons/icon.jpg";
import Button from "../Button";
import axios from "../../api/api";
import { toast } from "react-toastify";
const NotificationBar = ({ reqType, senderUserId, postId, notifId }) => {
	// eslint-disable-next-line no-unused-vars
	const [post, setPost] = useState(null);
	const [sender, setSender] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			try {
				// setLoading(true);
				const res = await axios.get(`/api/user/${senderUserId}`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						accessToken: localStorage.getItem("accessToken"),
					},
				});
				setSender(res.data.data);
				console.log(res);
			} catch (err) {}
		};
		getUser();
	}, []);

	const handleAccept = async () => {
		try {
			setLoading(true);
			const res = await axios.put(
				`/api/user/${senderUserId}/acceptnotification`,
				{
					postId: postId,
					currentUserId: localStorage.getItem("userId"),
				}
			);
			console.log(res);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const viewPost = async () => {
		try {
			const res = await axios.get(`/api/posts/${postId}`, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					accessToken: localStorage.getItem("accessToken"),
				},
				credentials: "include",
				withCredentials: true,
			});
			setPost(res.data);
			console.log("Res", res.data);
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			// history.push("/login");
		}
	};

	return (
		<div className="flex flex-col px-6 py-8 md:py-4 my-6 mx-auto items-center border-2 border-blue-100 rounded-3xl w-full md:flex-row max-w-5xl">
			<img
				className="w-16 h-16 object-cover object-center md:h-12 md:w-12 rounded-full"
				src={sender.profileimage || icon}
				alt={sender.name}
			/>
			<h1 className="text-blue-600 font-bold text-base md:ml-6 md:mr-2">
				{sender.name}
			</h1>

			{reqType === "collabreq" ? (
				<>
					<p className="text-gray-400 mb-5 md:mb-0">
						sent you a collaboration request 🤝
					</p>
					<div className="flex justify-evenly w-full md:w-auto md:ml-auto">
						<Button
							className="md:mx-8 "
							size="small"
							type="secondary"
							children="View Post"
							// onClick={viewPost}
						/>
						<Button
							size="small"
							type="primary"
							children="Accept"
							onClick={handleAccept}
							isLoading={loading}
						/>
					</div>
				</>
			) : reqType === "acceptreq" ? (
				<>
					<p className="text-gray-400 mb-5 md:mb-0">
						accepted your collab request 🎉
					</p>
					<div className="flex justify-evenly w-full md:w-auto md:ml-auto">
						<Button
							className="md:mx-8 "
							size="small"
							type="secondary"
							children="View Post"
							// onClick={viewPost}
						/>
						<Button
							className="md:ml-auto"
							size="small"
							type="success"
							children="View Group"
							// onClick={}
						/>
					</div>
				</>
			) : null}
		</div>
	);
};

export default NotificationBar;
