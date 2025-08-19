import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
    <div className="overflow-x-hidden">
    <Header/>
    <Outlet/>
    <Footer/>
    <Analytics />
    </div>
    </>
  )
}

export default App
