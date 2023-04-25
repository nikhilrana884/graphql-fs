import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GraphQL-FS</title>
      </Head>
      <h1>
        GraphQL-FS
      </h1>
      <Header />
    </div>
  )
}
export default Home