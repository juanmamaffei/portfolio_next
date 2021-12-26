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

          <a className="m-2 btn-primary">Projects</a>
          <a className="m-2 btn-primary">Samples</a>
          <a className="m-2 btn-primary">Multimedia</a>

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
        
        <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 p-6 rounded-xl shadow-lg m-2 xs:w-full">
          <h3 className="text-center text-2xl font-bold my-4">Chamber Of Secrets</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 7, React 17, Postgres, Bootstrap</div>
          <div className="font-mono">🔏 A simple, safe and collaborative password manager 🔑. This is a personal project, initially planned for solving problems in EAPVC. Was developed (from the idea to deploy) in 40 hours.</div>
          <div className="my-2 font-mono">~/chamber_of_secrets $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2" href="https://github.com/juanmamaffei/chamber_of_secrets">Repo</a><a className="btn-code m-2" href="http://chamberofsecrets.xyz">App</a><Link href='/samples/chamberofsecrets'>
            <a className="btn-code">More info</a>
          </Link>
          </div>
          <div className="text-right text-sm italic text-green-600">Developed in December 2021</div>
        </div>
       
        <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">Praemium</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 5, JS, MySQL, Material Design</div>
          <div className="font-mono">In few words, a virtual wallet for clients fidelization 💲. It was developed for a specific client called Copicard and scaled for others. I developed, promoted in social media and got the clients. Due the pandemic (and my tiredness), it was ended.</div>
          <div className="my-2 font-mono">~/praemium $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2" href="https://bitbucket.org/juanmamaffei/praemium">Repo</a><a className="btn-code m-2">Demo</a><Link href='/samples/praemium'>
            <a className="btn-code" href="https://jmmaffei.com/que-fue-praemium/">More info</a>
          </Link>
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
            <Link href='/samples/transmediacademy'>
              <a className="btn-code">More info</a>
            </Link>
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
            <a className="btn-code m-2">Demo</a>
            <Link href='/samples/praemium'>
              <a className="btn-code">More info</a>
            </Link>
          </div>
          <div className="text-right text-sm italic text-green-600">Developed in 2019</div>
        </div>

        <div className="relative bg-gray-800 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">Ludere</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 5, JS, Postgres, Material Design</div>
          <div className="font-mono">🎮 At first, it was only a module for gamification at external virtual learning environments. Afterwards, it became a learning environment itself 👾.</div>
          <div className="my-2 font-mono">~/ludere $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2">Some repos</a>
            <Link href='/samples/praemium'>
              <a className="btn-code">More info</a>
            </Link>
          </div>
          <div className="text-right text-sm italic text-green-600">Developed in 2017</div>
        </div>

          <h2 className="text-2xl font-bold text-indigo-700 my-4">
            Other works</h2>
            <div className="relative bg-gray-700 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">This Portfolio</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Next JS, Three JS, TS, Tailwind</div>
          <div className="font-mono">I created this portfolio using Next JS, Three JS and other JSes 😆.</div>
          <div className="my-2 font-mono">~/portfolio $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2">Repo</a>
            
          </div>
          <div className="text-right text-sm italic text-green-600">December 2021</div>
        </div>


        <div className="relative bg-gray-700 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">Angular JS: Project and tutorial</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Angular 6, TS</div>
          <div className="font-mono">A tiny project for teach the basics of Angular.</div>
          <div className="my-2 font-mono">~/copa_argentina $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2" href="https://github.com/juanmamaffei/copa-argentina-angular" target="_blank">Repo</a>
            
          </div>
          <div className="text-right text-sm italic text-green-600">December 2018</div>
        </div>

        <div className="relative bg-gray-700 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">Course Review module for TransmediAcademy</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Rails 6, React 17</div>
          <div className="font-mono">A microservice for review courses in TransmediAcademy.</div>
          <div className="my-2 font-mono">~/course-review $ <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <a className="btn-code  m-2">Repo</a>
            <a className="btn-code  m-2">Demo</a>
          </div>
          <div className="text-right text-sm italic text-green-600">November 2021</div>
        </div>

        <div className="relative bg-gray-700 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
          <h3 className="text-center text-2xl font-bold my-4">More than 50 Wordpress sites</h3>
          <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Wordpress</div>
          <div className="font-mono">Most of the time a customer contacts me, I can solve their problems with Wordpress in a couple of days without writing a single line of code.</div>
          <div className="my-2 font-mono">https://site.com/wp-admin <span className="animate-ping">_</span></div>
          <div className="my-2 flex flex-wrap justify-content items-center">
            <div className="my-4"><a className="btn-code  m-2">EAPVC</a></div>
            <div className="my-4"><a className="btn-code  m-2">SECVC</a></div>
            <div className="my-4"><a className="btn-code  m-2">NETCORP</a></div>
            <div className="my-4"><a className="btn-code  m-2">IANews</a>    </div>        
          </div>
          <div className="text-right text-sm italic text-green-600">December 2021</div>
        </div>

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

        <h2 className="text-2xl font-bold text-indigo-700">Contact</h2>
      </div>
    </div>
  )
}
