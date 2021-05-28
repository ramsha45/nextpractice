import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navbar'


export default function Home() {
  return (
    <div className="container">
       <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="heading">HOME PAGE</h1>
    </div>
  )
}
