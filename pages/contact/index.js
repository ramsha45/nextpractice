import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../../components/Navbar'
export default function contact(){
    return(
        <div className="container">
            <Head>
            <title>Contact</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="heading">CONTACT PAGE</h1>
        </div>
    )
}