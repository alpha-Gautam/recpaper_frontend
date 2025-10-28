import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm">
            &copy; 2025 REC Papers. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-0">
            <a
              href="#about"
              className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
