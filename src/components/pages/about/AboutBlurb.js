/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

import THEMES from "../../../styles/themes"

import dog3wide from "../../../images/dog3wide.jpg"

const primary = THEMES.colors.primary

const AboutBlurb = () => {
  const StyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 1.2em;
    padding: 15px 30px;

    &:hover {
      background: transparent;
      border: 1px solid ${primary};
      color: ${primary};
      cursor: pointer;
    }
  `
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 75px 10px;

        @media only screen and (min-width: 600px) {
          flex-direction: row;
        }

        & > * {
          flex-basis: 100%;
          padding: 10px;

          @media only screen and (min-width: 600px) {
            flex-basis: 50%;
          }
        }
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src={dog3wide}
          alt="puppy running"
          css={css`
            height: auto;
            width: 100%;
          `}
        />
      </div>

      <div>
        <h6
          css={css`
            color: ${primary};
            text-transform: uppercase;
            margin-bottom: 10px;
          `}
        >
          professional and engaging
        </h6>
        <h1>Missy Ansell</h1>
        <h6>Over 10 years of training and kennel expertise</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
          Aliquam dignissim porta sollicitudin. Nulla volutpat erat a ipsum
          efficitur consectetur. In hendrerit quis lectus faucibus finibus. Sed
          vel ante vitae est luctus euismod non a tellus. Pellentesque tincidunt
          vestibulum mi, vel feugiat dui consequat eu. Donec ac dignissim sem.
          Sed a nulla a eros laoreet hendrerit vel sed orci.
        </p>
        <StyledButton>Book a Consultation Now</StyledButton>
      </div>
    </section>
  )
}

export default AboutBlurb
