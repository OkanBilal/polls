import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout";

const Home = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Link href="/newquestion" passHref>
          <button className=" bg-blue-100 p-3 rounded hover:bg-blue-200">
            New Question
          </button>
        </Link>
        <p className="text-2xl mt-8 mb-4 ">Questions</p>
        <ul>
          {questions.map((item, index) => {
            return (
              <div
                className="cursor-pointer bg-blue-100 p-4 mb-4 w-96 rounded hover:bg-blue-200 hover:transform transition duration-200
            ease-in-out"
                key={index}
              >
                <Link href={item.url} passHref>
                  <li className="text-lg">{item.question}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const headers = { "Content-Type": "application/json" };
  const url = "https://polls.apiblueprint.org/questions";
  const res = await fetch(url, { headers });
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
