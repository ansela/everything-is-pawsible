/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import hero from "./images/hero.jpg"

export default ({ height, children }) => {
  return (
    <div
      css={css`
        position: relative;
        color: white;
        text-shadow: 2px 2px 6px #000;
        h1 {
          font-size: 4em;
        }
      `}
    >
      <img
        src={hero}
        alt="Three Dogs"
        css={css`
          display: flex;
          height: ${height || 25}vh;
          width: 100%;
          object-fit: cover;
          opacity: 50%;
          visibility: visible;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          text-align: center;
          width: 100%;
          opacity: 100% !important;
        `}
      >
        {children}
      </div>
    </div>
  )
}
