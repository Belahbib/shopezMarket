import {  useNavigate } from "react-router-dom";
import Login from "./login";
import { useState } from "react";
import Register from "./register";

const Landing = () => {
  const navigate = useNavigate();
  const [ClickLogin, setClickLogin] = useState(false);
  const [ClickRegister, setClickRegister] = useState(false);

  const navigateHome = () => {
    navigate("/"); // Navigate to home
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleDiscoverClick = () => {
    navigate("/"); // Navigate to home
    window.scrollTo(0, 460);
  };

  const handleFeatures = () => {
    navigate("/"); // Navigate to login
    window.scrollTo(0, 1100);
  };

  return (
    <>
      {ClickLogin && (
        <div className="relative">
          <div className="fixed   top-1 righ-1/2 w-full z-40">
            <button
              className=" absolute bg-gray-200   p-1 w-6 h-6 rounded-full z-40"
              style={{ top: "3.5%", right: "34%" }}
              onClick={() => setClickLogin(false)}
            >
              {" "}
              <img src="cross2.png" alt="" />
            </button>
            <Login />
          </div>
        </div>
      )}
      {ClickRegister && (
        <div className="relative">
        <div className="fixed top-0 righ-1/2 w-full z-40">
          <button
            className=" absolute bg-gray-200   p-1 w-6 h-6 rounded-full z-40"
            style={{ top: "1.5%", right: "33.5%" }}
            onClick={() => setClickRegister(false)}
          >
            <img src="cross2.png" alt="cross" />
          </button>
          <Register />
        </div>
      </div>
      )}
      <div className="bg-gray-100 font-sans ">
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <button className="flex items-center" onClick={navigateHome}>
                  <span className="leading-10 text-purple-600 text-2xl font-bold ml-1 uppercase">
                    SHOPEZ
                  </span>
                </button>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <button
                  onClick={navigateHome}
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  Home
                </button>
                <button
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  onClick={handleDiscoverClick}
                >
                  Discover
                </button>
                <button
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  onClick={handleFeatures}
                >
                  Features
                </button>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setClickRegister(true)}
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                >
                  Sign up
                </button>
                <button
                  onClick={() => setClickLogin(true)}
                  className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Welcome to SHOPEZ
              </h1>
              <p className="text-lg md:text-xl mb-12">
                Your ultimate marketplace for buying and selling any type of
                products
              </p>
              <button
                onClick={() => setClickRegister(true)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-2"
              >
                Join Now
              </button>
              <a
                href="#"
                className="bg-purple-200 hover:bg-purple-600 text-purple-500 font-bold py-3 px-8 rounded-full inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section
          id="Description"
          className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  The Ultimate Marketplace
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SHOPEZ is your premier destination for online shopping and
                selling, offering a seamless platform where buyers and sellers
                can connect effortlessly. With an extensive range of products
                available across various categories, SHOPEZ caters to every need
                and preference. Whether you're searching for the latest gadgets,
                trendy fashion items, or unique handmade crafts, SHOPEZ provides
                a diverse marketplace where you can find exactly what you're
                looking for. Our user-friendly interface and intuitive features
                make buying and selling an easy task, ensuring a secure and
                enjoyable experience for all users. Join SHOPEZ today to explore
                a world of endless possibilities and unlock the full potential
                of online commerce.
              </p>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="/casual-life-3d-two-sale-tags-1.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section id="features" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Discover the Power of SHOPEZ
              </h2>
              <p className="text-lg md:text-xl mb-12">
                Shopez offers a wide range of functionalities to make your
                buying and selling experience seamless:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-xl border-2 border-indigo-500">
                  <h3 className="text-xl font-semibold mb-4">
                    Buy Anything You Need
                  </h3>
                  <p className="text-gray-700">
                    Explore a vast selection of products from various categories
                    and find exactly what you're looking for.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-xl border-2 border-indigo-500">
                  <h3 className="text-xl font-semibold mb-4">Sell with Ease</h3>
                  <p className="text-gray-700">
                    List your products effortlessly and reach millions of
                    potential buyers. Manage your listings with our intuitive
                    seller dashboard.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-xl border-2 border-indigo-500">
                  <h3 className="text-xl font-semibold mb-4">
                    Direct Contact with Sellers
                  </h3>
                  <p className="text-gray-700">
                    Easily connect with sellers via phone or email to inquire
                    about products, negotiate prices, and arrange transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 overflow-hidden bg-indigo-600 py-16 px-8 mt-20">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-left ">
                  <div className="mb-10 lg:mb-0 ">
                    <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                      Ready to explore endless opportunities? Join Us now!
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-right">
                  <button
                    onClick={() => setClickRegister(true)}
                    className="text-purple-600 font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                  >
                    Join Us and Explore What We Have To Offer You
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute top-0 right-0 -z-10">
            <svg
              width="388"
              height="250"
              viewBox="0 0 388 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.05"
                d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                fill="url(#paint0_linear_971_6910)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_971_6910"
                  x1="60.5"
                  y1="111"
                  x2="287"
                  y2="111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.520507" stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-0 right-0 -z-10">
            <svg
              width="324"
              height="250"
              viewBox="0 0 324 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.05"
                d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                fill="url(#paint0_linear_971_6911)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_971_6911"
                  x1="60.5"
                  y1="111"
                  x2="287"
                  y2="111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.520507" stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-4 left-4 -z-10">
            <svg
              width="43"
              height="56"
              viewBox="0 0 43 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <circle
                  cx="40.9984"
                  cy="1.49626"
                  r="1.49626"
                  transform="rotate(90 40.9984 1.49626)"
                  fill="white"
                ></circle>
                <circle
                  cx="27.8304"
                  cy="1.49626"
                  r="1.49626"
                  transform="rotate(90 27.8304 1.49626)"
                  fill="white"
                ></circle>
                <circle
                  cx="14.6644"
                  cy="1.49626"
                  r="1.49626"
                  transform="rotate(90 14.6644 1.49626)"
                  fill="white"
                ></circle>
                <circle
                  cx="1.49642"
                  cy="1.49626"
                  r="1.49626"
                  transform="rotate(90 1.49642 1.49626)"
                  fill="white"
                ></circle>
                <circle
                  cx="40.9984"
                  cy="14.6642"
                  r="1.49626"
                  transform="rotate(90 40.9984 14.6642)"
                  fill="white"
                ></circle>
                <circle
                  cx="27.8304"
                  cy="14.6642"
                  r="1.49626"
                  transform="rotate(90 27.8304 14.6642)"
                  fill="white"
                ></circle>
                <circle
                  cx="14.6644"
                  cy="14.6642"
                  r="1.49626"
                  transform="rotate(90 14.6644 14.6642)"
                  fill="white"
                ></circle>
                <circle
                  cx="1.49642"
                  cy="14.6642"
                  r="1.49626"
                  transform="rotate(90 1.49642 14.6642)"
                  fill="white"
                ></circle>
                <circle
                  cx="40.9984"
                  cy="27.8302"
                  r="1.49626"
                  transform="rotate(90 40.9984 27.8302)"
                  fill="white"
                ></circle>
                <circle
                  cx="27.8304"
                  cy="27.8302"
                  r="1.49626"
                  transform="rotate(90 27.8304 27.8302)"
                  fill="white"
                ></circle>
                <circle
                  cx="14.6644"
                  cy="27.8302"
                  r="1.49626"
                  transform="rotate(90 14.6644 27.8302)"
                  fill="white"
                ></circle>
                <circle
                  cx="1.49642"
                  cy="27.8302"
                  r="1.49626"
                  transform="rotate(90 1.49642 27.8302)"
                  fill="white"
                ></circle>
                <circle
                  cx="40.9984"
                  cy="40.9982"
                  r="1.49626"
                  transform="rotate(90 40.9984 40.9982)"
                  fill="white"
                ></circle>
                <circle
                  cx="27.8304"
                  cy="40.9963"
                  r="1.49626"
                  transform="rotate(90 27.8304 40.9963)"
                  fill="white"
                ></circle>
                <circle
                  cx="14.6644"
                  cy="40.9982"
                  r="1.49626"
                  transform="rotate(90 14.6644 40.9982)"
                  fill="white"
                ></circle>
                <circle
                  cx="1.49642"
                  cy="40.9963"
                  r="1.49626"
                  transform="rotate(90 1.49642 40.9963)"
                  fill="white"
                ></circle>
                <circle
                  cx="40.9984"
                  cy="54.1642"
                  r="1.49626"
                  transform="rotate(90 40.9984 54.1642)"
                  fill="white"
                ></circle>
                <circle
                  cx="27.8304"
                  cy="54.1642"
                  r="1.49626"
                  transform="rotate(90 27.8304 54.1642)"
                  fill="white"
                ></circle>
                <circle
                  cx="14.6644"
                  cy="54.1642"
                  r="1.49626"
                  transform="rotate(90 14.6644 54.1642)"
                  fill="white"
                ></circle>
                <circle
                  cx="1.49642"
                  cy="54.1642"
                  r="1.49626"
                  transform="rotate(90 1.49642 54.1642)"
                  fill="white"
                ></circle>
              </g>
            </svg>
          </span>
        </section>
        <footer className="footer px-4 py-6">
          <div className="bg-gray-100">
            <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 border-t sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
              <div className="p-5">
                <h3 className="font-bold text-xl text-indigo-600">Shopez</h3>
              </div>
              <div className="p-5">
                <div className="text-sm uppercase text-indigo-600 font-bold">
                  Browse
                </div>
                <a className="my-3 block" href="/#">
                  Home <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-3 block" href="/#">
                  Discover <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-3 block" href="/#">
                  Features <span className="text-teal-600 text-xs p-1"></span>
                </a>
              </div>
              <div className="p-5">
                <div className="text-sm uppercase text-indigo-600 font-bold">
                  Support
                </div>
                <a className="my-3 block" href="/#">
                  Help Center{" "}
                  <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-3 block" href="/#">
                  Privacy Policy{" "}
                  <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-3 block" href="/#">
                  Conditions <span className="text-teal-600 text-xs p-1"></span>
                </a>
              </div>
              <div className="p-5">
                <div className="text-sm uppercase text-indigo-600 font-bold">
                  Contact us
                </div>
                <span className="text-teal-600 text-xs"></span>
                <a className="my-3 block" href="/#">
                  contact@shopez.com
                  <span className="text-teal-600 text-xs p-1"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 pt-2">
            <div
              className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
           max-w-screen-lg items-center"
            >
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="/#" className="w-6 mx-1">
                  <svg
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    ></g>

                    <path
                      id="Twitter"
                      d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                       5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                       -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                       0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                       -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                       0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                       -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                       0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                       -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                       -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                       1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                       -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                       6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                       0.771,-0.67 1.054,-1.093Z"
                    ></path>
                  </svg>
                </a>
                <a href="/#" className="w-6 mx-1">
                  <svg
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      id="Facebook"
                      d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                       5.373,-12 12,-12c6.627,0 12,5.373
                       12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                       0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                       -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                    ></path>
                  </svg>
                </a>
                <a href="/#" className="w-6 mx-1">
                  <svg
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_1">
                      <circle id="Oval" cx="12" cy="12" r="12"></circle>
                      <path
                        id="Shape"
                        d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                          -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                          -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                          -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                          -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                          0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                          2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                          1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                          0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                          -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                          -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                          -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                          0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                          0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="my-5">© shopez.</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
