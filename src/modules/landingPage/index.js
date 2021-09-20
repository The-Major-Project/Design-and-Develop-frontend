import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
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

const Landing = () => {

  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  })
  const history = useHistory();
  const routeChange = () => {
    let path = `/Signup`;
    history.push(path);
  }
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 via-blue-100 to-white min-h-screen ">
        <div className="p-3  flex flex-col text-center justify-center items-center pt-20 mx-auto md:max-w-7xl md: lg:flex-row-reverse lg:px-6 lg:py-12 lg:text-left lg:justify-between lg:pt-28">
          <div className="lg:w-2/5">
            <motion.img src={Hero} alt="hero" drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }} />
          </div>

          <div className="flex flex-col justify-center items-center md:max-w-sm md:mt-6 lg:items-start">
            <div className="mb-4">
              <h1 className="text-5xl font-extrabold mb-2">
                Make it <span className="text-blue-600">Happen!</span>
              </h1>
              <UnderLine className="mx-auto lg:m-0 lg:w-52" />
            </div>
            <p className="text-md text-gray-500 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ex vitae sequi nostrum quidem vero odio repudiandae expedita, quis
              aliquam
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
      <section id="about" className="flex flex-col justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:justify-between lg:px-0 lg:mx-auto lg:text-left lg:pb-0 md:py-20">
        <div className="lg:w-2/5">
          <motion.img className="p-4 w-full" src={About} alt="About" whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} />
        </div>
        <div className="px-8 md:px-20 lg:px-0 lg:w-1/2">
          <h1 className="text-4xl mb-2 font-extrabold">About Us</h1>
          <p className="text-sm text-gray-500">
            Uddoktagiri Digital is a Digital Agency focused on providing fully
            Customised, Growth oriented and ROI (Return On Investment) based
            Digitalisation services. We are a team of professional digital
            marketing experts. <br /> <br />
            We strive to transform your marketing experience taking it to a
            brand-new level. We are lucubrating here in Uddoktagiri Digital with
            all our heart and mind. We are into providing digital-marketing
            solutions and are committed to propel your business to the top of
            search rankings.
          </p>
        </div>
      </section>
      {/*  */}
      {/* Navigate */}
      <section id="learn" className="w-full">
        <div className="flex mx-auto flex-col-reverse justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:text-left md:py-0">
          <div className="mt-8 px-8 md:px-20 lg:px-0 lg:w-1/2">
            <h1 className="py-1 font-extrabold px-0 text-4xl mb-2 lg:w-96">
              Navigate Through D&D!
            </h1>
            <p className="text-sm text-gray-500">
              <span className="font-medium">
                Get closer to your goals with active Instagram followers
              </span>
              <br /> <br />
              Getting more followers for your IG account just got a whole lot
              easier. All you need to do is select the package that is most
              appealing to you, type in your Instagram username, and check the
              order out through our secure payment portal.
            </p>
          </div>
          <div className="lg:w-2/5">
            <motion.img className="p-4 w-full" src={Navigate} alt="About" whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} />
          </div>
        </div>
      </section>
      {/*  */}
      {/* Why Section */}
      <section id="why" className="my-20 flex mx-auto flex-col justify-center align-center p-3 md:max-w-7xl lg:py-20 ">
        <div className="text-center">
          <h1 className="text-4xl font-base mb-2 font-extrabold">
            Why Design & Develop?
          </h1>
          <p className="font-extralight my-4 px-8 text-sm md:px-20 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore magna
          </p>
        </div>
        <div className="mx-auto md:flex md:flex-wrap md:justify-evenly lg:justify-center">
          {WhyData.map((elem) => {
            return (
              <Why
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
      <section id="faq" className="w-full my-10 flex mx-auto flex-col justify-center align-center p-3 md:max-w-7xl lg:py-20 ">
        <div className="text-center">
          <h1 className="text-4xl font-base mb-2 font-extrabold">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mx-auto md:flex md:flex-wrap md:justify-evenly lg:justify-center">
          {FaqData.map((elem) => {
            return (
              <Faqs
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
            <div className="form bg-white rounded-2xl p-6 py-8 md:px-10 lg:w-96" >
              <form>
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
                />
              </form>
            </div>
            <div className="text-center mb-4 px-6 lg:w-80 lg:flex lg:flex-col lg:justify-center lg:items-center xl:w-96">
              <h3 className="text-3xl font-base mb-2 font-extrabold">
                Get a quote
              </h3>
              <p className="text-sm text-gray-600 font-extralight">
                Fill out the form and we will contact you within the next 24
                hours.
              </p>
              <img src={Contact} alt="contact" className="hidden w-full lg:flex" />
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
