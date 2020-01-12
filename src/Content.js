/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Switch, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import HeroImage from "./HeroImage"

const ContentItem = ({ title, children }) => (
  <>
    <HeroImage>
      <h1>{title}</h1>
    </HeroImage>
    <div
      css={css`
        padding: 10px;
      `}
    >
      {children}
    </div>
  </>
)

const Content = props => {
  return (
    <div
      css={css`
        background-color: #f9f9f9ff;
      `}
      {...props}
    >
      <Switch>
        <Route path="/about">
          <ContentItem title="About">About Us</ContentItem>
        </Route>
        <Route path="/contact">
          <ContentItem title="Contact Us">Contact Info</ContentItem>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
