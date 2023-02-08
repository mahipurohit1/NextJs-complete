import React from "react";
import fs from "fs/promises";
import path from "path";
function ProductDetails(props) {
  // it doesn't require in fallback in "blocking" , and require in true case
  // if (!props.selectedProduct) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <h3>{props.selectedProduct.title}</h3>
      <p>{props.selectedProduct.description}</p>
    </div>
  );
}

export default ProductDetails;
async function getData() {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  return data;
}
export async function getStaticProps(context) {
  const { params } = context;
  const id = params.productId;
  const data = await getData();
  const selectedProduct = data.products.find((product) => product.id === id);
  if (!selectedProduct) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedProduct: selectedProduct,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData();
  const ids = data.products.map((item) => item.id);
  console.log(ids);
  const paramsWithId = ids.map((id) => {
    return {
      params: { productId: id },
    };
  });
  console.log(paramsWithId);

  return {
    // paths: [{ params: { productId: "p1" } }],
    // fallback: true,
    fallback: "blocking",
    paths: paramsWithId,
    // fallback: true,
  };
}
