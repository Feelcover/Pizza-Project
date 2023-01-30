import Header from "./Header";
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="wrapper">
    <Header />
    <div className="content container">
    <Outlet/>
    </div>
  </div>
  )
}

export default Main