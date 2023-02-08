import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <Link href={"/"}>
          <li>Next Events</li>
        </Link>
        <Link href={"/events"}>
          {" "}
          <li>all Events</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
