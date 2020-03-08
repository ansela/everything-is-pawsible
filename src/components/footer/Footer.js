/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Newsletter from "./Newsletter"
import SocialMedia from "./SocialMedia"
import Copyright from "./Copyright"

const Footer = () => {
  const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 100px 0;

    h4 {
      color: black;
    }

    & > * {
      padding: 5px;
      flex-basis: 100%;
      @media screen and (min-width: 600px) {
        flex-basis: 45%;
      }

      @media screen and (min-width: 768px) {
        flex-basis: 30%;
      }
    }
  `
  const StyledSubFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;

    @media screen and (max-width: 650px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `
  return (
    <div
      css={css`
        margin: 0 30px;
      `}
    >
      <StyledFooter>
        <AboutUs />
        <ContactUs />
        <Newsletter />
      </StyledFooter>
      <StyledSubFooter>
        <Copyright />
        <SocialMedia />
      </StyledSubFooter>
    </div>
  )
}

export default Footer
