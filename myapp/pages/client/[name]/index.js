import { useRouter } from "next/router";
import React from "react";

function clientWithName() {
  const router = useRouter();
  console.log(router.query);
  return <div>clientWithName</div>;
}

export default clientWithName;
