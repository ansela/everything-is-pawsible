import React from "react"
import About from "../components/pages/about/About"
import Services from "../components/pages/services/Services"
import Events from "../components/pages/events/Events"
import Pricing from "../components/pages/pricing/Pricing"
import Blog from "../components/pages/blog/Blog"
import Contact from "../components/pages/contact/Contact"
import Scheduling from "../components/pages/scheduling/scheduling"

const homeBreadcrumb = { to: "/", title: "Home" }

export const pages = {
  about: {
    path: "/about",
    title: "About",
    breadcrumbs: [homeBreadcrumb, { to: "/about", title: "About" }],
    content: () => <About />
  },
  services: {
    path: "/services",
    title: "Services",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Services />
  },
  events: {
    path: "/events",
    title: "Events",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Events />
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Pricing />
  },
  blog: {
    path: "/blog",
    title: "Blog",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Blog />
  },
  contact: {
    path: "/contact",
    title: "Contact",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Contact />
  },
  schedule: {
    path: "/schedule",
    title: "Schedule",
    breadcrumbs: [homeBreadcrumb, { to: "/schedule", title: "Schedule" }],
    content: () => <Scheduling />
  }
}
