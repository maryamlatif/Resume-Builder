import React from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";

import Wrapper from "./Wrapper";

export default function ResumeBuilder() {
  return (
    <Wrapper>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-md">
          <div className="border rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-cyan-900 text-white p-8 w-full md:w-1/3">
                <div className="flex justify-center mb-6">
                  <Image
                    src={`/profile.jpg`}
                    width={160}
                    height={160}
                    alt="profile pic"
                    className="rounded-full w-40 h-40"
                  />
                </div>

                <h2 className="font-bold mt-2">CONTACT INFO</h2>
                <hr className="mt-2 mb-4" />
                <p className="flex items-center mt-3">
                  <FiPhoneCall className="mr-2 text-gray-300" />
                  <span className="ml-1"> Phone: 0345765034</span>
                </p>
                <p className="flex items-center mt-3">
                  <AiOutlineMail className="mr-2 text-gray-300" />
                  <span className="ml-1">Email:</span>
                  <a href="#" className="ml-0">
                    Magmail.com
                  </a>
                </p>
                <p className="flex items-center mt-3">
                  <AiOutlineLinkedin className="mr-2 text-gray-300" />
                  <span className="ml-1">LinkedIn:</span>
                  <a href="#" className="ml-1">
                    maham
                  </a>
                </p>
                <p className="flex items-center mt-3">
                  <LiaGithub className="mr-2 text-gray-300" />
                  <span className="ml-1"> Github:</span>
                  <a href="#" className="ml-1">
                    Github
                  </a>
                </p>

                <div className="mt-8">
                  <h2 className="font-bold">EDUCATION</h2>
                  <hr className="mt-2" />
                  <ul className="list-disc pt-2 ml-3 mt-5">
                    <li>IT Course (Ongoing) at GIAIC</li>
                    <li>Bachelors in Arts Karachi University (2018-2020)</li>
                    <li>Intermediate SMB Fatimah Jinnah (2015-2017)</li>
                    <li>Matric Govt. Girl College (2013-2015)</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-bold">SKILLS</h2>
                  <hr className="mt-2" />
                  <ul className="list-disc pt-2 ml-3 mt-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Next.js</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-bold">INTERESTS</h2>
                  <hr className="mt-2" />
                  <ul className="list-disc pt-2 ml-3 mt-5">
                    <li>Exploring New Places</li>
                    <li>Problem-Solving</li>
                    <li>Coding and Web Development</li>
                    <li>Social Media Management</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-bold">LANGUAGES</h2>
                  <hr className="mt-2" />
                  <ul className="list-disc pt-2 ml-3 mt-5">
                    <li>English (Fluent)</li>
                    <li>Urdu (Advanced)</li>
                    <li>Arabic (Intermediate)</li>
                    <li>Persian (Basic)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 text-black p-8 w-full md:w-2/3">
                <div className="mb-8">
                  <h1 className="text-cyan-800 text-3xl font-bold">
                    MARYAM LATIF
                  </h1>
                  <h3 className="text-xl font-medium text-gray-600">
                    WEB DEVELOPER
                  </h3>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-500">Profile</h2>
                  <hr className="border-gray-300 my-2" />
                  <p className="text-gray-700">
                    A web developer creates and maintains websites, ensuring
                    they are user-friendly, responsive, and optimized for
                    performance. They work with web technologies to deliver
                    seamless online experiences.They work with programming languages like HTML, CSS, and JavaScript, along with frameworks like React and Next.js, to create responsive, user-friendly sites.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text 3xl font-bold text-gray-500">
                    WORK EXPERIENCE
                  </h3>
                  <hr className="border-gray-500 my-2" />

                  <div className="mt-4">
                    <h3 className="text-gray-700 text-2xl font-semibold">
                      Tech Innovations Ltd
                    </h3>
                    <span className="text-gray-500">2023-Present</span>
                    <ul className="list-disc pt-5 ml-6 mb-4">
                      <li>
                        Developed and maintained responsive websites and
                        applications using React.js, Next.js, and Node.js,
                        improving site load times by 25%
                      </li>
                      <br />
                      <li>
                        Optimized front-end performance through lazy loading,
                        image compression, and code splitting, enhancing user
                        experience and mobile performance.
                      </li>
                      <br />
                      <li>
                        Collaborated with cross-functional teams to ensure
                        seamless integration of APIs and databases, including
                        MongoDB and MySQL, for dynamic data handling.
                      </li>
                    </ul>

                    <h3 className="text-gray-700 text-2xl font-semibold">
                      Junior Web Developer
                    </h3>
                    <span className="text-gray-500">2023-2022</span>
                    <ul className="list-disc pt-5 ml-6 mb-4">
                      <li>
                        Assisted in the development of mobile-responsive sites,
                        improving usability and accessibility across all screen
                        sizes.
                      </li>
                      <br />
                      <li>
                        Conducted thorough testing and debugging of front-end
                        code, resulting in a 20% reduction in post-launch bugs.
                      </li>
                      <br />
                    </ul>

                    <div className="mt-7 my-9 ml-6 hover:cursor-pointer">
                      <h3 className="font-bold text-2xl text-gray-700 ">
                        Reference
                      </h3>
                      <p className="font-semibold mt-5 ">Micheal Johns</p>
                      Lead Developer
                      <br />
                      NextGen Digital
                      <br />
                      Phone:0345765034
                      <p>Email: michael.johnson-nextgendigital.com</p>
                      <br />
                      <p className="font-semibold">Jane Smith</p>
                      Project Manage
                      <br />
                      Creative Solutions Agency
                      <br />
                      Phone: 0987654-3210
                      <p>Email: jane-nextgendigital.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
