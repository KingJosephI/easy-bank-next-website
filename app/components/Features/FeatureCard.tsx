import Image, { StaticImageData } from "next/image";

interface Feature {
  illustration: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard = ({ illustration, title, description }: Feature) => {
  return (
    <article className="flex flex-col items-center gap-4 md:items-start">
      <div>
        <Image src={illustration} alt="" />
      </div>
      <h3 className="text-blue text-2xl">{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default FeatureCard;
