import Image from "next/image";
import logo from "../images/logo-footer.svg";
// import iconTwitter from "../images/icon-twitter.svg";
import {
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue flex flex-col items-center text-white text-center gap-10 py-10 md:flex-row md:px-40">
      <div className="flex flex-col gap-8">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div className="flex gap-4 [&>*]:text-2xl [&>*]:text-white [&>*:hover]:text-green cursor-pointer">
          <FaFacebookSquare />
          <div className="rounded-full bg-white w-6 grid place-content-center group hover:bg-green">
            <FaYoutube className="text-regular text-blue group-hover:text-white" />
          </div>

          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
        </div>
      </div>
      <div className="md:flex md:text-left md:gap-20 md:ml-24">
        <ul className="leading-10 [&>*:hover]:text-green">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
        <ul className="leading-10 [&>*:hover]:text-green">
          <li>
            <Link href="#">Careers</Link>
          </li>
          <li>
            <Link href="#">Support</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 md:ml-auto">
        <a
          href="#"
          className="md:self-start ml-auto mr-auto bg-greenGradient font-bold text-white p-3 px-6 rounded-full hover:opacity-70"
        >
          Request Invite
        </a>
        <div className="text-gray text-regular">
          © Easybank. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
