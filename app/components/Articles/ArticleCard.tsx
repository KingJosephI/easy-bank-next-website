import Image, { StaticImageData } from "next/image";
import React from "react";

interface Article {
  illustration: StaticImageData;
  author: string;
  title: string;
  description: string;
}

const ArticleCard = ({ illustration, author, title, description }: Article) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden">
      <div>
        <Image
          src={illustration}
          alt=""
          style={{
            minWidth: "255px",
            width: "100%",
            minHeight: "200px",
          }}
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <span className="text-small">By {author}</span>
        <h3 className="text-blue text-titleArticle hover:text-green cursor-pointer">
          {title}
        </h3>
        <p className="text-regular">{description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
