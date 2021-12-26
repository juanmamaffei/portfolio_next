
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
  <div>
    <Navbar />
    <div className="container mx-auto group">
      { children }
    </div>
  </div>)
}