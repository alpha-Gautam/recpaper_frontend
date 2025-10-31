import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1 Title",
      faculty: "Dr. A. Sharma",
      objective: "To design and implement a web-based student portal.",
    },
    {
      id: 2,
      title: "Project 2 Title",
      faculty: "Prof. R. Mehta",
      objective: "To create an AI-based resume screening system.",
    },
    {
      id: 3,
      title: "Project 3 Title",
      faculty: "Dr. N. Singh",
      objective: "To develop a mobile app for campus event management.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-md p-6 flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/5 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
            <span className="text-gray-500">Photo</span>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-center text-gray-700">
            <p className="text-sm">
              Features that the system provides its users.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/5">
          {/* Account Holder Details */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Account Holder Details
            </h2>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-1 w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {[
              "Overview",
              "Projects",
              "Publications",
              "Achievements",
              "Contact",
            ].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 hover:bg-blue-100"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-2xl p-4 bg-gray-50 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">
                    {project.id}. {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.faculty}</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Project Objective: </span>
                    {project.objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 bg-gray-100 rounded-xl p-4"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
