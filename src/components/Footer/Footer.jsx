import React from "react";
import Banner from "../../assets/Others/footer.jpg";
import Logo from "../../assets/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaLocationDot,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: `bottom`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="text-white" style={BannerImg}>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              laboriosam laudantium dignissimos fuga hic, nesciunt voluptatem
              qui quaerat error aut?
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:test-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.link}
                        className="text-white hover:text-primary cursor-pointer  duration-300"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:test-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.link}
                        className="text-white hover:text-primary cursor-pointer hover:translate-x-1 duration-300"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary" />
                </a>
                <a href="#">
                  <FaFacebook
                    className="text-3xl
                  hover:text-primary"
                  />
                </a>
                <a href="#">
                  <FaLinkedin
                    className="text-3xl
                  hover:text-primary"
                  />
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FaLocationDot />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p className="">+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
