import React, { useEffect, useState } from "react";
// Using placeholder icons from react-icons, adjust as needed (LinkedIn, Facebook, etc.)
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaCheck } from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
  const [year, setYear] = useState();
  
  useEffect(() => {
    // Note: The image uses a fixed year in the copyright text, but keeping the dynamic year is good practice.
    setYear(new Date().getFullYear());
  }, []);

  // --- Content Structure (Mirroring the image) ---
  const footerContent = {
    quickLinks: {
      title: "Quick Links",
      links: ["Home", "Cloting", "Shoes", "Accessories", "About"]
    },
    company: {
      title: "Company",
      links: ["About Us", "Blog", "Careers", "FAQs"]
    },
    legal: {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Refund Policy"]
    },
    contact: {
      title: "Contact",
      info: [
        { label: "Email", value: "customer@nike.com" }, // Changed to Nike email
        { label: "Phone", value: "+92 554 862 354" },   // Changed to Nike phone
        { label: "Campus Office", value: "Bhopal, MP" } // Placeholder
      ]
    }
  };

  const socialIcons = [
    { icon: <FaFacebookF />, url: "#", name: "Facebook" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaLinkedinIn />, url: "#", name: "LinkedIn" },
    // Using FaTimes as a placeholder for a unique icon like the one in the image
    
  ];

  return (
    // 1. Black Background, White Text
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-row sm:flex-col  lg:justify-between gap-8 lg:gap-4 mb-8 lg:mb-12">
          
          {/* 1st Column: Brand Info and Socials */}
          <div className="space-y-4 md:max-w-xs">
            
            {/* 1A. Brand Name (Using a custom font style placeholder) */}
            <h2 
              className="text-4xl font-serif text-white italic" 
              style={{ fontFamily: 'Georgia, serif', fontWeight: 700 }} // Placeholder for the unique script/serif font
            >
              <img src={logo} alt="Nike Logo" className="h-10 w-auto" />
            </h2>
            
            {/* 1B. Slogan/Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Just Do It.
            </p>
            
            {/* 1C. Nike Logo Placeholder (The large text in the image) */}
            
            
            {/* 1D. Social Icons (Adjusted to match the look in the image) */}
            <div className="flex space-x-4 pt-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  // White background, small shadow, hover effect removed for exact match
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-lg transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2nd, 3rd, 4th, 5th Columns: Links and Contact */}
          <div className="grid grid-cols-2 gap-8 w-full sm:grid-cols-2 ml-[10rem] md:grid-cols-4 lg:flex lg:flex-col lg:gap-12 lg:w-auto">
            {/* Quick Links */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-4">{footerContent.quickLinks.title}</h3>
              <ul className="space-y-2">
                {footerContent.quickLinks.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-4">{footerContent.company.title}</h3>
              <ul className="space-y-2">
                {footerContent.company.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-4">{footerContent.legal.title}</h3>
              <ul className="space-y-2">
                {footerContent.legal.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact (5th Column) */}
            <div className="w-full sm:col-span-2 md:col-span-4 lg:col-auto lg:w-auto">
              <h3 className="text-lg font-semibold text-white mb-4">{footerContent.contact.title}</h3>
              <ul className="space-y-2">
                {footerContent.contact.info.map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold text-gray-200 block">{item.label}:</span>
                    <a 
                      href={item.label === 'Email' ? `mailto:${item.value}` : '#'} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 w-full my-6"></div>

        {/* Copyright & Legal Links Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          
          {/* Copyright Text */}
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {year} Nike. All rights reserved
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;