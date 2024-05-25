import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { login } from './../api/index'
import { useMutation } from "react-query"
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '' })

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      toast.success(data.message) 
      localStorage.setItem('token', data.data.token)
      navigate('/chats')
    },
    onError: (error:any) => {
      toast.error(error.response.data.message)
    }
  })

  const loginUser = (e:any) => {
    e.preventDefault()
    mutate(user)
  }

  const handleInputChange = (e: any) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <div className="bg-gray-100">
      <div className="centered">
        <div className="w-full text-center">
          <h1 className="text-5xl font-medium text-neutral mb-10">Login</h1>
          <div className="w-full flex justify-center">
            <form className="w-1/3">
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Email" className="input input-bordered w-full" name="email" value={user.email} onChange={handleInputChange} />
                <input type="text" placeholder="Password" className="input input-bordered w-full" name="password" value={user.password} onChange={handleInputChange} />
                <button className="btn btn-neutral" onClick={(e) => loginUser(e)}>
                {
                  isLoading ? <span className="loading loading-spinner loading-md"></span> : 'Login'
                }
                </button>
                <div className="text-right">
                  <Link to="/signup" className="underline">Sign Up here</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
  
export default Login
  