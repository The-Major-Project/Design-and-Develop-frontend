import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { ReactComponent as Cross } from "../../assets/X.svg";
import { toast } from "react-toastify";

const PostCollabJobModal = ({ visible, setVisible }) => {
	const [postData, setPostData] = useState({
		title: "",
		description: "",
		developers: 0,
		designers: 0,
	});

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(postData);
		toast.success("Your collab job is successfully posted 💯", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setVisible(!visible);
	};

	if (!visible) return null;

	return (
		<div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-modalBG z-50 flex items-center justify-center">
			<div className="bg-white z-50 w-5/6 md:w-100 md:px-9 py-8 px-6 rounded-2xl relative cursor-default">
				<Cross
					className="absolute right-8 cursor-pointer"
					onClick={() => setVisible(!visible)}
				/>
				<form onSubmit={onSubmitHandler}>
					<Input
						label="Title"
						inputType="input"
						type="text"
						placeholder="Title of your project"
						name="title"
						value={postData.title}
						state={postData}
						setState={setPostData}
						labelClass="mt-4"
					/>
					<Input
						label="Title"
						inputType="textarea"
						placeholder="Description of your project"
						name="description"
						value={postData.description}
						state={postData}
						setState={setPostData}
						labelClass="mt-4"
						rows={3}
					/>
					<Input
						label="Developers required"
						inputType="input"
						type="number"
						placeholder="e.g. 2"
						name="developers"
						value={postData.developers}
						state={postData}
						setState={setPostData}
						labelClass="mt-4"
					/>
					<Input
						label="Designers required"
						inputType="input"
						type="number"
						placeholder="e.g. 2"
						name="designers"
						value={postData.designers}
						state={postData}
						setState={setPostData}
						labelClass="mt-4"
					/>
					<Button type="primary" size="full" className="my-4">
						Post 🧾
					</Button>
				</form>
			</div>
		</div>
	);
};

export default PostCollabJobModal;
