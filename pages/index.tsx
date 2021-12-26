import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col my-6">
      <Head>
        <title>Juan Manuel Maffei - Porfolio</title>
        <meta name="description" content="Fullstack dev and teacher portfolio" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className="p-10 min-h-80 items-center">
        <div className="text-center">
        <h1 className="text-7xl my-5 font-extrabold hover:animate-bounce text-indigo-600">
          Juan Manuel Maffei's Portfolio
        </h1>
        <Image src="/images/profile.jpg" height={144} width={144} className="rounded-full shadow-lg"/>
        </div>        
        <div className="my-2 flex flex-wrap justify-content items-center">
          <Link href="/projects">
            <a className="m-2 btn-primary">Projects</a>
          </Link>
          <Link href="/samples">
            <a className="m-2 btn-primary">Samples</a>
          </Link>
          <Link href="/multimedia">
            <a className="m-2 btn-primary">Multimedia</a>
          </Link>

        </div>
      </div>      
      <div className="bg-gray-200 w-full h-full py-5 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-indigo-700 my-4">About</h2>
        <div className="text-justify">
        <p>Hi! I'm a fullstack dev, content creator and teacher. Here, you will find some works.</p>
        <p>I divide it in:</p>
        <ul>
          <li><strong>Projects:</strong> full development projects for me and for clients. </li>
          <li><strong>Other works:</strong> pieces of another works or using other technologies.</li>
          <li><strong>Multimedia:</strong> audiovisual, transmedia or social media productions.</li>
        </ul>
        </div>
        <h2 className="text-2xl font-bold text-indigo-700 my-4">Projects</h2>
        

        <h2 className="text-2xl font-bold text-indigo-700">Contact</h2>
      </div>
    </div>
  )
}