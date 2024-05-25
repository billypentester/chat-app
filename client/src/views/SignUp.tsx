import { Link, useNavigate } from "react-router-dom"
import ApiConnect from "../utils/Request"
import { useState } from "react"

const SignUp = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { data, error, loading, fetchData } = ApiConnect('/auth/signup', 'post', user)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const signUser = (e: any) => {
    e.preventDefault()
    fetchData()
    console.log('response: ', data, error, loading)
    if(error == null) {
      setTimeout(() => {
        // navigate('/login')
      }, 2000);
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="centered">
        <div className="w-full text-center">
          <h1 className="text-5xl font-medium text-neutral mb-10">Sign Up</h1>
          <div className="w-full flex justify-center">
            <div className="w-1/3">
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Name" disabled={loading} className="input input-bordered w-full" name="name" value={user.name} onChange={handleInputChange} />
                <input type="text" placeholder="Email" disabled={loading} className="input input-bordered w-full" name="email" value={user.email} onChange={handleInputChange} />
                <input type="text" placeholder="Password" disabled={loading} className="input input-bordered w-full" name="password" value={user.password} onChange={handleInputChange} />
                <button className="btn btn-neutral" disabled={loading} onClick={signUser}>
                  {
                    loading ? <span className="loading loading-spinner loading-md"></span> : 'Sign Up'
                  }                  
                </button>
                <div className="text-right">
                  <Link to="/login" className="underline">Login here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="toast toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div> */}
    </div>
  )
}
  
export default SignUp
  