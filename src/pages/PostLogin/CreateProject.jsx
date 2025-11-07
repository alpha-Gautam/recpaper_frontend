import React, { useEffect, useState } from "react";
import { createProjectapi, mentorDataApi } from "../../api/login";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: localStorage.getItem("user_id") || "",
    mentorName: "",
    semester: "",
    topic: "",
    keywords: "",
    platforms: "",
    objective: "",
    description: "",
    githubLink: "",
    group: "",
  });

  const [mentorList, setMentorList] = useState([]);

  // If user is faculty then they are not able to create project, currently ;
  const semesterList = [
    { label: "1st", value: 1 },
    { label: "2nd", value: 2 },
    { label: "3rd", value: 3 },
    { label: "4th", value: 4 },
    { label: "5th", value: 5 },
    { label: "6th", value: 6 },
    { label: "7th", value: 7 },
    { label: "8th", value: 8 },
  ];

  useEffect(() => {
    const fetchMentorList = async () => {
      try {
        const response = await mentorDataApi();
        setMentorList(response.data);
      } catch (error) {
        console.error("Error fetching mentor list:", error);
      }
    };

    // const faculty = localStorage.getItem("role") === "true";
    setTimeout(() => {
      // if(faculty){
      //   alert("Faculty are not able to create Project....!");
      //   setCreatNotAllowed(true);
      // }
      // else{
      // }
      fetchMentorList();
    }, [1000]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: formData.topic,
      user: formData.editorName,
      mentor: formData.mentorName,
      semester: formData.semester,
      group: formData.group === "true" ? true : false,
      keyword: formData.keywords,
      platform: formData.platforms,
      objective: formData.objective,
      description: formData.description,
      github_link: formData.githubLink,
      status: "Initialized",
    };

    try {
      const response = await createProjectapi(data);
      if (response.status === 200) {
        alert("Project details submitted successfully!");
        setFormData({
          topic: "",
          editorName: formData.editorName,
          mentorName: "",
          semester: "",
          group: "",
          keywords: "",
          platforms: "",
          objective: "",
          description: "",
          githubLink: "",
        });
        // formData.clear()
      } else {
        alert("Failed to submit project. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Failed to submit project. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex flex-col">
      <header className="bg-linear-to-r from-green-500 to-green-600 py-6 shadow-lg text-center text-white font-bold text-4xl">
        Create a New Project
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-10">
        <div className="bg-white border border-gray-200 p-12 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Project Title"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                placeholder="Enter your project title"
              />

              <FormInput
                label="Name of the Author"
                name="editorName"
                value={localStorage.getItem("username")}
                readOnly
                className="bg-gray-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-gray-700"
                  htmlFor="mentorName"
                >
                  Name of the Mentor
                </label>
                <select
                  id="mentorName"
                  name="mentorName"
                  value={formData.mentorName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200"
                >
                  <option value="">Select a mentor</option>
                  {mentorList.map((mentor) => (
                    <option key={mentor.uuid} value={mentor.uuid}>
                      {mentor.username}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="group"
                >
                  Group Project?
                </label>
                <select
                  id="group"
                  name="group"
                  value={formData.group}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200"
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="semester"
                >
                  Semester
                </label>
                <select
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200"
                >
                  <option value="">Select a semester</option>
                  {semesterList.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <FormInput
                label="Platforms / Resources used"
                name="platforms"
                value={formData.platforms}
                onChange={handleChange}
                required
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>

            <FormInput
              label="Keywords / Technical Stack"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              required
              placeholder="e.g., JavaScript, Python, AI"
            />

            <FormTextarea
              label="Objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              rows="3"
              required
              placeholder="Describe the main objective of your project"
            />

            <FormTextarea
              label="Briefing about the Project"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Provide a detailed description of your project"
            />

            <FormInput
              label="GitHub Code Link"
              name="githubLink"
              type="url"
              placeholder="https://github.com/username/repo (Optional)"
              value={formData.githubLink}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-4 text-lg font-bold rounded-lg transition duration-300 transform hover:scale-105 bg-linear-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable input component
const FormInput = ({ label, name, type = "text", ...props }) => (
  <div>
    <label
      className="block text-sm font-semibold mb-2 text-gray-700"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
      {...props}
    />
  </div>
);

// Reusable textarea component
const FormTextarea = ({ label, name, rows, ...props }) => (
  <div>
    <label
      className="block text-sm font-semibold mb-2 text-gray-700"
      htmlFor={name}
    >
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
      {...props}
    />
  </div>
);

export default CreateProject;
