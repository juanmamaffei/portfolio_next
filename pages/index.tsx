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
      <div className="flex flex-col justify-between min-h-screen">
          
        <div className="p-10 min-h-80 items-center bg-white">
          <div className="text-center">
          <h1 className="text-5xl my-5 font-extrabold ">
            Juan Manuel Maffei's Portfolio
          </h1>
          <Image src="/images/profile.jpg" height={144} width={144} className="rounded-full shadow-lg"/>
    
          </div>        
        </div>      
        
        <div className="bg-stone-900 w-full flex-auto p-5">
          <div className="flex flex-col text-purple-200 items-center justify-between h-max">
          <h2 className="text-3xl font-bold my-4">About</h2>
          <div className="">
          <p>Hi! I'm a fullstack dev, content creator and teacher. Here, you will find some works.</p>
          <p>I divide it in:</p>
          <ul>
            <li><strong>Projects:</strong> full development projects for me and for clients. </li>
            <li><strong>Other works:</strong> pieces of another works or using other technologies.</li>
            <li><strong>Multimedia:</strong> audiovisual, transmedia or social media productions.</li>
          </ul>
          </div>
          <div className="my-2 flex flex-row flex-nowrap justify-center items-center text-center">
            
            <Link href="/projects">
              <a className="m-2 btn-primary">Projects</a>
            </Link>
            <Link href="/samples">
              <a className="m-2 btn-primary">Other works</a>
            </Link>
            <Link href="/multimedia">
              <a className="m-2 btn-primary">Multimedia</a>
            </Link>

          </div>
        </div>
        </div>
        <div className="w-full h-full py-5 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-violet-50">Contact</h2>
          <div className="align-middle text-violet-100">
          <a href="">
            <Image src="/images/linkedin.png" height="30px" width="30px" />
            Find me in LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
