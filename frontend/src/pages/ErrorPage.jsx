import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4" style={{height:"100vh"}}>
        <h4 className="text-center">Page Not Found! Go to Home Page</h4>
        <Link to="/">
          Home
        </Link>
    </div>
  )
}
export default ErrorPage
