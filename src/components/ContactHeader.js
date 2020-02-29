import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useHistory, useLocation } from "react-router-dom"

import header from "../images/header2.png"
import THEMES from "../styles/themes"
const primary = THEMES.colors.primary

const ContactHeader = () => {
  const history = useHistory()
  const location = useLocation()

  const StyledContactHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const Brand = styled.div`
    padding: 5px 0;
  `
  const Icon = styled.a`
    padding: 20px;
    background-color: ${primary};
    color: white;
    text-align: center;
    font-size: 1.5em;

    &:hover {
      cursor: pointer;
    }
  `
  const Image = styled.img`
    height: 50px;
    @media screen and (max-width: 400px) {
      height: 40px;
    }

    &:hover {
      cursor: pointer;
    }
  `
  return (
    <StyledContactHeader>
      <Icon href="mailto:test@example.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Icon>
      <Brand>
        <Image
          src={header}
          alt="Everything Is Pawsible Logo"
          onClick={() => {
            if (location !== "/") history.push("/")
          }}
        />
      </Brand>
      <Icon href="tel:555-555-5555">
        <FontAwesomeIcon icon={faPhoneAlt} />
      </Icon>
    </StyledContactHeader>
  )
}

export default ContactHeader
