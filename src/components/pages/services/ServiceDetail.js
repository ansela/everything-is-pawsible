/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useHistory, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

import { services, Content } from "../../../constants/servicesContent"

import THEMES from "../../../styles/themes"
const primary = THEMES.colors.primary

const Header = styled.h1`
  font-size: 3em;
  margin: 20px 0;
  color: black;
`

const NoService = () => (
  <div>
    <Header>Service Not Found</Header>
    <p>
      We're sorry, this service was not found. Please return to the services
      page to view our available services.
    </p>
  </div>
)

const ServiceDetail = () => {
  const history = useHistory()
  const { serviceId } = useParams()

  const service = services[serviceId]

  const content = service == null ? <NoService /> : <Content {...service} />

  const Button = styled(FontAwesomeIcon)`
    color: ${primary};
    border: none;
    border-radius: 57px;
    height: 36px;
    line-height: 44px;
    width: 44px;
    font-size: 1.8em;
    opacity: 80%;

    &:hover {
      cursor: pointer;
      opacity: 100%;
    }
  `

  return (
    <section
      css={css`
        height: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          height: 100%;

          @media only screen and (min-width: 600px) {
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            padding: 20px 0 80px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex: 1 1 100%;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Button
              icon={faArrowCircleLeft}
              onClick={() => history.push("/services")}
            />{" "}
            <div
              css={css`
                font-size: 1.2em;
                margin-left: 5px;
              `}
            >
              Return to Services
            </div>
          </div>
          <div
            css={css`
              flex: 1 1 100%;
            `}
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
