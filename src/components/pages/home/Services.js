/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import THEMES from "../../../styles/themes"

import dog from "../../../images/dog2wide.jpg"

const primary = THEMES.colors.primary

const Services = () => {
  const StyledLink = styled(Link)`
    font-size: 1.2em;
    font-weight: 800;
    color: white;
    text-decoration: none;

    &:hover {
      color: ${primary};
    }
  `
  return (
    <section
      css={css`
        position: relative;

        margin: -10px;
        background: rgba(0, 0, 0, 1);
      `}
    >
      <img
        src={dog}
        alt="Three Dogs"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 50%;
        `}
      />
      <div
        css={css`
          position: relative;
          width: 100%;
          opacity: 100% !important;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;

          @media only screen and (min-width: 768px) {
            width: 50%;
          }
          & > * {
            color: #a9a9a9;
            flex-basis: 300px;
            text-align: center;
            background: transparent;
            padding: 5px;
            margin: 20px 0;
          }
        `}
      >
        <div css={css``}>
          <StyledLink>Pet Sitting</StyledLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
          </p>
        </div>
        <div css={css``}>
          <StyledLink>Dog Walking</StyledLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </p>
        </div>
        <div css={css``}>
          <StyledLink>Group Training</StyledLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </p>
        </div>
        <div css={css``}>
          <StyledLink>Training Consultation</StyledLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
