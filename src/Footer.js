import React from "react"
import styled from "@emotion/styled"
import AboutUs from "./components/footer/AboutUs"
import ContactUs from "./components/footer/ContactUs"
import Newsletter from "./components/footer/Newsletter"

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
