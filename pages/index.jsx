import Head from "next/head";
import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
       <title>Ninja List | Home</title>
       <meta name="keywords" contents="ninjas" />
    </Head>
    <div>
   
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt eos corrupti ipsum, accusantium fugiat sed quisquam minus animi quibusdam.</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt eos corrupti ipsum, accusantium fugiat sed quisquam minus animi quibusdam.</p>
    <Link className={styles.btn} href="/ninjas">See Ninja Listings</Link>
   
    </div>
    </>
  );
}
