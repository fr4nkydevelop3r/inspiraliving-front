import React from "react"
import Markdown from "react-markdown"
import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "@/utils/button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { Link, navigate } from "gatsby"

const Hero = ({ data }) => {
  const image = useStaticQuery(graphql`
    query backgroundImage {
      file(relativePath: { eq: "universe.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  console.log(data.buttons[0].url)

  const pluginImage = getImage(image.file)

  return (
    <>
      <BgImage image={pluginImage} className="w-full min-h-screen">
        <div
          className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="mx-2 text-center container">
            <h4 className="font-body text-gray-100 text-3xl xs:text-4xl md:text-4xl mb-8">
              <span className="text-white">{data.title}</span>
            </h4>
            <h1 className="font-display text-gray-100 text-4xl xs:text-5xl md:text-5xl mb-8">
              <span className="text-white">{data.label}</span>
            </h1>
            <p className="font-body text-gray-100 text-2xl xs:text-3xl md:text-2xl mb-16">
              <span className="text-white">{data.description}</span>
            </p>
            <div className="md:mr-auto mb-6 sm:flex sm:justify-center">
              <button
                onClick={() => navigate(data.buttons[0].url)}
                className="block w-full h-16 sm:w-56 md:w-56 text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md px-6 py-2 text-primary-600 border-primary-600 hover:border-primary-200 hover:text-primary-200"
              >
                {data.buttons[0].text}
              </button>
            </div>
          </div>
        </div>
      </BgImage>
    </>
  )
}

export default Hero
