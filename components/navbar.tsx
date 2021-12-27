import Link from 'next/link'
import Logo from './logo'
import Image from 'next/image'
export default function Navbar ({blur,setBlur}) {
  return(
    <nav className="bg-gray-800 wrapperXs sm:wrapper" onMouseLeave={()=>{setBlur('blur-none')}}
    onMouseEnter={()=>{setBlur('blur-2xl')}}
    >
      <div className="navListItemsXs sm:navListItems group">
        
      <div className="navItem px-4 sm:px-0">

          <Link href="/">
            <a><Image src="/images/home.png" height="30px" width="30px" />
            <span className="tooltip group-hover:sm:inline">Go to home</span>
            </a>
            
          </Link>
        </div>
        <div className="navItem px-4 sm:px-0">
          <Link href="/projects">
            <a>
              <Image src="/images/portfolio.png" height="30px" width="30px" /><span className="tooltip group-hover:sm:inline">Full projects</span>
            </a>
          </Link>
        </div>
        <div className="navItem px-4 sm:px-0 group">
          <Link href="/samples">
            <a>
              <Image src="/images/other.png" height="30px" width="30px" />
              <span className="tooltip group-hover:sm:inline">More works...</span>
            </a>
          </Link>
        </div>
        <div className="navItem px-4 sm:px-0 group">
          <Link href="/multimedia">
            <a>
              <Image src="/images/multimedia.png" height="30px" width="30px" /><span className="tooltip group-hover:sm:inline">Multimedia projects</span>
            </a>
          </Link>
        </div>
        <div className="navItem px-4 group sm:px-0">
          <a href="https://www.linkedin.com/in/juanmamaffei/" >
            <Image src="/images/linkedin.png" height="30px" width="30px" /><span className="tooltip group-hover:sm:inline">Linkedin</span>
          </a>
        </div>
      </div>
    </nav>
  )
}