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
  const Content = styled.div`
    font-size: 14px;
    margin-top: 1em;
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
          padding: 30px 0;

          @media only screen and (min-width: 600px) {
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            padding: 80px 0;
          }
          & > * {
            color: #a9a9a9;
            text-align: center;
            background: transparent;
            padding: 5px;
            margin: 20px 0;
            flex-basis: 100%;

            @media screen and (min-width: 600px) {
              flex-basis: 45%;
            }

            @media screen and (min-width: 768px) {
              flex-basis: 30%;
            }
          }
        `}
      >
        <div css={css``}>
          <StyledLink>Kennel</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
          </Content>
        </div>
        <div css={css``}>
          <StyledLink>Dog Walking</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </Content>
        </div>
        <div css={css``}>
          <StyledLink>Group Training</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </Content>
        </div>
        <div css={css``}>
          <StyledLink>In Home Services</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </Content>
        </div>
        <div css={css``}>
          <StyledLink>Obedience Class</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </Content>
        </div>
        <div css={css``}>
          <StyledLink>Private Training</StyledLink>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </Content>
        </div>
      </div>
    </section>
  )
}

export default Services
