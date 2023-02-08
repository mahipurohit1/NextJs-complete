import { useRouter } from "next/router";
import React from "react";

function portfolioProject() {
  const router = useRouter();
  console.log(router.query.projectId);
  return <div>portfolioProject</div>;
}

export default portfolioProject;
