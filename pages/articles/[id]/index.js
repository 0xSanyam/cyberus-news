// import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";

const articles = (props) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <h1> {props.article.title}</h1>
      <p> {props.article.body} </p>
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async (context) => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default articles;
