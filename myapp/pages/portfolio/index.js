import { useRouter } from "next/router";
import React from "react";

function PortFolio() {
  const router = useRouter();

  const handler = () => {
    router.push("portfolio/portfolioList");
  };
  return (
    <div>
      PortFolio
      <button onClick={handler}> portfolioList</button>
    </div>
  );
}

export default PortFolio;
