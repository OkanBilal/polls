import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout";
import QuestionCard from "../components/questioncard";

const Home = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <p className="text-2xl mb-4">Questions</p>
        <ul>
          {questions.map((item, index) => {
            return (<QuestionCard key={index} {...item}/>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const url = "https://polls.apiblueprint.org/questions";
  const res = await fetch(url,  requestOptions );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { questions: data },
  };
}
