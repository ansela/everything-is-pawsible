/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Service from "./Service"

import img1 from "../../../images/about3.jpg"
import img2 from "../../../images/home1.jpg"
import img3 from "../../../images/home2.jpg"
import img4 from "../../../images/home3.jpg"
import img5 from "../../../images/home4.jpg"
import img6 from "../../../images/dog1wide.jpg"

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante nec lacus sollicitudin, quis venenatis quam mollis."

const Services = () => {
  return (
    <section
      css={css`
        position: relative;
        background-color: white;
        margin: -10px;
      `}
    >
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
            text-align: center;
            background: transparent;
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
        <Service title="Kennel" content={content} linkTo="/" imgSrc={img1} />
        <Service
          title="Dog Walking"
          content={content}
          linkTo="/"
          imgSrc={img2}
        />
        <Service
          title="Group Training"
          content={content}
          linkTo="/"
          imgSrc={img3}
        />
        <Service
          title="In Home Services"
          content={content}
          linkTo="/"
          imgSrc={img4}
        />
        <Service
          title="Obedience Class"
          content={content}
          linkTo="/"
          imgSrc={img5}
        />
        <Service
          title="Private Training"
          content={content}
          linkTo="/"
          imgSrc={img6}
        />
      </div>
    </section>
  )
}

export default Services
