import React, { useState } from "react";
import { Layout } from "../components/layout";
import Head from "next/head";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);

  const newQuestion = {
    question: question,
    choices: choices,
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    const url = "https://polls.apiblueprint.org/questions";
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(newQuestion),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Create New Question</title>
      </Head>
      <Layout>
        <form onSubmit={submitQuestion}>
          <div className="flex flex-col mb-12 items-start">
            <label className="mb-2">New Question</label>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question?"
              className="input"
              type="text"
              id="question"
            />
          </div>

          <div className="flex flex-col mb-8 items-start">
            <label className="mb-2">Choices</label>
            <input
              value={choices}
              onChange={(e) => setChoices(e.target.value.split(","))}
              className="input"
              placeholder="choice1, choice2"
              type="text"
              id="choice"
            />
            <p className="mt-1 text-xs">*Seperate with comma for new choice</p>
          </div>
          <button
            type="submit"
            className=" bg-blue-100 p-2 rounded hover:bg-blue-200 w-48"
          >
            Submit Question
          </button>
        </form>
      </Layout>
    </>
  );
};

export default CreateQuestion;
