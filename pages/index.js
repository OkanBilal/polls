import Head from "next/head";
import Link from "next/link";
import QuestionCard from "../components/questioncard";
import { getQuestions } from "../utils/fetchquestions";

const Home = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/createquestion" passHref>
          <button className=" bg-blue-100 p-3 rounded mb-8 hover:bg-blue-200">
            New Question
          </button>
        </Link>
        <p className="text-2xl mb-4">Questions</p>
        <ul>
          {questions.map((item, index) => {
            return (<QuestionCard key={index} {...item}/>
            );
          })}
        </ul>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
 const data = await getQuestions()

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { questions: data },
  };
}
