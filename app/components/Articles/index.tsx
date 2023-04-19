// import Image from "next/image";
// import imageConfetti from "../images/image-confetti.jpg";
// import imageCurrency from "../images/image-currency.jpg";
// import imagePlane from "../images/image-plane.jpg";
// import imageRestaurant from "../images/image-restaurant.jpg";
import ArticleHeading from "./ArticleHeading";
import ArticleList from "./ArticleList";

const Articles = () => {
  return (
    <section className="features bg-whiteSmoke bg-opacity-40 px-12 py-24 text-gray md:text-left md:px-24 lg:px-40">
      <ArticleHeading />
      <ArticleList />
    </section>
  );
};

export default Articles;
