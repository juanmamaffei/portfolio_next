import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col bg-blue-600">
      <Head>
        <title>Juan Manuel Maffei - Portfolio</title>
        <meta name="description" content="Fullstack dev and teacher portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
          
        <div className="p-10 min-h-80 items-center bg-gradient-to-bl from-white via-gray-50 to-white">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden:{ scale:.8, opacity: 0},
                visible: { scale:1, opacity:1, transition:{delay:0.2}}
              }}
            >
              <h1 className="text-5xl my-5 font-extrabold ">
                Juan Manuel Maffei's Portfolio
              </h1>

          <Image src="/images/profile.jpg" height={144} width={144} className="rounded-full shadow-lg"/>
    
            </motion.div>
          </div>        
        </div>      
        
        <div className="flex-auto flex flex-col items-center justify-center text-white bg-gradient-to-bl from-stone-900 to-stone-700 w-full p-5 text-center">
          <div className="w-full md:8-12 lg:w-6/12">
              <motion.div initial="hidden"
              animate="visible"
              variants={{
                hidden:{ scale:.8, opacity: 0},
                visible: { scale:1, opacity:1, transition:{delay:1}}
              }}>
            <div className="container">
          <h2 className="text-3xl font-bold my-4">About</h2>

          </div>
          <div className="text-xl">
          <p>Hi! I'm a fullstack dev, content creator and teacher. Here, you will find some works.</p>
          <ul className="m-10">
          <Link href="/projects">
            <motion.li className="list" whileHover={{ scale: 1.1, transition:{duration:.2}}}><strong>Projects:</strong> full development projects for me and for clients. </motion.li></Link>
            <Link href="/samples">
            <motion.li className="list" whileHover={{ scale: 1.1, transition:{duration:.2}}}><strong>Other works:</strong> pieces of another works or using other technologies.</motion.li>
            </Link>
            <Link href="/multimedia">
            <motion.li className="list" whileHover={{ scale: 1.1, transition:{duration:.2}}}><strong>Multimedia:</strong> audiovisual, transmedia or social media productions.</motion.li>
            </Link>
          </ul>
          </div>
          </motion.div>

          </div>
          <motion.div className="hidden md:inline w-4/12 pl-10" initial="hidden"
              animate="visible"
              variants={{
                hidden:{ scale:.8, opacity: 0},
                visible: { scale:1, opacity:1, transition:{delay:2}}
              }}>
            <Image src="/images/home.svg" height="300px" width="300px" />
          </motion.div>
        </div>
        
        <div className="w-full h-full py-5 flex flex-col items-center font-black">

          <motion.div className="text-white py-3 px-5 animate-pulse hover:animate-none hover:text-xl flex flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden:{ scale:.2, opacity: 0},
            visible: { scale:1, opacity:1, transition:{delay: 3}}
          }}>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
