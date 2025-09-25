import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mt-10">
      © {new Date().getFullYear()} Car & Bike Rental. All Rights Reserved.
    </footer>
  );
};

export default Footer;
