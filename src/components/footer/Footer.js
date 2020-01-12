import React from "react"
import styled from "@emotion/styled"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Newsletter from "./Newsletter"

const Footer = () => {
  const StyledFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
  `
  return (
    <StyledFooter>
      <AboutUs />
      <ContactUs />
      <Newsletter />
    </StyledFooter>
  )
}

export default Footer
