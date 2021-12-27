import { useState } from 'react'
import Navbar from "./navbar";
import Head from 'next/head'
import Demo from '../pages/demo';

export default function Layout({ children }) {
  const [blur, setBlur] = useState('blur-none')
  return (
  <div>
    <Head>
    <title>Juan Manuel Maffei - Portfolio</title>
        <meta name="description" content="Fullstack dev and teacher portfolio" />
        <link rel="icon" type="image/svg+xml" href="/images/home.svg" />
    </Head>
    <Navbar blur={blur} setBlur={setBlur}/>
    <Demo blur={blur} />
    <div className={`sm:mx-16 ${blur}`}>
      { children }
    </div>
  </div>)
}