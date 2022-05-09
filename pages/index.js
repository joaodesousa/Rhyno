import Head from 'next/head'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Twitch from './components/Twitch'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Rhyno Esports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Navbar />
      <Hero />
      <News />
      <Twitch />


    </div>
  )
}
