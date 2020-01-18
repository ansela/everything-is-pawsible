import React from "react"
import styled from "@emotion/styled"

import THEMES from "../../styles/themes"

const primary = THEMES.colors.primary

const ContactUs = () => {
  const PhoneNumber = styled.h2`
    color: ${primary};
  `

  return (
    <div>
      <h4>Contact Us</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare
        ante nec lacus sollicitudin, quis venenatis quam mollis. Aliquam
        dignissim porta sollicitudin.
      </p>
      <PhoneNumber>555-555-5555</PhoneNumber>
    </div>
  )
}

export default ContactUs
