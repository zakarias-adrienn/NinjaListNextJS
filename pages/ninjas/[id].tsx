import { GetStaticProps, GetStaticPaths } from "next";
import { Ninja } from ".";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }: { ninja: Ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
