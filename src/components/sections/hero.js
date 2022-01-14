import React from "react"
import Markdown from "react-markdown"
import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "@/utils/button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"

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

  console.log(image)

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
            <p className="font-body text-gray-100 text-2xl xs:text-3xl md:text-2xl">
              <span className="text-white">{data.description}</span>
            </p>
          </div>
        </div>
      </BgImage>
      <div>Hello world</div>
    </>
  )
}

export default Hero
