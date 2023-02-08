import React from "react";

function User({ data }) {
  return (
    <div>
      <p>
        {data.id} ---- {data.name} ---{data.username} ---{data.email}
      </p>
    </div>
  );
}
export default User;

// export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   const ids = data.map((item) => {
//     return item.id;
//   });

//   const params = ids.map((i) => {
//     return {
//       params: {
//         id: `${i}`,
//       },
//     };
//   });
//   console.log(params);
//   return {
//     paths: params,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   const id = params.id;
//   console.log(id);
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   const data = await response.json();

//   if (data.length === 0) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data: data,
//     },
//     revalidate: 10,
//   };
// }
export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
