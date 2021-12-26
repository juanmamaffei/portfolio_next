import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'


export default function Samples() {
    return(<Layout>
    <h2 className="title">
      Other works</h2>
      <div className="relative bg-gray-700 text-gray-100 sm:w-6/12 xs:w-full p-6 rounded-xl shadow-lg m-2">
    <h3 className="text-center text-2xl font-bold my-4">This Portfolio</h3>
    <div className="top-0 -left-2 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">Next JS, Three JS, TS, Tailwind</div>
    <div className="font-mono">I created this portfolio using Next JS, Three JS and other JSes 😆.</div>
    <div className="my-2 font-mono">~/portfolio $ <span className="animate-ping">_</span></div>
    <div className="my-2 flex flex-wrap justify-content items-center">
      <a className="btn-code  m-2" href="https://github.com/juanmamaffei/portfolio_next">Repo</a>
      
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
 </Layout>)
}