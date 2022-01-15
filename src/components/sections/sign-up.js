import React, { useState } from "react"
import { navigate } from "gatsby"
import Swal from "sweetalert2"

import { handleSuscription } from "../../utils/suscribe-user"

const SignUp = ({ data }) => {
  const [email, setEmail] = useState("")

  const suscribeUser = async e => {
    e.preventDefault()
    const suscribe = await handleSuscription(email)
    if (suscribe) {
      if (suscribe.result === "success") {
        console.log(suscribe)
        Swal.fire("Awesome!", "Welcome to InSpiraLiving!", "success")
        navigate("/")
      } else {
        Swal.fire("Ups!", suscribe.msg, "error")
        console.log(suscribe.msg)
      }
    } else {
      Swal.fire("Ups!", "Something went wrong", "error")
    }
  }

  return (
    <div className="bg-black h-800 ">
      <div className="container mx-auto  w-screen p-12 sm:px-6 lg:py-16 lg:px-8 md:h-max md:p-32 lg:mt-64 xl:mt-8 xl:max-w-5xl">
        <h2 className="text-3xl font-display text-indigo-600 leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {data.heading}
        </h2>
        <p className="font-body text-indigo-600 mt-12 text-2xl">
          {data.subheading}
        </p>
        <form className="mt-8 sm:flex" onSubmit={suscribeUser}>
          <input
            aria-label="Email address"
            type="email"
            required
            className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="Enter your email"
            onChange={event => setEmail(event.target.value)}
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {data.button[0].text}
            </button>
          </div>
        </form>
        <div className="flex flex-col mt-8">
          <p className="font-body text-green-300 mt-12 text-xl italic">
            {data.description}
          </p>
          <span className="font-body text-green-300 mt-12 text-xl self-end">
            {data.author}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
