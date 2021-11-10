import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Trash } from "../../assets/DashboardIcons/trash.svg";
import { ReactComponent as Edit } from "../../assets/DashboardIcons/edit.svg";
import { ReactComponent as Avatar } from "../../assets/DashboardIcons/gitprofile.svg";
import { ReactComponent as DeleteImage } from "../../assets/deletepop.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalWrapper from "../ModalWrapper";
import { toast } from "react-toastify";

const ProfilePost = ({
  title = "Design & Develop",
  description = `is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled
  it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged.`,
  self = false,
  requireddeveloper = 2,
  requiredDesigner = 5,
  date = "15 Jun 2021",
}) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleRequest, setVisibleRequest] = useState(false);

  const [editPostData, setEditPostData] = useState({
    title,
    description,
    developers: requireddeveloper,
    designers: requiredDesigner,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(editPostData);
    toast.success("Your post is successfully updated💯", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setVisibleEdit(!visibleEdit);
  };

  const requestData = [
    {
      name: "Manvi Jain",
      image: "http://exclaim.ca/images/halsey_2.jpg",
      id: 1,
    },
    {
      name: "Yash Sharma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGgSYfz5J7rBvmLtYgaAgIBpbw6rvipHm3Dz2bI_mjl0VGQThsXNxoAdFJYognTZ5P2I&usqp=CAU",
      id: 2,
    },
    {
      name: "Mihir Verma",
      image:
        "https://www.nme.com/wp-content/uploads/2018/03/halsey-announces-world-tour-tickets-696x442.jpg",
      id: 3,
    },
    {
      name: "Meemansha Jain",
      image:
        "https://78.media.tumblr.com/0d781701dd670e1a107a433f16bcccbd/tumblr_pblvslOfKs1ufzypwo1_1280.jpg",
      id: 4,
    },
    {
      name: "Manvi Jain",
      image: "http://exclaim.ca/images/halsey_2.jpg",
      id: 1,
    },
    {
      name: "Yash Sharma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGgSYfz5J7rBvmLtYgaAgIBpbw6rvipHm3Dz2bI_mjl0VGQThsXNxoAdFJYognTZ5P2I&usqp=CAU",
      id: 2,
    },
    {
      name: "Mihir Verma",
      image:
        "https://www.nme.com/wp-content/uploads/2018/03/halsey-announces-world-tour-tickets-696x442.jpg",
      id: 3,
    },
    {
      name: "Meemansha Jain",
      image:
        "https://78.media.tumblr.com/0d781701dd670e1a107a433f16bcccbd/tumblr_pblvslOfKs1ufzypwo1_1280.jpg",
      id: 4,
    },
    {
      name: "Manvi Jain",
      image: "http://exclaim.ca/images/halsey_2.jpg",
      id: 1,
    },
    {
      name: "Yash Sharma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGgSYfz5J7rBvmLtYgaAgIBpbw6rvipHm3Dz2bI_mjl0VGQThsXNxoAdFJYognTZ5P2I&usqp=CAU",
      id: 2,
    },
    {
      name: "Mihir Verma",
      image:
        "https://www.nme.com/wp-content/uploads/2018/03/halsey-announces-world-tour-tickets-696x442.jpg",
      id: 3,
    },
    {
      name: "Meemansha Jain",
      image:
        "https://78.media.tumblr.com/0d781701dd670e1a107a433f16bcccbd/tumblr_pblvslOfKs1ufzypwo1_1280.jpg",
      id: 4,
    },
  ];

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
            {requireddeveloper}
            {requireddeveloper > 1 ? " Developers, " : " Developer, "}
            {requiredDesigner}
            {requiredDesigner > 1 ? " Designers" : " Designer"}
          </div>
          <div className=" ml-auto  text-gray-400">{date}</div>
        </div>

        <div className="flex w-auto text-sm font-semibold items-center justify-between mt-4">
          {self ? (
            <>
              <div className="flex items-center">
                <Button
                  size="small"
                  children="View requests"
                  type="primary"
                  className="h-10 mr-2 "
                  onClick={() => setVisibleRequest(!visibleRequest)}
                />
              </div>
              <div className="flex text-blue-600 my-auto">
                <div className=" items-center mr-2 flex">
                  <Button
                    size="icon"
                    className="p-2"
                    type="warning"
                    onClick={() => setVisibleEdit(!visibleEdit)}
                  >
                    <Edit />
                  </Button>
                </div>
                <div className=" items-center mr-2 flex ">
                  <Button
                    size="icon"
                    className="p-2 bg-red-500"
                    onClick={() => setVisibleDelete(!visibleDelete)}
                  >
                    <Trash />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center w-full">
                <Button
                  size="full"
                  children="Let's collab 🤝"
                  type="primary"
                  className="h-10"
                />
              </div>
            </>
          )}
        </div>
      </motion.div>

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
              // isLoading={true}
            >
              <Trash />
              <span className="ml-2">Delete</span>
            </Button>
          </div>
        </div>
      </ModalWrapper>

      <ModalWrapper visible={visibleEdit} setVisible={setVisibleEdit}>
        <div className="mt-2">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-blue-600 ">Update Post</h1>
          </div>

          <form onSubmit={onSubmitHandler}>
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
              label="Title"
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
            <Button type="primary" size="full" className="my-4">
              Update post 🧾
            </Button>
          </form>
        </div>
      </ModalWrapper>

      <ModalWrapper visible={visibleRequest} setVisible={setVisibleRequest}>
        <div className="mt-2">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-blue-600">Update Post</h1>
          </div>
          <div className="mt-4">
            {requestData.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex justify-between items-center mt-2 py-3 px-4 bg-blue-50 rounded-xl"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover object-center rounded-full "
                      style={{ height: "40px", width: "40px" }}
                    />
                    <h5 className="font-medium ml-5 ">{item.name}</h5>
                  </div>
                  <Button type="primary" className="" size="small">
                    Accept
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ProfilePost;
