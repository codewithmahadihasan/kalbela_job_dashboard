

import NavLink from "../NavLink"
import MacbookAir from './Macbook-Air-localhost.png';
import LayoutEffect from "../../LayoutEffect"
import GradientWrapper from "../../GradientWrapper"


const Hero = () => (
      <section>
            <div className="custom-screen py-28">
                  <LayoutEffect className="duration-1000 delay-300"
                        isInviewState={{
                              trueState: "opacity-1",
                              falseState: "opacity-0"
                        }}
                  >
                        <div>
                              <div className="space-y-5 max-w-3xl mx-auto text-center">
                                    <h1
                                          className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                                          style={{
                                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                                          }}
                                    >
                                          Connect with Top Talent for Your Business Success
                                    </h1>
                                    <p className="max-w-xl mx-auto text-gray-300">
                                          Unlock new career opportunities with expert guidance and the right connections.
                                    </p>
                                    <div className="flex justify-center font-medium text-sm">
                                          <NavLink
                                                href="/#pricing"
                                                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                                          >
                                                Get Started
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                                </svg>
                                          </NavLink>
                                    </div>
                              </div>
                              <GradientWrapper className="mt-16 sm:mt-28" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                                    <img
                                          src={MacbookAir}
                                          className="shadow-lg rounded-2xl"
                                          alt="Mailgo"
                                    />
                              </GradientWrapper>
                        </div>
                  </LayoutEffect>
            </div>
      </section>
)

export default Hero
