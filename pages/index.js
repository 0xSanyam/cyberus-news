import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Cyberus News</title>
        <meta name="keywords" content="cyber, news, cyberus news" />
      </Head>

      <ArticleList article_pro={props.articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=6`
  // );
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await response.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
