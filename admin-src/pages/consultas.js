import Layout from "@/components/layout";
import Head from "next/head";
import styles from '@/styles/Consultas.module.css';
import ContactoListado from "@/components/contacto/listado";

export default function Consultas() {
  return (
    <>
      <Layout>
        <Head>
          <title>Consultas | Data Bank Systems</title>
        </Head>  
        <main>
          <h1>Consultas</h1>
          
          <ContactoListado />
        </main>
      </Layout>      
    </>
  )
}
