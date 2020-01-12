/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import HeroImage from "../../../HeroImage"
import TransparentButton from "../../TransparentButton"

import THEMES from "../../../styles/themes"
import HomeBlurb from "./HomeBlurb"
import Services from "./Services"

const Home = () => {
  const buttonColor = THEMES.colors.primary
  const StyledButton = styled.button`
    color: ${buttonColor};
    background: transparent;
    font-size: 1.2em;
    padding: 10px;
    border: 1px solid ${buttonColor};

    &:hover {
      background: ${buttonColor};
      color: white;
    }
  `
  return (
    <div>
      <HeroImage height={50}>
        <h3
          css={css`
            padding-bottom: 5px;
            margin-bottom: 0;
          `}
        >
          With Missy
        </h3>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              height: 2px;
              background-color: ${buttonColor};
              width: 50%;
              max-width: 750px;
            `}
          />
        </div>
        <h1
          css={css`
            margin: 0 0 10px;
          `}
        >
          Everything Is Pawsible
        </h1>
        <StyledButton>Schedule Consultation</StyledButton>
      </HeroImage>
      <div
        css={css`
          padding: 10px;
        `}
      >
        <HomeBlurb />
        <Services />
      </div>
    </div>
  )
}

export default Home
