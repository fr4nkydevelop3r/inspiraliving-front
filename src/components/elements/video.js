import React from "react"
import { getStrapiMedia } from "@/utils/media"
import { mediaPropTypes } from "@/utils/types"

const Video = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = true,
}) => {
  const fullVideoUrl = getStrapiMedia(media.url)
  const fullPosterUrl = getStrapiMedia(poster?.url)

  return (
    // TODO: Videos must have captions track
    // eslint-disable-next-line
    <video
      className={className}
      poster={fullPosterUrl}
      autoPlay={autoPlay}
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      loop
      muted
    >
      <source src={fullVideoUrl} type={media.mime} />
    </video>
  )
}

export default Video
