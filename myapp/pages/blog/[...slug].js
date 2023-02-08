import { useRouter } from "next/router";
import React from "react";

function blogPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>blogPage</div>;
}

export default blogPage;
