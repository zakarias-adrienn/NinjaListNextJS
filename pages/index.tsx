import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          bibendum quam. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Cras id dui quis mauris tincidunt
          semper eget quis turpis. Sed vitae feugiat eros, semper sagittis
          libero. Ut efficitur nunc eu mauris imperdiet, non cursus turpis
          vehicula. Cras pellentesque tempor nisi eget interdum. Morbi aliquam
          tincidunt risus in volutpat.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          bibendum quam. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Cras id dui quis mauris tincidunt
          semper eget quis turpis. Sed vitae feugiat eros, semper sagittis
          libero. Ut efficitur nunc eu mauris imperdiet, non cursus turpis
          vehicula. Cras pellentesque tempor nisi eget interdum. Morbi aliquam
          tincidunt risus in volutpat.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
