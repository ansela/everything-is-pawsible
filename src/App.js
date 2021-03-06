/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./components/footer/Footer"
import Content from "./Content"
import ContactHeader from "./components/ContactHeader"

// import "bootstrap/dist/css/bootstrap.min.css"

export default () => {
  const StyledContent = styled(Content)`
    flex: 1 1 100%;
    p {
      font-size: 16px;
      line-height: 32px;
    }
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
        <ContactHeader />
        <NavBar />
        <StyledContent />
        <Footer />
      </div>
    </Router>
  )
}
