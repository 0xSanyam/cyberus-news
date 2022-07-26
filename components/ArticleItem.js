import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = (props) => {
  return (
    <Link href="/articles/[id]" as={`/articles/${props.article_pro2.id}`}>
      <a className={articleStyles.card}>
        <h3>{props.article_pro2.title} &rarr;</h3>
        <p>{props.article_pro2.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
