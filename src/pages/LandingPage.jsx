import React from "react";
// import { set_cookies } from "./../../api/login";
// import SearchBox from "./SearchBox";
import paperPhoto from "../assets/images/paper-photo.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LandingPage = () => {
  const cardsData = [
    {
      title: "Image Enhancement using ML",
      description:
        "Explore advanced machine learning techniques for enhancing image quality and resolution.",
      image: paperPhoto,
    },
    {
      title: "Portfolio Website Development using React.js",
      description:
        "Learn how to build responsive and dynamic portfolio websites with React.js.",
      image: paperPhoto,
    },
    {
      title: "Attention Mechanism Implementation",
      description:
        "Dive into the implementation of attention mechanisms in neural networks for better performance.",
      image: paperPhoto,
    },
  ];

  // useEffect(() => {
  //   set_cookies();
  //   console.log("cookies is set");
  // }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="home bg-black text-white flex-1 px-4 py-8">
        <header className="home-header text-center max-w-3xl mx-auto py-12">
          <h2 className="text-4xl font-bold mb-4">REC Kannauj</h2>
          <h3 className="text-3xl font-semibold text-gray-300 mb-6 ">
            Academic Reports and Research Papers' Platform
          </h3>
          <p className="text-xl text-gray-400 mb-8 ">
            Look for any pertinent research papers and project reports here.
          </p>
          {/* <SearchBox className="bg-slate-400 rounded" onSearch={handleSearch} /> */}
        </header>
        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="max-w-xs rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-white text-black"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">{card.title}</h5>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
