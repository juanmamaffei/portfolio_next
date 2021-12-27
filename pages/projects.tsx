import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'


export default function Projects() {
    return(<Layout>
            <h2 className="title">Projects</h2>
    <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 p-6 rounded-xl shadow-lg m-2 xs:w-full">
    <h3 className="text-center text-2xl font-bold my-4">Chamber Of Secrets</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 7, React 17, Postgres, Bootstrap</div>
    <div className="font-mono">🔏 A simple, safe and collaborative password manager 🔑. This is a personal project, initially planned for solving problems in EAPVC. Was developed (from the idea to deploy) in 40 hours.</div>
    <div className="my-2 font-mono">~/chamber_of_secrets $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code  m-2" href="https://github.com/juanmamaffei/chamber_of_secrets">Repo</a><a className="btn-code m-2" href="http://chamberofsecrets.xyz">App</a>
    </div>
    <div className="text-right text-sm italic text-green-600">Developed in December 2021</div>
  </div>
 
  <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Praemium</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 5, JS, MySQL, Material Design</div>
    <div className="font-mono">In few words, a virtual wallet for clients fidelization 💲. It was developed for a specific client called Copicard and scaled for others. I developed, promoted in social media and got the clients. Due the pandemic (and my tiredness), it was ended.</div>
    <div className="my-2 font-mono">~/praemium $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code m-2" href="https://bitbucket.org/juanmamaffei/praemium">Repo</a><a className="btn-code m-2" href="https://praemium.herokuapp.com/">Demo</a>
      <a className="btn-code" href="https://jmmaffei.com/que-fue-praemium/">More info</a>
    </div>
    <div className="text-right text-sm italic text-green-600">Started in 2018. Ended in 2020</div>

  </div>

  <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">TransmediAcademy</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 6 {"-->"} 7, Stimulus JS, Postgres, Tailwind</div>
    <div className="font-mono">📚 This is a complete virtual learning environment thinked for transmedia (the content flows in multiple platforms and promotes a lot of user-student generated content) and mobile-first 👨‍🏫. The initial idea started in my MBA thesis project.</div>
    <div className="my-2 font-mono">~/transmediAcademy $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code  m-2" href="https://github.com/juanmamaffei/transmediAcademy">Repo</a>
      <a className="btn-code m-2" href="http://transmediacademy.com">Demo (partial)</a>
      
    </div>
    <div className="text-right text-sm italic text-green-600">Available in 2022</div>
  </div>
  
  <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Lavago</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 5, React 16, Postgres, Material UI</div>
    <div className="font-mono">👚👚 It is a fragment of a SaaS for laundries. It was developed for a private client.</div>
    <div className="my-2 font-mono">~/lavago $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code  m-2" href="https://bitbucket.org/lavago/lavago-fullstack">Repo</a>
      <a className="btn-code m-2" href="">Demo</a>
      
    </div>
    <div className="text-right text-sm italic text-green-600">Developed in 2019</div>
  </div>

  <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">Ludere</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 5, JS, Postgres, Material Design</div>
    <div className="font-mono">🎮 At first, it was only a module for gamification at external virtual learning environments. Afterwards, it became a learning environment itself 👾.</div>
    <div className="my-2 font-mono">~/ludere $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code m-2" href="" target="_blank">Repos</a>
        <a className="btn-code" href="">More info</a>
    </div>
    <div className="text-right text-sm italic text-green-600">Developed in 2017</div>
  </div>


  </Layout>)
}