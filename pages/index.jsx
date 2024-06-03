import Head from "next/head";
import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
       <title>Exclusive List | Home</title>
       <meta name="keywords" contents="Exclusives" />
    </Head>
    <div>
   
      <h1 className={styles.title}>Welcome to our Exclusive Members list</h1>
      <p className={styles.text}>Our Exclusive members list is just a conscise list of our exclusive and dedicated members of our community group commited to achieving our set goals for our group and comunity at large </p>
      <p className={styles.text}>This list just serves the purpose to distingush and identify the exclusive memebers of our community and serves as a distinguished list for the top level members of our community.</p>
      <p className={styles.text}>Our Exclusive members list is just a conscise list of our exclusive and dedicated members of our community group commited to achieving our set goals for our group and comunity at large </p>
      <p className={styles.text}>This list just serves the purpose to distingush and identify the exclusive memebers of our community and serves as a distinguished list for the top level members of our community.</p>
    <Link className={styles.btn} href="/exclusives">View Exclusive list</Link>
   
    </div>
    </>
  );
}
