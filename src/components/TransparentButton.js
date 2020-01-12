import React from "react"
import styled from "@emotion/styled"

export default ({ children, color, ...props }) => {
  const buttonColor = color || "white"
  const StyledButton = styled.button`
    color: ${buttonColor};
    background: transparent;
    font-size: 1.5em;
    border: 1px solid ${buttonColor};

    &:hover {
      background: ${buttonColor};
      color: black;
    }
  `
  return <StyledButton {...props}>{children}</StyledButton>
}
