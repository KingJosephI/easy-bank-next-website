import FeatureHeading from "./FeatureHeading";
import FeatureList from "./FeatureList";

const Features = () => {
  return (
    <section className="features bg-whiteSmoke bg-opacity-90 px-12 py-24 text-center text-gray md:text-left md:px-24 lg:px-40">
      <FeatureHeading />
      <FeatureList />
    </section>
  );
};

export default Features;
