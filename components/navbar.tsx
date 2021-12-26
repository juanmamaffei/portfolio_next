import Link from 'next/link'
import Logo from './logo'

export default function Navbar () {
  return(
    <nav className="bg-gray-800">
      <div className="max-w 7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/">
            <div className=" font-extrabold text-violet-500 text-2xl">
            <Logo size="35px" />

            </div>          
          </Link>
        </div>
      </div>
    </nav>
  )
}