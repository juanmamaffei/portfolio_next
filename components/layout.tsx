import { useState } from 'react'
import Navbar from "./navbar";

export default function Layout({ children }) {
  const [blur, setBlur] = useState('blur-none')
  return (
  <div>
    <Navbar blur={blur} setBlur={setBlur}/>
    <div className={`container sm:mx-16 ${blur}`}>
      { children }
    </div>
  </div>)
}