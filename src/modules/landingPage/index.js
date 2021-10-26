import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../assets/Hero.png";
import About from "../../assets/About.png";
import Navigate from "../../assets/Navigate.png";
import Contact from "../../assets/Contact.png";
import { WhyData } from "../landingPage/_components/whyMoveEasy/why.data.js";
import { ReactComponent as UnderLine } from "../../assets/shared/underline2.svg";
import Button from "../../components/Button";
import Why from "./_components/whyMoveEasy";
import Faqs from "./_components/faq's";
import Input from "../../components/Input";
import { FaqData } from "./_components/faq's/faq.data";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Landing = () => {
	const [query, setQuery] = useState({
		name: "",
		email: "",
		message: "",
	});
	const history = useHistory();
	const routeChange = () => {
		let path = `/signup`;
		history.push(path);
	};
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_2gvm163",
				"template_fqdzahp",
				form.current,
				"user_ATUT81Ji9zh87IWKoU2rE"
			)
			.then(
				(result) => {
					setQuery({ name: "", email: "", message: "" });
					toast.success(
						"Thankyou for reaching us😊. Our team will get back to you soon!🤝",
						{
							position: "top-center",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						}
					);
				},
				(error) => {
					setQuery({ name: "", email: "", message: "" });
					toast.error("Oops😅! Error has occured. Please try again later", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
	};
	return (
		<>
			<Header />
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-200 via-blue-100 to-white min-h-screen pb-10 ">
				<div className="p-3  flex flex-col text-center justify-center items-center pt-20 mx-auto md:max-w-7xl md: lg:flex-row-reverse lg:px-6 lg:py-12 lg:text-left lg:justify-between lg:pt-28">
					<div className="lg:w-2/5">
						<motion.img
							src={Hero}
							alt="hero"
							drag
							dragConstraints={{
								top: -50,
								left: -50,
								right: 50,
								bottom: 50,
							}}
						/>
					</div>

					<div className="flex flex-col justify-center items-center md:max-w-sm md:mt-6 lg:items-start">
						<div className="mb-4">
							<h1 className="text-5xl font-extrabold mb-2">
								Make it <span className="text-blue-600">Happen!</span>
							</h1>
							<UnderLine className="mx-auto lg:m-0 lg:w-52" />
						</div>
						<p className="text-md text-gray-500 mb-4">
							Let's work together to create real-world projects with stronger
							UIs, fresh ideas, and a team of designers and developers who can
							make it happen.
						</p>
						<Button
							type="primary"
							size="medium"
							hasShadow
							children="Get Started"
							onClick={routeChange}
						/>
					</div>
				</div>
			</section>
			{/*  */}
			{/* About Section */}
			<section
				id="about"
				className="flex flex-col justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:justify-between lg:px-0 lg:mx-auto lg:text-left lg:pb-0 md:py-20  md:flex md:flex-col-reverse"
			>
				<div className="lg:w-2/5">
					<motion.img
						className="p-4 w-full"
						src={About}
						alt="About"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					/>
				</div>
				<div className="px-8 md:px-20 lg:px-0 lg:w-1/2 md:pb-20">
					<h1 className="text-4xl mb-2 font-extrabold">About Us</h1>
					<p className="text-sm text-gray-500">
						D&D was an idea that came while researching collaboration
						opportunities for software designers and developers. When we looked
						closely we found there was no such platform for them to work
						together. Therefore we decided to create D & D, make it happen. Our
						platform connects designers and developers through their work and
						assists in the creation of job prospects for them. They have the
						resources to build trust among themselves as we showcase their
						previous work on our platform.
						<br /> <br />
						D&D delivers an interactive space for individuals planning to work
						together. Our team collaborated closely to establish a platform that
						allows designers and developers can collaborate and build
						professional relationships of trust, as well as assist one another
						in developing new and unique projects with interactive user
						interfaces.
					</p>
				</div>
			</section>
			{/*  */}
			{/* Navigate */}
			<section id="learn" className="w-full">
				<div className="flex mx-auto flex-col-reverse justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:text-left md:py-0 md:flex md:flex-col">
					<div className="mt-8 px-8 md:px-20 lg:px-0 lg:w-1/2 ">
						<h1 className="py-1 font-extrabold px-0 text-4xl mb-2 lg:w-96">
							Navigate Through D&D!
						</h1>
						<p className="text-sm text-gray-500">
							<span className="font-medium">
								Create a reality for your idea with a collaborator.
							</span>
							<br /> <br />
							Making your ideas come true just became better with D&D. Choose a
							collaborator, review their work, interact with them and finally
							decide whether or not to collaborate with them. All you have to do
							now is write about your idea, find a collaborator and make your
							idea happen.
						</p>
					</div>
					<div className="lg:w-2/5">
						<motion.img
							className="p-4 w-full"
							src={Navigate}
							alt="About"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						/>
					</div>
				</div>
			</section>
			{/*  */}
			{/* Why Section */}
			<section
				id="why"
				className="my-8 flex mx-auto flex-col justify-center align-center p-3 md:max-w-7xl lg:py-12 md:mt-20 "
			>
				<div className="text-center">
					<h1 className="text-4xl font-base mb-2 font-extrabold">
						Why Design & Develop?
					</h1>
					<p className="font-extralight my-4 px-8 text-sm md:px-20 ">
						To make an idea a reality, teamwork is mandatory. Find your own
						team, to create your imagination into ambition
					</p>
				</div>
				<div className="mx-auto md:flex md:flex-wrap md:justify-evenly lg:justify-center">
					{WhyData.map((elem, index) => {
						return (
							<Why
								key={index}
								color={elem.color}
								head={elem.head}
								para={elem.para}
								className="mt-4"
							/>
						);
					})}
				</div>
			</section>
			{/*  */}
			{/* FAQS */}
			<section
				id="faq"
				className="w-full my-10 flex mx-auto flex-col justify-center align-center p-3 md:max-w-7xl lg:py-12 "
			>
				<div className="text-center">
					<h1 className="text-4xl font-base font-extrabold">
						Frequently Asked Questions
					</h1>
				</div>
				<div className="mx-auto md:flex md:flex-wrap md:justify-evenly lg:justify-center">
					{FaqData.map((elem, index) => {
						return (
							<Faqs
								key={index}
								color={elem.color}
								head={elem.head}
								para={elem.para}
								className="mt-2"
							/>
						);
					})}
				</div>
			</section>
			{/*  */}
			{/* Query Section */}
			<section className="w-full">
				<div className="mb-20 max-w-7xl md:px-12 lg:mx-auto">
					<div className="text-center mb-10">
						<h1 className="text-4xl font-base mb-2 font-extrabold">
							Send Us A Query
						</h1>
					</div>
					<div className=" p-8 bg-blue-100 flex flex-col-reverse md:px-14 md:py-14 md:rounded-3xl lg:flex-row justify-evenly">
						<div className="form bg-white rounded-2xl p-6 py-8 md:px-10 lg:w-96">
							<form ref={form}>
								<Input
									type="text"
									inputType="input"
									placeholder="Enter your name"
									label="Name"
									value={query.name}
									state={query}
									setState={setQuery}
									name="name"
									id="name"
								/>
								<Input
									type="email"
									inputType="input"
									placeholder="Enter your email"
									label="Email"
									labelClass="mt-4"
									value={query.email}
									state={query}
									setState={setQuery}
									name="email"
									id="email"
								/>
								<Input
									type="text"
									inputType="textarea"
									placeholder="Enter a message"
									label="Message"
									labelClass="mt-4"
									value={query.message}
									state={query}
									setState={setQuery}
									name="message"
									id="message"
								/>
								<Button
									type="primary"
									size="full"
									hasShadow
									children="Submit"
									className="mt-4"
									isloading="true"
									onClick={sendEmail}
								/>
							</form>
						</div>
						<div className="text-center mb-4 px-6 lg:w-80 lg:flex lg:flex-col lg:justify-center lg:items-center xl:w-96">
							<h3 className="text-3xl font-base mb-3 font-extrabold">
								Get a quote
							</h3>
							<p className="text-sm text-gray-600 font-extralight">
								Fill out the form and we will contact you within the next 24
								hours.
							</p>
							<img
								src={Contact}
								alt="contact"
								className="hidden w-full lg:flex lg:ml-44 lg:my-10"
							/>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<Footer />
		</>
	);
};
export default Landing;
