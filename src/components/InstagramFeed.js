import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import THEMES from "../styles/themes"
const primary = THEMES.colors.primary

// Hook
function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

const InstagramFeed = () => {
  const [images, setImages] = useState([])
  const { width } = useWindowSize()

  const imageWidthHeight = width > 1280 ? 300 : 200

  const numImages = Math.floor((width - 100) / imageWidthHeight)

  console.log(
    `screen width: ${width}, image width/height: ${imageWidthHeight}, numImages: ${numImages}`
  )

  useEffect(() => {
    // get pics
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`
    )
      .then(response => response.json())
      .then(data => setImages(data.data))
  }, [])

  const openInstagram = () => {
    window.open("https://www.instagram.com/ashley.ansell", "_blank")
  }

  const Carousel = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: center;
    margin: 0px -10px -10px;
  `
  const Image = styled.img`
    height: ${imageWidthHeight}px;
    width: ${imageWidthHeight}px;
  `
  const ImageOverlay = styled.div`
    opacity: 0;
    transition: opacity 1s;
    background-color: ${primary};
    height: ${imageWidthHeight}px;
    width: ${imageWidthHeight}px;
    position: absolute;

    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  `
  const SeeMore = styled.div`
    flex-grow: 1;
    align-self: stretch;
    text-align: center;
    margin: auto;
    padding: 5px;
  `
  const Button = styled(FontAwesomeIcon)`
    color: ${primary};
    border: none;
    border-radius: 57px;
    height: 36px;
    line-height: 44px;
    width: 44px;
    font-size: 1.8em;
    opacity: 80%;

    &:hover {
      cursor: pointer;
      opacity: 100%;
    }
  `

  return (
    <Carousel>
      {images.slice(0, numImages).map(image => {
        const {
          id,
          media_type: mediaType,
          media_url: url,
          thumbnail_url: thumbnailUrl,
          permalink
        } = image

        const src = mediaType === "VIDEO" ? thumbnailUrl : url

        return (
          <div>
            <ImageOverlay
              onClick={() => {
                window.open(permalink, "_blank")
              }}
            />
            <Image key={id} src={src} />
          </div>
        )
      })}
      <SeeMore>
        See More from our Instagram feed
        <br />
        <Button icon={faArrowCircleRight} onClick={openInstagram}>
          Go
        </Button>
      </SeeMore>
    </Carousel>
  )
}

export default InstagramFeed
