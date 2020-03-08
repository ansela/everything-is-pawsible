import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons"

import THEMES from "../../styles/themes"
const primary = THEMES.colors.primary

const SocialMedia = () => {
  const StyledSocial = styled.div`
    display: flex;
    justify-content: space-evenly;
    justify-self: center;
  `
  const Icon = styled.div`
    padding: 15px;
    background-color: #f9f9ff;
    margin: 5px 5px 0 5px;
    color: black;
    height: 18px;
    width: 18px;
    text-align: center;

    &:hover {
      background-color: ${primary};
      color: white;
      cursor: pointer;
    }
  `
  return (
    <StyledSocial>
      <Icon>
        <FontAwesomeIcon icon={faFacebookF} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTwitter} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faPinterest} />
      </Icon>
    </StyledSocial>
  )
}

export default SocialMedia
