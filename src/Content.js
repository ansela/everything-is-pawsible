/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Switch, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import HeroImage from "./HeroImage"
import About from "./components/pages/about/About"
import Services from "./components/pages/services/Services"
import Events from "./components/pages/events/Events"
import Pricing from "./components/pages/pricing/Pricing"
import Blog from "./components/pages/blog/Blog"
import Contact from "./components/pages/contact/Contact"
import Breadcrumbs from "./Breadcrumbs"

const ContentItem = ({ title, breadcrumbs, children }) => (
  <>
    <HeroImage>
      <h1>{title}</h1>
      <Breadcrumbs items={breadcrumbs} />
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
          <ContentItem
            title="About"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/about", title: "About" }
            ]}
          >
            <About />
          </ContentItem>
        </Route>
        <Route path="/services">
          <ContentItem
            title="Services"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/services", title: "Services" }
            ]}
          >
            <Services />
          </ContentItem>
        </Route>
        <Route path="/events">
          <ContentItem
            title="Events"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/events", title: "Events" }
            ]}
          >
            <Events />
          </ContentItem>
        </Route>
        <Route path="/pricing">
          <ContentItem
            title="Pricing"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/pricing", title: "Pricing" }
            ]}
          >
            <Pricing />
          </ContentItem>
        </Route>
        <Route path="/blog">
          <ContentItem
            title="Blog"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/blog", title: "Blog" }
            ]}
          >
            <Blog />
          </ContentItem>
        </Route>
        <Route path="/contact">
          <ContentItem
            title="Contact Us"
            breadcrumbs={[
              { to: "/", title: "Home" },
              { to: "/contact", title: "Contact Us" }
            ]}
          >
            <Contact />
          </ContentItem>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
