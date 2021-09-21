import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" my-8 hover:underline font-semibold text-base">
      <Link href="/">Home</Link>
    </div>
  );
};
