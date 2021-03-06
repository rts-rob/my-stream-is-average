import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StreamList from '@components/StreamList'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My stream is average (I guess)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Have some average streams" />
        <StreamList />
      </main>

      <Footer />
    </div>
  )
}
