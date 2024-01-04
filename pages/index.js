


import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soladd LLC</title>
        <link rel="stylesheet" href="/font-awesome.min.css" />
        <link rel="stylesheet" href="/styles/global.css" />
        <meta name="description" content="Soladd LLC" />
        <link rel="icon" href="/logo.png" />
      </Head>




    </div>
  )
}
