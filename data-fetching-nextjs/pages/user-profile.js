import React from "react";

function UserProfile(props) {
  return <div>{props.username}</div>;
}

export default UserProfile;
export async function getServerSideProps() {
  return {
    props: {
      username: "mahi",
    },
  };
}
