import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav
      className={`fixed z-10 w-full bg-white mx-auto flex h-16 items-center justify-between  md:px-40`}
    >
      <div>
        <Image src={logo} alt="logo" width={139} height={20} />
      </div>
      <ul className="hidden md:flex gap-6 h-16 [&>*]:pt-4">
        <li className="menu__item">
          <Link href="#">Home</Link>
        </li>
        <li className="menu__item">
          <Link href="#">About</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Contact</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Blog</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Careers</Link>
        </li>
      </ul>
      <a
        href="#"
        className="hidden md:block bg-greenGradient font-bold text-white p-3 px-6 rounded-full hover:opacity-70"
      >
        Request Invite
      </a>

      <div className="md:hidden hamburger">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </nav>
  );
};

export default Navbar;
