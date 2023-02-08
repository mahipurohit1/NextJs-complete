import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Home(props) {
  const router = useRouter();
  return (
    <div>
      {props.data.map((item) => {
        return (
          <Link href={`/${item.id}`}>
            <div style={{ margin: "10px" }}>
              {item.id} : {item.name}
            </div>
          </Link>
        );
      })}

      <button
        onClick={() => {
          router.push("/swr");
        }}
      >
        swr for data fetching
      </button>
    </div>
  );
}

export default Home;

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   if (data.length === 0) {
//     return {
//       notFound: true,
//     };
//   }

// return {
//   props: {
//     data: data,
//   },
//   revalidate: 10,
// };
// }

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
