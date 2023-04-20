import Layout from "@/components/layout";
import Head from "next/head";
import styles from '@/styles/Consultas.module.css';

export default function Consultas() {
  return (
    <>
      <Layout>
        <Head>
          <title>Consultas | Data Bank Systems</title>
        </Head>  
        <main>
          <h1>Lorem ipsum</h1>
          <p className={styles.parrafo}>Lorem ipsum dolor</p>
        </main>
      </Layout>      
    </>
  )
}
