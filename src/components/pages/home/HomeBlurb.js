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
        width: 100%;
        padding: 75px 10px;

        & > * {
          flex-basis: 50%;
          padding: 10px;
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
            /* object-fit: cover; */
            /* flex-basis: 50%;
            max-width: 50vw; */
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
            margin: 0 0 0 5px;
          `}
        >
          Missy will change your life
        </h6>
        <h2>Why should you use us?</h2>
        <p>
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
