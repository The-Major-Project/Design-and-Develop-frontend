import React from "react";
import Button from "../../components/Button";
import About from "../../assets/About.png";
// import Header from "../components/Header";
// import Footer from "../components/Footer"
import Hero from "../../assets/Hero.png";
import { ReactComponent as UnderLine } from "../../assets/underline2.svg";
const LandingPage = () => {
  return (
    <>
      {/* <Header/> */}
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

      <section className="flex flex-col justify-center items-center text-center p-3 md:max-w-7xl lg:flex-row lg:text-left md:py-20">
        <div className="lg:w-2/5">
          <img className="p-4 w-full" src={About} alt="About" />
        </div>
        <div className="md:px-20 lg:px-0 lg:w-1/2">
          <h1 className="text-4xl mb-2">About Us</h1>
          <p className="text-sm text-gray-500">
            Uddoktagiri Digital is a Digital Agency focused on providing fully
            Customised, Growth oriented and ROI (Return On Investment) based
            Digitalisation services. We are a team of professional digital
            marketing experts. <br/> <br/>We strive to transform your marketing experience
            taking it to a brand-new level. We are lucubrating here in
            Uddoktagiri Digital with all our heart and mind. We are into
            providing digital-marketing solutions and are committed to propel
            your business to the top of search rankings.
          </p>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default LandingPage;
