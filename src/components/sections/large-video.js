import React from "react"
import Video from "../elements/video"
import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "@/utils/button"

const LargeVideo = ({ data }) => {
  return (
    /*<section className="container flex flex-col align-middle text-center pt-12 pb-16">
      <h2 className="title mb-6">{data.title}</h2>
      <p className="text-lg mb-10">{data.description}</p>
      <div className="w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl">
        <Video
          media={data.video}
          poster={data.poster}
          className="w-full max-h-full"
        />
      </div>
    </section>*/
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
      {/*<div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>*/}
      <div className="relative z-30 h-screen w-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h5 className="text-gray-100 font-display text-3xl xs:text-4xl md:text-5xl">
            <span className="text-white">{data.title}</span>{" "}
          </h5>
          <p className="text-gray-200 font-body text-1xl xs:text-2xl md:text-3xl leading-tight mt-6">
            {data.description}
          </p>
          <div className="inline-flex mt-6">
            <ButtonLink
              button={data.buttons[0]}
              appearance={getButtonAppearance("primary", "light")}
              key={data.buttons[0].id}
            />
          </div>
        </div>
      </div>
      <Video media={data.video} poster={data.poster}>
        Your browser does not support the video tag.
      </Video>
    </header>
  )
}

export default LargeVideo
