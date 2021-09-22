import React from "react";
import Link from "next/link";

const QuestionsCard = (item) => {
  return (
    <div
      className="cursor-pointer box-hover p-4 mb-4 w-full sm:w-96 "
    >
      <Link href={item.url} passHref>
        <li className="text-lg">{item.question}</li>
      </Link>
    </div>
  );
};

export default QuestionsCard;
