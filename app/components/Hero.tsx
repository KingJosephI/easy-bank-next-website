import Image from "next/image";
import mockups from "../images/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero flex flex-col-reverse bg-whiteSmoke bg-opacity-50 pb-20 px-12 md:flex-row md:py-40 md:px-24 lg:px-40">
      <div className="md:z-20 flex flex-col gap-8 text-center md:text-left">
        <h1 className="md:text-white lg:text-blue self-center text-4xl w-80 text-blue md:self-start md:text-5xl md:w-96">
          Next generation digital banking
        </h1>
        <p className="max-w-md text-gray mr-auto ml-auto">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a
          href="#"
          className="md:self-start self-center bg-greenGradient font-bold text-white p-3 px-6 rounded-full hover:opacity-70"
        >
          Request Invite
        </a>
      </div>
      <div className="relative lg:absolute lg:-top-10 lg:right-0">
        <Image
          src={mockups}
          alt=""
          // className="mockup block md:absolute md:-top-10 md:right-0"
          className="mockup"
          // className=""
        />
      </div>
    </section>
  );
};

export default Hero;
