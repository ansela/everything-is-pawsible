/** @jsx jsx */
import React, { useState } from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useHistory, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import logo from "./images/logo.png"

const Icon = ({ icon, onClick }) => {
  const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.5em;
  `
  return (
    <div onClick={onClick}>
      <StyledIcon icon={icon} />
    </div>
  )
}

export default () => {
  const history = useHistory()
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  const SmallMenu = styled.div`
    display: none;
    @media screen and (max-width: 650px) {
      display: block;
    }
  `
  const LargeMenu = styled.div`
    display: block;
    @media screen and (max-width: 650px) {
      display: none;
    }
  `

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 1em;
    background-color: ${props =>
      props.to === location.pathname ? "rgba(255,255,255,.25)" : "transparent"};
    &:hover {
      border: 1px solid white;
    }
  `
  const navHeight = 55

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/schedule", label: "Schedule" },
    { to: "/events", label: "Events" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ]
  const menu = (
    <>
      {menuItems.map(({ to, label }) => (
        <StyledLink key={to} to={to} onClick={() => setMenuOpen(false)}>
          {label}
        </StyledLink>
      ))}
    </>
  )

  return (
    <>
      <nav
        css={css`
          background: transparent;
          position: relative;
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
        <LargeMenu>{menu}</LargeMenu>
        <SmallMenu
          css={css`
            align-self: flex-start;
          `}
        >
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            icon={menuOpen ? faTimes : faBars}
          />
        </SmallMenu>
      </nav>
      {menuOpen && (
        <SmallMenu>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              background-color: rgba(0, 0, 0, 0.75);
              position: absolute;
              width: 100%;
              z-index: 101;
              top: 100px;
            `}
          >
            {menu}
          </div>
        </SmallMenu>
      )}
    </>
  )
}
