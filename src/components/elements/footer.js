import React, { useState } from "react"
import Image from "../image"
import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "@/utils/types"
import ButtonLink from "./button-link"
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import Swal from "sweetalert2"

import { handleSuscription } from "../../utils/suscribe-user"

const Footer = ({ footer }) => {
  const [email, setEmail] = useState("")

  const suscribeUser = async e => {
    e.preventDefault()
    const suscribe = await handleSuscription(email)
    if (suscribe) {
      if (suscribe.result === "success") {
        setEmail("")
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
    <footer className="text-center bg-black text-white">
      <div className="container px-6 pt-6">
        <div className="flex justify-center mb-6">
          <button
            id="facebook"
            className="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 mr-3"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button
            id="instagram"
            className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 mr-3"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button
            id="twitter"
            className="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl mr-3"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </button>

          <button
            id="youtube"
            className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl mr-3"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </button>

          {/**
           <button id="tiktok" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
            <i class="fab fa-tiktok"></i>
            </button>
           */}
        </div>

        <div>
          <form onSubmit={suscribeUser}>
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>{footer.ctatext}</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  aria-label="Email address"
                  type="email"
                  required
                  value={email}
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md px-6 py-2 text-primary-600 border-primary-600"
                >
                  {footer.button.text}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-2">
          <p>{footer.description}</p>
        </div>

        {/*<div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Links</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Links</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Links</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" class="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Links</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>

              </li>
            </ul>
          </div>
        </div>*/}
      </div>

      <div className="text-center p-4">{footer.rights}</div>
    </footer>
  )
}

export default Footer
