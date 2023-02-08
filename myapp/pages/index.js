import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      HomePage
      <ul style={{ lineStyle: " none" }}>
        <Link href={"/about"}>
          <li>about</li>
        </Link>
        <Link href={"/portfolio"}>
          {" "}
          <li>portfolio</li>
        </Link>
        <Link href={"/client"}>
          {" "}
          <li>client</li>
        </Link>
      </ul>
    </div>
  );
}

export default HomePage;
