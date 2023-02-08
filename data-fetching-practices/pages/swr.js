import React from "react";
import useSWR from "swr";
function Swr() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error, isLoading } = useSWR(url);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data[0].name}!</div>;
}

export default Swr;
