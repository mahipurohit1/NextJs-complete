import fs from "fs/promises";
import Link from "next/link";
import path from "path";
function HomePage(props) {
  return (
    <ul>
      {props.products.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data", //(like no data pages)
      },
    };
  }
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //revalidate in production server in every after 10  second we  will see if we reload  but not in deployment section
  };
}
