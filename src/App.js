/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Content from "./Content"

export default () => {
  const StyledContent = styled(Content)`
    flex: 1 1 100%;
  `
  return (
    <Router>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
        `}
      >
        <NavBar />
        <StyledContent />
        <Footer />
      </div>
    </Router>
  )
}
