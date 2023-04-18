import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "./images/logo.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <nav className="flex h-16 items-center justify-between px-10">
        <div>
          <Image src={logo} alt="logo" width={139} height={20} />
        </div>
        <ul
          className="hidden md:flex 
          gap-6
          h-full
          [&>*]:pt-4
          [&>*:hover]:border-b-4
          [&>*:hover]:border-greenGradient
          [&>*:hover]:cursor-pointer
          [&>*]:text-gray
          [&>*:hover]:text-blue"
        >
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
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
    </div>
  );
}
