import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

// lefut mielőtt a component renderelve lenne
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data }, //amit szeretnénk hogy elérhető legyen az appban
  };
};

const Ninjas = ({ ninjas }) => {
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
