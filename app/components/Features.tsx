import Image from "next/image";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnline from "../images/icon-online.svg";
import iconApi from "../images/icon-api.svg";
import iconOnboarding from "../images/icon-onboarding.svg";

const Features = () => {
  return (
    <section className="features bg-whiteSmoke bg-opacity-90 px-12 py-24 text-center text-gray md:text-left md:px-24 lg:px-40">
      <div className="mb-12">
        <h2 className="text-3xl text-blue font-normal w-64 mx-auto pb-5 md:mx-0 md:w-full md:text-4xl">
          Why choose Easybank?
        </h2>
        <p className="md:w-2/5">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-4">
        <article className="flex flex-col items-center gap-4 md:items-start">
          <div>
            <Image src={iconOnline} alt="" />
          </div>
          <h3 className="text-blue text-2xl">Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article className="flex flex-col items-center gap-4 md:items-start">
          <div>
            <Image src={iconBudgeting} alt="" />
          </div>
          <h3 className="text-blue text-2xl">Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </article>
        <article className="flex flex-col items-center gap-4 md:items-start">
          <div>
            <Image src={iconOnboarding} alt="" />
          </div>
          <h3 className="text-blue text-2xl">Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </article>
        <article className="flex flex-col items-center gap-4 md:items-start">
          <div>
            <Image src={iconApi} alt="" />
          </div>
          <h3 className="text-blue text-2xl">Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
