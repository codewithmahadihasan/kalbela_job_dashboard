import { Link } from "react-router-dom";
import Link_Button from "../../../components/small_component/Link_Button";

const Candidate = () => {
      return (
            <div>
                  <div className="py-4 bg-white">
                        <div className="px-4 sm:px-6 lg:px-8">
                              {/* <Link_Button name='Create New Category' url="add-category" /> */}
                              <div className="sm:flex sm:items-center sm:justify-between">
                                    <div>
                                          <p className="text-xl font-bold text-gray-900">Candidates List</p>

                                    </div>

                              </div>
                              <div className="flex flex-col mt-4 lg:mt-8">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                      <thead className="hidden lg:table-header-group">
                                                            <tr>
                                                                  <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">
                                                                        Customer
                                                                  </th>
                                                                  <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                                        Email Address
                                                                  </th>
                                                                  <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                                        Phone Number
                                                                  </th>
                                                                  <th className="py-3.5 px-4 text-left hidden xl:table-cell text-xs uppercase tracking-widest font-medium text-gray-500">
                                                                        Join Date
                                                                  </th>
                                                                  <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                                        Country
                                                                  </th>
                                                                  <th className="py-3.5 px-4 text-center text-xs uppercase tracking-widest font-medium text-gray-500">
                                                                        Actions
                                                                  </th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>


                                                            <tr className="bg-gray-50">
                                                                  <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                              <img
                                                                                    className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded"
                                                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-male-3.png"
                                                                                    alt=""
                                                                              />
                                                                              Darlene Robertson
                                                                        </div>
                                                                        <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                              <div className="flex items-center">
                                                                                    <svg
                                                                                          className="w-4 h-4 mr-2 text-gray-400"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          fill="none"
                                                                                          viewBox="0 0 24 24"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth={2}
                                                                                    >
                                                                                          <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                                          />
                                                                                    </svg>
                                                                                    tim.jennings@example.com
                                                                              </div>
                                                                              <div className="flex items-center">
                                                                                    <svg
                                                                                          className="w-4 h-4 mr-2 text-gray-400"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          fill="none"
                                                                                          viewBox="0 0 24 24"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth={2}
                                                                                    >
                                                                                          <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                                          />
                                                                                    </svg>
                                                                                    (480) 555-0103
                                                                              </div>
                                                                              <div className="flex items-center">
                                                                                    <svg
                                                                                          className="w-4 h-4 mr-2 text-gray-400"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          fill="none"
                                                                                          viewBox="0 0 24 24"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth={2}
                                                                                    >
                                                                                          <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                                          />
                                                                                    </svg>
                                                                                    November 9, 2021
                                                                              </div>
                                                                              <div className="flex items-center pt-3 space-x-4">
                                                                                    <Link
                                                                                          to={`/admin/candidate/${1}`}
                                                                                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                                    >
                                                                                          View Profile
                                                                                    </Link>

                                                                              </div>
                                                                        </div>
                                                                  </td>
                                                                  <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                              <svg
                                                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                              >
                                                                                    <path
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round"
                                                                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                                    />
                                                                              </svg>
                                                                              tim.jennings@example.com
                                                                        </div>
                                                                  </td>
                                                                  <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                              <svg
                                                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                              >
                                                                                    <path
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round"
                                                                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                                    />
                                                                              </svg>
                                                                              (480) 555-0103
                                                                        </div>
                                                                  </td>
                                                                  <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                              <svg
                                                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                              >
                                                                                    <path
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round"
                                                                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                                    />
                                                                              </svg>
                                                                              November 9, 2021
                                                                        </div>
                                                                  </td>
                                                                  <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">
                                                                        USA
                                                                  </td>
                                                                  <td className="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                                        <div className="flex items-center space-x-4">
                                                                              <Link
                                                                                    to={`/admin/candidate/${1}`}
                                                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                              >
                                                                                    View Profile
                                                                              </Link>

                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Candidate;
