
import { Bright_Meta } from 'bright_meta';
import { Link } from 'react-router-dom';
const Home = () => {
      return <div className="bg-white">
            <header className="bg-[#FCF8F1] bg-opacity-30">
                  <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">
                              <div className="flex-shrink-0">
                                    <a href="#" title="" className="flex">
                                          <img
                                                className="w-auto h-10"
                                                src="https://upload.wikimedia.org/wikipedia/bn/0/09/%E0%A6%A6%E0%A7%88%E0%A6%A8%E0%A6%BF%E0%A6%95_%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A7%87%E0%A6%B2%E0%A6%BE_%E0%A6%8F%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png"
                                                alt=""
                                          />
                                    </a>
                              </div>
                              <button
                                    type="button"
                                    className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                              >
                                    {/* Menu open: "hidden", Menu closed: "block" */}
                                    <svg
                                          className="block w-6 h-6"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 8h16M4 16h16"
                                          />
                                    </svg>
                                    {/* Menu open: "block", Menu closed: "hidden" */}
                                    <svg
                                          className="hidden w-6 h-6"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                          />
                                    </svg>
                              </button>
                              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                                    <a
                                          href="#"
                                          title=""
                                          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                                    >
                                          {" "}
                                          Features{" "}
                                    </a>
                                    <a
                                          href="#"
                                          title=""
                                          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                                    >
                                          {" "}
                                          Solutions{" "}
                                    </a>
                                    <a
                                          href="#"
                                          title=""
                                          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                                    >
                                          {" "}
                                          Resources{" "}
                                    </a>
                                    <a
                                          href="#"
                                          title=""
                                          className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                                    >
                                          {" "}
                                          Pricing{" "}
                                    </a>
                              </div>
                              <Link
                                    to="/sign-up"
                                    title=""
                                    className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                                    role="button"
                              >
                                    {" "}
                                    Join Now{" "}
                              </Link>
                        </div>
                  </div>
            </header>
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                              <div>
                                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                                          A Hr management platform
                                    </p>
                                    <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                          Find better candidates for your jobs
                                    </h1>
                                    <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                          Grow your career fast with right mentor.
                                    </p>
                                    <Link
                                          to="/sign-up"
                                          title=""
                                          className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                                          role="button"
                                    >
                                          Join for free
                                          <svg
                                                className="w-6 h-6 ml-8 -mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                          </svg>
                                    </Link>
                                    <p className="mt-5 text-gray-600">
                                          Already joined us?{" "}
                                          <Link
                                                to={"/sign-in"}
                                                title=""
                                                className="text-black transition-all duration-200 hover:underline"
                                          >
                                                Log in
                                          </Link>
                                    </p>
                              </div>
                              <div>
                                    <img
                                          className="w-full"
                                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                                          alt=""
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      </div>


            ;
};

export default Home;