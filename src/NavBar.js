/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useHistory, useLocation } from "react-router-dom"

import logo from "./images/logo.png"

export default () => {
  const history = useHistory()
  const location = useLocation()

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 1em;
    &:hover {
      border: 1px solid white;
    }
  `
  const navHeight = 55
  return (
    <nav
      css={css`
        background: transparent;
        /* position: absolute; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        padding: 10px;
        height: ${navHeight}px;
        margin-bottom: -${navHeight + 20}px;
      `}
    >
      <div>
        <img
          src={logo}
          alt="Everything Is Pawsible Logo"
          css={css`
            opacity: 50%;

            &:hover {
              opacity: 100%;
              cursor: pointer;
            }
          `}
          onClick={() => {
            if (location !== "/") history.push("/")
          }}
          title="Go Home"
        />
      </div>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </div>
    </nav>
  )
}
