import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../../assets/animation/log_in.json";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useContext } from "react";
import { Kalbela_AuthProvider } from "../../../context/MainContext";
import { message } from "antd";
import sweet_alert from "../../../utils/custom_alert";

export default function Registration() {
      const location = useLocation();
      const navigate = useNavigate();
      const [isPasswordVisible, setPasswordVisible] = useState(false);

      const { googleLogin, setUser, setCookie, base_url } = useContext(Kalbela_AuthProvider);


      const data_submit = async (e) => {
            e.preventDefault();
            const from_data = e.target
            const name = from_data.full_name.value
            const email = from_data.email.value
            const password = from_data.password.value
            // console.log(name, email, password);
            const data = {
                  name,
                  email,
                  password
            }
            fetch(`${base_url}/auth/sign-up`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
            }).then((res) => res.json())
                  .then((data) => {
                        console.log(data, 'data');
                        if (!data.error) {
                              setUser(data.data);
                              setCookie("kal_bela_jobs_user", data.data, 365);
                              sweet_alert("Success", data.message, "success");
                              navigate("/verify_otp", { replace: true });
                        }
                        else {
                              sweet_alert("Error", data.message, "error");
                        }
                  })
      };

      const handlerGoogleLogin = () => {
            googleLogin()
                  .then(() => {
                        // Always redirect to /admin
                        navigate('/admin', { replace: true });
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
      };




      return (
            <section className="bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
                        <div className="lg:relative hidden lg:flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                              <div className="absolute inset-0">

                                    <Lottie
                                          className="object-cover w-full h-full"
                                          animationData={animation}
                                    />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                              <div className="relative">
                                    <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                          <h3 className="text-4xl font-bold text-white">
                                                Join 35k+ job seekers & recruiters find your perfect match
                                                today!
                                          </h3>
                                          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            AI Job Matching
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Resume Builder
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Job Alerts
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Advanced Filters
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                          Sign up to Celebration
                                    </h2>
                                    <p className="mt-2 text-base text-gray-600">
                                          Already have an account?
                                          <Link
                                                to="/sign-in"
                                                title=""
                                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                                          >
                                                {" "}
                                                Sign In
                                          </Link>
                                    </p>
                                    <form onSubmit={data_submit} className="mt-8">
                                          <div className="space-y-5">
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Fast &amp; Last name{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type="text"
                                                                  name="full_name"
                                                                  id=""
                                                                  placeholder="Enter your full name"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                      </div>
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Email address{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type="email"
                                                                  name="email"
                                                                  id="email"
                                                                  placeholder="Enter email to get started"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                      </div>
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Password{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type={isPasswordVisible ? "text" : "password"}
                                                                  name="password"
                                                                  id="password"
                                                                  placeholder="Enter your password"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                            <button
                                                                  type="button"
                                                                  onClick={() => setPasswordVisible(!isPasswordVisible)}
                                                                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                                                            >
                                                                  {isPasswordVisible ? (
                                                                        <EyeOff className="w-5 h-5" />
                                                                  ) : (
                                                                        <Eye className="w-5 h-5" />
                                                                  )}
                                                            </button>
                                                      </div>
                                                </div>
                                                <div>
                                                      <button
                                                            type="submit"
                                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                                      >
                                                            Sign up
                                                      </button>
                                                </div>
                                          </div>
                                    </form>
                                    <div className="mt-3 space-y-3">
                                          <button
                                                onClick={handlerGoogleLogin}
                                                type="button"
                                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                          >
                                                <div className="absolute inset-y-0 left-0 p-4">
                                                      <img
                                                            className="w-6 h-6 text-[#2563EB]"
                                                            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                                            alt=""
                                                      />
                                                </div>
                                                Sign up with Google
                                          </button>
                                          <button
                                                type="button"
                                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                          >
                                                <div className="absolute inset-y-0 left-0 p-4">
                                                      <img
                                                            className="w-6 h-6 text-[#2563EB]"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                                            alt=""
                                                      />
                                                </div>
                                                Sign up with Linkedin
                                          </button>
                                    </div>

                              </div>
                        </div>
                  </div>
            </section>
      );
}