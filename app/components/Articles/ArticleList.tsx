import ArticleCard from "./ArticleCard";
import { articles } from "./data";

const ArticleList = () => {
  return (
    <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          illustration={article.illustration}
          title={article.title}
          author={article.author}
          description={article.description}
        />
      ))}
    </div>
  );
};

export default ArticleList;
