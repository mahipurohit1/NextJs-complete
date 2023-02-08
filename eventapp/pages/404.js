import Link from "next/link";
import React from "react";

function errorPage() {
  return (
    <div className="flex">
      <h1>Page Not Found ... </h1>
      <Link href={"/events"}>
        <button className="btn">Go Back !! </button>
      </Link>
    </div>
  );
}

export default errorPage;
