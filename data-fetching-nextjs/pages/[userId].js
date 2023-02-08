import React from "react";

function userId(props) {
  return <div>{props.userId}</div>;
}

export default userId;
export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      userId: "userId : " + params.userId,
    },
  };
}
