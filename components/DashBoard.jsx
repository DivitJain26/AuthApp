import React from "react"
import { useNavigate } from "react-router-dom"

const DashBoard = (props) => {

    const navigate = useNavigate()
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

    const handleLogOut = () => {
        localStorage.removeItem('loggedUser')
        navigate("/")
    }

  return (
    <>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div 
                className="max-w-70 p-5 sm:max-w-md sm:p-8 w-full rounded-md bg-neutral-900 shadow-lg flex flex-col items-center gap-5"
                >
                <h2 className="text-2xl text-center sm:text-3xl text-white font-bold">Dash Board</h2>
                <p className="text-gray-400 text-base ">Welcome {loggedUser.name}!</p>
                <button 
                    className="text-white bg-blue-700 rounded-sm
                                font-medium sm:text-[1rem]
                                w-full p-2 sm:p-3
                                hover:bg-blue-800 transition-colors"
                    onClick={handleLogOut}
                    >Log out
                </button>
            </div>
        </div>
    </>
  )
};

export default DashBoard;