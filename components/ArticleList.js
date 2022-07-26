import articleStyle from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  return (
    <div className={articleStyle.grid}>
      {props.article_pro.map((article) => (
        <ArticleItem article_pro2={article} />
      ))}
    </div>
  );
};

export default ArticleList;
