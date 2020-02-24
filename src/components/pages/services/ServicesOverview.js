/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import ServiceTile from "./ServiceTile"
import { useRouteMatch } from "react-router-dom"
import { services } from "../../../constants/servicesContent"

const ServicesOverview = () => {
  const { url } = useRouteMatch()

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
        {Object.entries(services).map(([key, value]) => (
          <ServiceTile key={key} linkTo={`${url}/${key}`} {...value} />
        ))}
      </div>
    </section>
  )
}

export default ServicesOverview
