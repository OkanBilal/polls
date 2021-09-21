const url = "https://polls.apiblueprint.org/questions";

const getrRequestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};
const postRequestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const getQuestions = async () => {
  const res = await fetch(url, getrRequestOptions);
  const data = await res.json();
  return data;
};

export const setVote = async (selected) => {
  const res = await fetch("https://polls.apiblueprint.org" + selected, {
    postRequestOptions,
  });
  const data = await res.json();
  return data;
};

export const createQuestion = async (newQuestion) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(newQuestion),
    headers: { "Content-Type": "application/json" },
  };
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  return data;
};
