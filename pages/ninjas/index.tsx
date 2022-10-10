import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
import { GetStaticProps } from "next";

// lefut mielőtt a component renderelve lenne
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data }, //amit szeretnénk hogy elérhető legyen az appban
  };
};

interface Address {
  city: string;
}

export interface Ninja {
  id: number;
  name: string;
  email: string;
  website: string;
  address: Address;
}

const Ninjas = ({ ninjas }: { ninjas: Ninja[] }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
