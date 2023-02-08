import React, { useEffect, useState } from "react";

function LastSales(props) {
  const [sales, setSales] = useState(props.sales);

  const fetchData = async function () {
    const response = await fetch(
      "https://nextjs-354f9-default-rtdb.firebaseio.com/sales.json"
    );
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      const transformData = [];
      for (const key in data) {
        transformData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformData);
    });
  }, []);
  if (!sales) {
    return <p>loading</p>;
  }
  return (
    <>
      {sales.map((item) => {
        return (
          <li key={item.id}>
            {item.username} - {item.volume}
          </li>
        );
      })}
    </>
  );
}

export default LastSales;
export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-354f9-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const transformData = [];
  for (const key in data) {
    transformData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformData,
    },
  };
}
