import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'


export default function Multimedia() {
    return(<Layout>

    <h2 className="text-2xl font-bold text-indigo-700 my-4">Multimedia</h2>


  <div className="relative bg-zinc-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Ave-Crux Mockumentary</h3>
    <div className="">This is a transmedia mockumentary about chinstraps. Mainly, it consisted of audiovisual pieces, word games and interactions on Twitter. We were 5 people in the team. Although I collaborated in all stages, I mainly dedicated myself to the writing of some scripts, voice over, recording and editing of videos and the assembly of the website.</div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-primary  m-2" href="https://www.youtube.com/watch?v=kwbYUuyLY84" target="_blank">Review</a>
      <a className="btn-primary  m-2" target="_blank" href="https://www.youtube.com/watch?v=tIjOVgJ2-gA">Trailer</a>            
      <a className="btn-primary  m-2" target="_blank" href="https://www.youtube.com/watch?v=bMSthUd9O1I">A piece of content</a>            
    </div>
    <div className="text-right text-sm italic text-green-600">Started and ended in 2020.</div>
  </div>

  <div className="relative bg-zinc-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Multimedia content for math teaching</h3>
    <div className="">I developed educational materials for differente social networks.</div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-primary  m-2" href="https://www.youtube.com/watch?v=Z3rnvbCvpvk" target="_blank">YouTube example</a>
      <a className="btn-primary  m-2" target="_blank" href="https://www.youtube.com/watch?v=tIjOVgJ2-gA">TikTok example</a>            
      <a className="btn-primary  m-2" target="_blank" href="https://www.youtube.com/watch?v=bMSthUd9O1I">Instagram example</a>            
    </div>
  </div>
   
    
    <div className="relative bg-zinc-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Ruby Course for Udemy</h3>
    <div className="">I am building a Ruby course for the Udemy platform. It will be available in 2022.</div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-primary  m-2" href="https://www.youtube.com/watch?v=frQRGcHItrg" target="_blank">While in Ruby</a>
      <a className="btn-primary  m-2" href="https://www.youtube.com/watch?v=a1sJvFyxMDM" target="_blank">Compiled and scripting languages </a>
      <a className="btn-primary  m-2" href="https://www.youtube.com/watch?v=7dC3FZujtYc" target="_blank">Course introduction </a>
    <div className="text-right text-sm italic text-green-600">Available in 2022.</div>
  </div></div>
  </Layout>)
}