import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default  function about(){
    const router = useRouter()
    const {hotelName="marriott"} = router.query
    return(
        <div className="container">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="heading">WELCOME TO HOTEL {hotelName.toUpperCase()}</h1>
            <p className="info">{hotelName.toUpperCase()} HOTEL have always achieved excellent international standards of quality products & services. The Group is consistently focused on enhancing its brand & creating memorable experiences for people.Overlooking the sprawling city, Our Hotel Karachi is a part of the most significant chain of hotels in Pakistan. The Hotel is perfect for both business and leisure travellers. Guests can choose from a variety of rooms and suites to enjoy their stay at the five-star hotel. Our conference and banquet facilities are a great choice for your next event with flexible meeting spaces. The lavishly selected banqueting venues and ballroom have played host to many prestigious gala dinners, weddings, fashion shows, musical events and official ceremonies.</p>
            <Image src="/hotel.jpeg" width={600} height={400}/>
        </div>
    )
}
