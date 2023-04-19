import Image from "next/image";
import imageConfetti from "../images/image-confetti.jpg";
import imageCurrency from "../images/image-currency.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";

const Articles = () => {
  return (
    <section className="features bg-whiteSmoke bg-opacity-40 px-12 py-24  text-gray md:text-left md:px-40">
      <h2 className="text-3xl text-blue font-normal w-64 mx-auto pb-5 md:mx-0 md:w-full md:text-4xl">
        Latest
      </h2>
      <div className="flex flex-col gap-12 md:flex-row">
        <article className="bg-white rounded-xl overflow-hidden">
          <div>
            <Image
              src={imageCurrency}
              alt=""
              style={{
                minWidth: "255px",
                width: "100%",
                minHeight: "200px",
              }}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <span className="text-small">By Claire Robinson</span>
            <h3 className="text-blue text-titleArticle hover:text-green cursor-pointer">
              Receive money in any currency with no fees
            </h3>
            <p className="text-regular">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </article>
        <article className="bg-white rounded-xl overflow-hidden">
          <div>
            <Image
              src={imageRestaurant}
              alt=""
              style={{
                minWidth: "255px",
                width: "100%",
                minHeight: "200px",
              }}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <span className="text-small">By Wilson Hutton</span>
            <h3 className="text-blue text-titleArticle hover:text-green cursor-pointer">
              Treat yourself without worrying about money
            </h3>
            <p className="text-regular">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </article>
        <article className="bg-white rounded-xl overflow-hidden">
          <div>
            <Image
              src={imagePlane}
              alt=""
              style={{
                minWidth: "255px",
                width: "100%",
                minHeight: "200px",
              }}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <span className="text-small">By Wilson Hutton</span>
            <h3 className="text-blue text-titleArticle hover:text-green cursor-pointer">
              Take your Easybank card wherever you go
            </h3>
            <p className="text-regular">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </article>
        <article className="bg-white rounded-xl overflow-hidden">
          <div>
            <Image
              src={imageConfetti}
              alt=""
              style={{
                minWidth: "255px",
                width: "100%",
                minHeight: "200px",
              }}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <span className="text-small">By Claire Robinson</span>
            <h3 className="text-blue text-titleArticle hover:text-green cursor-pointer">
              Our invite-only Beta accounts are now live!
            </h3>
            <p className="text-regular">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Articles;
