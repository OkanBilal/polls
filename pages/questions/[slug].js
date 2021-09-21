import React, { useState } from "react";
import Head from "next/head";
import { getQuestions, setVote } from "../../utils/fetchquestions";

const QuestionDetail = ({ questions }) => {
  const [selected, setSelected] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const submitVote = async (e) => {
    e.preventDefault();
    const data = await setVote(selected);
    setErrorMessage("");
    console.log(data);
  };

  const isValid = selected.length > 0;

  const handleSubmitError = (e) => {
    e.preventDefault();
    setErrorMessage("You did not select any of the choices!");
  };

  return (
    <>
      <Head>
        <title>Question Detail</title>
      </Head>
      <p className="text-2xl font-semibold ">{questions.question}</p>
      <form onSubmit={(e) => (isValid ? submitVote(e) : handleSubmitError(e))}>
        {questions.choices.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center mb-4 mt-4 space-x-2"
            >
              <input
                type="radio"
                id={item.choice}
                name="choices"
                value={item.url}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label for="html">{item.choice}</label>
            </div>
          );
        })}
        <button
          type="submit"
          className=" bg-blue-100 p-2 mb-4 rounded hover:bg-blue-200"
        >
          Vote
        </button>
      </form>
      {errorMessage && (
        <p className="bg-red-400 p-2 text-sm text-white w-56 rounded">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default QuestionDetail;

export async function getStaticPaths() {
  const data = await getQuestions();
  const paths = data.map((i, index) => {
    const idx = `${index + 1}`.toString();
    return { params: { slug: idx } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const id = params.slug;
  const data = await fetch(
    "https://polls.apiblueprint.org/questions/" + id,
    requestOptions
  );
  const questions = await data.json();

  return {
    props: {
      questions,
    },
  };
}
