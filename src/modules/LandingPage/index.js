import React from "react";
import Button from "../../components/Button";
import About from "../../assets/About.png";
import Header from "../../components/Header";
import Navigate from "../../assets/Navigate.png";
import Why from "./_components/Why";
// import Footer from "../components/Footer"
import Hero from "../../assets/Hero.png";
import {WhyData} from "./_components/WhyData.js"
import { ReactComponent as UnderLine } from "../../assets/underline2.svg";
const LandingPage = () => {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-blue-200 via-blue-100 to-white h-screen ">
        <div className="p-3  flex flex-col text-center justify-center items-center pt-20 mx-auto md:max-w-7xl md: lg:flex-row-reverse lg:px-6 lg:py-12 lg:text-left lg:justify-between lg:pt-28">
          <div className="lg:w-2/5">
            <img src={Hero} alt="hero" />
          </div>

          <div className="flex flex-col justify-center items-center md:max-w-sm md:mt-6 lg:items-start">
            <div className="mb-4">
              <h2 class="text-5xl font-extrabold mb-2">
                Make it <span className="text-blue-600">Happen!</span>
              </h2>
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
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:justify-between lg:px-0 lg:mx-auto lg:text-left lg:pb-0 md:py-20">
        <div className="lg:w-2/5">
          <img className="p-4 w-full" src={About} alt="About" />
        </div>
        <div className="px-12 md:px-20 lg:px-0 lg:w-1/2">
          <h1 className="text-4xl mb-2">About Us</h1>
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

      <section className="flex flex-col-reverse justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:text-left md:py-0">
        <div className="mt-8 px-12 md:px-20 lg:px-0 lg:w-1/2">
          <h1 className="py-1 px-0 text-4xl mb-2 lg:w-96">
            Navigate Through Design And Develop!
          </h1>
          <p className="text-sm text-gray-500">
            Get closer to your goals with active Instagram followers
            <br /> <br />
            Getting more followers for your IG account just got a whole lot
            easier. All you need to do is select the package that is most
            appealing to you, type in your Instagram username, and check the
            order out through our secure payment portal.
          </p>
        </div>
        <div className="lg:w-2/5">
          <img className="p-4 w-full" src={Navigate} alt="About" />
        </div>
      </section>

      <section className="text-center p-3 w-full mt-5 md:max-w-7xl md:py-12 lg:mx-auto">
        <div className="px-12 md:px-20">
          <h1 className="py-3 text-4xl mb-2">Why Design & Develop?</h1>
          <p className="text-sm text-gray-500 md:px-12 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore magna aliquyam erat.
          </p>
        </div>
        <div className = "flex flex-col justify-center items-center w-full md:flex-wrap md:flex-row justify-evenly lg:max-w-7xl lg:px-20">
          {WhyData.map((elem) => {
            return (
              <Why color = {elem.color}
              head = {elem.head}
              para = {elem.para}
              custom = "mt-6"/>
            )
          })}
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default LandingPage;
