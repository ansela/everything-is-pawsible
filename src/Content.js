/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Switch, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import HeroImage from "./HeroImage"
import Breadcrumbs from "./Breadcrumbs"

import { pages } from "./constants/pageContent"

const ContentItem = ({ title, breadcrumbs, children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <HeroImage>
      <h1>{title}</h1>
      <Breadcrumbs items={breadcrumbs} />
    </HeroImage>
    <div
      css={css`
        padding: 10px;
        flex: 1 1 100%;
        height: 100%;
      `}
    >
      {children}
    </div>
  </div>
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
        {Object.values(pages).map(({ path, title, breadcrumbs, content }) => (
          <Route path={path} key={path}>
            <ContentItem title={title} breadcrumbs={breadcrumbs}>
              {content()}
            </ContentItem>
          </Route>
        ))}

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
