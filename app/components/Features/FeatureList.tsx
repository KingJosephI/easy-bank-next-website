import FeatureCard from "./FeatureCard";
import { articles } from "./data";

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-4">
      {articles.map(({ id, title, description, illustration }) => (
        <FeatureCard
          key={id}
          title={title}
          description={description}
          illustration={illustration}
        />
      ))}
    </div>
  );
};

export default FeatureList;
