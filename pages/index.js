import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT MARKETPLACE</title>
        <meta name="description" content="NFT MARKETPLACE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
