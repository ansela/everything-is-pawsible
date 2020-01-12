/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

import dog from "../../../images/dog2wide.jpg"

const Services = () => {
  return (
    <section
      css={css`
        position: relative;
        color: white;
        text-shadow: 2px 2px 6px #000;
        margin: -10px;
        height: 500px;
        h1 {
          font-size: 4em;
        }
      `}
    >
      <img
        src={dog}
        alt="Three Dogs"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          /* height: 500px; */
          width: 100%;
          object-fit: contain;
          opacity: 50%;
        `}
      />
      <div
        css={css`
          position: relative;
          /* top: 20px; */
          /* left: 25%; */
          /* transform: translateY(-50%); */
          /* text-align: center; */
          width: 100%;
          opacity: 100% !important;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
          /* opacity: 100%; */
          /* z-index: 100; */
          & > * {
            color: white;
            flex-basis: 300px;
            text-align: center;
            background: transparent;
            padding: 5px;
            /* width: 500px; */
            margin-bottom: 40px;
            /* width: 400px !important; */
          }
        `}
      >
        <div css={css``}>
          <h4>Pet Sitting</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
          </p>
        </div>
        <div css={css``}>
          <h4>Dog Walking</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </p>
        </div>
        <div css={css``}>
          <h4>Group Training</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare ante nec lacus sollicitudin, quis venenatis quam mollis.
            Aliquam dignissim porta sollicitudin.
          </p>
        </div>
        <div css={css``}>
          <h4>Training Consultation</h4>
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
