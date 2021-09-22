import React, { useState } from "react";
import Head from "next/head";
import { createQuestion } from "../utils/fetchquestions";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const newQuestion = {
    question: question,
    choices: choices,
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    const data = await createQuestion(newQuestion);
    setSuccessMessage("You created new question.");
    console.log(data);
  };

  const isValid = question.length > 0 && choices.length > 0;

  const handleSubmitError = (e) => {
    e.preventDefault();
    setErrorMessage("All fields must be filled!");
  };

  return (
    <>
      <Head>
        <title>Create New Question</title>
      </Head>
      <form
        onSubmit={(e) => (isValid ? submitQuestion(e) : handleSubmitError(e))}
      >
        <div className="flex flex-col mb-8 items-start">
          <label className="mb-2">New Question</label>
          {successMessage && (
            <p className="bg-green-400 p-2  mb-8 text-sm text-white w-56 rounded">
              {successMessage}
            </p>
          )}
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
          className=" bg-blue-100 mb-4 p-2 rounded hover:bg-blue-200 w-48"
        >
          Submit Question
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

export default CreateQuestion;
