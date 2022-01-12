import React from "react"
import PropTypes from "prop-types"
import { MdClose, MdChevronRight } from "react-icons/md"
import Image from "../image"
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "@/utils/types"
import ButtonLink from "./button-link"
import { useLockBodyScroll } from "@/utils/hooks"
import { getButtonAppearance } from "@/utils/button"
import CustomLink from "./custom-link"

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-black z-50 pb-6">
      <div className="container h-full flex flex-col justify-start">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center mt-8">
          {/* Company logo */}
          <Image media={navbar.logo} className="h-auto w-44 object-contain" />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1 text-primary-600">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mt-8 mx-auto ">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {navbar.links.map(navLink => (
              <li
                key={navLink.id}
                className="block w-full p-2 text-primary-600"
              >
                <CustomLink link={navLink}>
                  <div className="hover:text-gray-900  flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          <ButtonLink
            button={navbar.button}
            appearance={getButtonAppearance(navbar.button.type, "light")}
          />
        </div>
      </div>
    </div>
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
