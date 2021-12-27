import { useState } from 'react'
import Navbar from "./navbar";
import Head from 'next/head'

export default function Layout({ children }) {
  const [blur, setBlur] = useState('blur-none')
  return (
  <div>
    <Head>
    <title>Juan Manuel Maffei - Portfolio</title>
        <meta name="description" content="Fullstack dev and teacher portfolio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar blur={blur} setBlur={setBlur}/>
    <div className={`sm:mx-16 ${blur}`}>
      { children }
    </div>
  </div>)
}