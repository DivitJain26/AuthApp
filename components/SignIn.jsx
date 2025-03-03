import React from "react"
import bcrypt from "bcryptjs"
import {Link, useNavigate, useLocation} from "react-router-dom"

const SignIn = (props) => {

    let navigate = useNavigate()
    let location = useLocation()

    React.useEffect(() => {
            if (localStorage.getItem('loggedUser')) {
                navigate("/dashboard")
            }
        }, [location.pathname])

    const [input, setInput] = React.useState({
        name: "",
        email: "",
        password: ""
    })
    
    const [alert, setAlert] = React.useState(null)
    
    const handleChange = (e) => {
        setInput(prevInput => ({...prevInput, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let users = JSON.parse(localStorage.getItem('users')) || []

        let validUser = users.find(user => user.email === input.email && bcrypt.compareSync(input.password, user.password))

        if (validUser) {
            localStorage.setItem('loggedUser', JSON.stringify(validUser))
            navigate("/dashboard")
        } else {
            setAlert("Invalid email or password")
            return
        }
    }
    
  return (
    <>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="max-w-70 p-5 sm:max-w-md sm:p-8 w-full rounded-md bg-neutral-900 shadow-lg">

                <h2 className="text-2xl text-center sm:text-3xl text-white font-bold mb-3">Sign In</h2>
                <p className="text-sm text-center text-gray-200 mb-2 sm:mb-4">Welcome Back!</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">

                    <label className="text-sm sm:text-base text-white">Email
                        <input 
                            type="email" 
                            className="w-full py-1.5 px-2 sm:py-2 rounded-sm mt-1
                                       bg-neutral-700 text-white text-sm sm:text-base
                                       focus:ring-1 focus:ring-blue-700 focus:border-blue-700
                                       outline-none"
                            placeholder="Email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="text-sm sm:text-base text-white">Password
                        <input 
                            type="password"
                            className="w-full py-1.5 px-2 sm:py-2 rounded-sm mt-1
                                       bg-neutral-700 text-white text-sm sm:text-base
                                       focus:ring-1 focus:ring-blue-700 focus:border-blue-700
                                       outline-none"
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                        />
                    </label>

                    <p className="text-red-600 text-xs sm:text-base">{alert}</p>

                    <button 
                        className="text-white bg-blue-700 rounded-sm
                                   font-medium sm:text-[1rem]
                                   w-full p-2 sm:p-3
                                   hover:bg-blue-800 transition-colors"
                    >Sign in
                    </button>
                </form>

                <div className="text-center mt-2 px-8 text-sm sm:text-base sm:mt-4">
                    <p className="text-gray-200 inline">Don't have an account? </p>
                    <Link to="/" className="text-blue-500 hover:underline">Create Account</Link>  
                </div>
            </div>
        </div>
    </>
  )
};

export default SignIn;