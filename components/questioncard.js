import React from "react";
import Link from "next/link";

const QuestionsCard = (item) => {
  return (
    <div
      className="cursor-pointer bg-blue-100 p-4 mb-4 w-96 rounded hover:bg-blue-200 
      hover:transform transition duration-200 ease-in-out"
    >
      <Link href={item.url} passHref>
        <li className="text-lg">{item.question}</li>
      </Link>
    </div>
  );
};

export default QuestionsCard;
