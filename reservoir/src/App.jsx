import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <>
    <div className="overflow-x-hidden">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
