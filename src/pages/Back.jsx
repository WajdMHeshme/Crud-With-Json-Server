import { Link } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";
import './Back.css'

const Back = () => {
  return (
    <div className="back-btn">
      <Link to={"/"}> <IoMdArrowRoundBack /> Back</Link>
    </div>
  )
}

export default Back
