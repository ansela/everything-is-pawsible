/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

import THEMES from "../../../styles/themes"

import dog1wide from "../../../images/dog1wide.jpg"

const HomeBlurb = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 75px 0;

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
          src={dog1wide}
          alt="puppy looking left"
          css={css`
            height: auto;
            width: 100%;
          `}
        />
      </div>

      <div>
        <h6
          css={css`
            color: ${THEMES.colors.primary};
            text-transform: uppercase;
            margin-bottom: 10px;
          `}
        >
          Missy will change your life
        </h6>
        <h2
          css={css`
            color: black;
          `}
        >
          Why should you use us?
        </h2>
        <p
          css={css`
            font-size: 16px;
            line-height: 32px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
          Aliquam dignissim porta sollicitudin. Nulla volutpat erat a ipsum
          efficitur consectetur. In hendrerit quis lectus faucibus finibus. Sed
          vel ante vitae est luctus euismod non a tellus. Pellentesque tincidunt
          vestibulum mi, vel feugiat dui consequat eu. Donec ac dignissim sem.
          Sed a nulla a eros laoreet hendrerit vel sed orci.
        </p>
      </div>
    </section>
  )
}

export default HomeBlurb
