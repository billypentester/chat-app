import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="bg-gray-100">
            <div className="centered">
                <div>
                <h1 className="text-5xl font-medium text-neutral">Chat App</h1>
                <div className="my-10 flex justify-center gap-3">
                    <Link className="btn btn-neutral" to="/signup">Sign Up</Link>
                    <Link className="btn btn-neutral" to="/login">Login</Link>
                </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home
  