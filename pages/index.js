import Link from 'next/link'
import Head from 'next/head'

const hotels = ["avatar", "marriott", "pc", "movenpick", "beachtree"]

export default function Home() {
  return (
    <div className="container">
       <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="heading">HOME PAGE</h1>
        <ul>
          {hotels.map(hotel => (
            <li className="list">
              <Link href={`/about?hotelName=${hotel}`}>
                <a>HOTEL {hotel.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
