import { LogOut, Menu, SearchCheck, X } from "lucide-react";
import { useContext, useEffect } from "react";
import MyContext from "../../context/Dashboard_context";
import { Link, NavLink } from "react-router-dom";
import { nav_items } from "../../utils/dashboard_menu";
import { Kalbela_AuthProvider } from "../../context/MainContext";

const Sidebar = () => {
      const { open, setOpen, searchQuery, setSearchQuery } = useContext(MyContext);
      const { user, loginOut } = useContext(Kalbela_AuthProvider);



      const filteredItems = nav_items?.filter((item) =>
            item?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const SignOut = () => {
            loginOut().then(() => {
                  console.log("succes full");
            });
      };

      return (

            <div

                  className={`top-0 left-0 z-50 bg-gray-900 h-screen ${open ? 'fixed md:w-64  flex' : 'hidden'}`}

            >
                  <div className="relative">
                        <div className="flex flex-col flex-grow pt-5 w-full overflow-y-auto bg-gray-900">
                              <div className="flex items-center justify-between flex-shrink-0 px-4">
                                    <img
                                          className="w-64 h-auto filter invert brightness-200 grayscale"
                                          src="https://upload.wikimedia.org/wikipedia/bn/0/09/%E0%A6%A6%E0%A7%88%E0%A6%A8%E0%A6%BF%E0%A6%95_%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A7%87%E0%A6%B2%E0%A6%BE_%E0%A6%8F%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png"
                                          alt=""
                                    />
                                    <X
                                          className="cursor-pointer lg:hidden md:visible text-green-600"
                                          onClick={() => setOpen(!open)}
                                    />
                              </div>
                              <div className="px-4 mt-8">
                                    <label htmlFor="" className="sr-only">
                                          Search{" "}
                                    </label>
                                    <div className="relative">
                                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                      className="w-5 h-5 text-gray-400"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                >
                                                      <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                      />
                                                </svg>
                                          </div>
                                          <input
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                type="search"
                                                name=""
                                                id=""
                                                className="block w-full py-2 pl-10 text-white placeholder-gray-400 bg-gray-900 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Search here"
                                          />
                                    </div>
                              </div>
                              <div className="px-4 mt-6">
                                    <hr className="border-gray-700" />
                              </div>
                              <div className="flex flex-col flex-1 px-8 h-40 overflow-y-auto mt-6">
                                    <div className="space-y-4">
                                          <nav className="flex-1 space-y-2">
                                                {filteredItems.map((item, index) => (
                                                      <div key={index}>

                                                            <NavLink
                                                                  to={item.link}
                                                                  className={({ isActive }) =>
                                                                        `flex items-center space-x-2 p-2 ${isActive ? "text-blue-500" : "text-gray-300"
                                                                        }`
                                                                  }
                                                            >

                                                                  <NavLink to={item.link} className={({ isActive }) => `border border-white border-opacity-40 p-2 transition-all duration-200  hover:text-blue-700 rounded-lg hover:bg-gray-200 cursor-pointer group ${isActive ? "  bg-gray-200  text-blue-500 text-opacity-70" : "text-gray-300 text-opacity-40"}`}>
                                                                        <item.icon className="w-6 h-6 " />
                                                                  </NavLink>
                                                                  <h3 className="font-semibold text-opacity-70 text-gray-300">{item.title}</h3>
                                                            </NavLink>
                                                            <hr className="border-gray-700" />
                                                      </div>
                                                ))}
                                          </nav>

                                    </div>
                                    <div className="fixed bottom-4 left-4 px-4">
                                          <button
                                                type="button"
                                                onClick={SignOut}
                                                className="flex gap-4 px-10 items-center justify-between w-full  py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-gray-700"
                                          >
                                                <LogOut className="w-6 h-6" />
                                                <span>Sign Out</span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="flex flex-col flex-1">
                        <main>
                              <div className="py-6">
                                    <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                          {/* ADD YOUR CONTENT HERE */}
                                    </div>
                              </div>
                        </main>
                  </div>
            </div>


      );
};

export default Sidebar;
