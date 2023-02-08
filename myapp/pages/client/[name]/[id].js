import { useRouter } from "next/router";
import React from "react";

function clientWithId() {
  const router = useRouter();
  console.log(router.query);
  return <div>clientWithId</div>;
}

export default clientWithId;
