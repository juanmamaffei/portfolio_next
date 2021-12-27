import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'

export default function Home() {
  return (
    <div className="flex flex-col bg-blue-600">
      <Head>
        <title>Juan Manuel Maffei - Porfolio</title>
        <meta name="description" content="Fullstack dev and teacher portfolio" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className="flex flex-col min-h-screen">
          
        <div className="p-10 min-h-80 items-center bg-white">
          <div className="text-center">
          <h1 className="text-5xl my-5 font-extrabold ">
            Juan Manuel Maffei's Portfolio
          </h1>
          <Image src="/images/profile.jpg" height={144} width={144} className="rounded-full shadow-lg"/>
    
          </div>        
        </div>      
        
        <div className="flex-auto text-purple-200 bg-stone-900 w-full p-5 flex flex-col auto-cols-max items-center">
          <div className="flex-auto">
          <h2 className="text-3xl font-bold my-4">About</h2>

          </div>
          <div className="flex-auto text-lg">
          <p>Hi! I'm a fullstack dev, content creator and teacher. Here, you will find some works.</p>
          <p>I divide it in:</p>
          <ul className="m-2">
          <Link href="/projects">
            <li className="list"><strong>Projects:</strong> full development projects for me and for clients. </li></Link>
            <Link href="/samples">
            <li className="list"><strong>Other works:</strong> pieces of another works or using other technologies.</li>
            </Link>
            <Link href="/multimedia">
            <li className="list"><strong>Multimedia:</strong> audiovisual, transmedia or social media productions.</li>
            </Link>
          </ul>
          </div>
        </div>
        <div className="w-full h-full py-5 flex flex-col items-center font-black">

          <div className="text-white py-3 px-5 animate-pulse hover:animate-none hover:text-xl flex flex-row items-center">
            <div className="mr-2">
              <a href="https://www.linkedin.com/in/juanmamaffei/" target="_blank">
              <Image src="/images/linkedin.png" height="30px" width="30px" />
            </a>
            </div>
            <div className=""> 
              <a href="https://www.linkedin.com/in/juanmamaffei/" target="_blank">
            Find me in LinkedIn
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
