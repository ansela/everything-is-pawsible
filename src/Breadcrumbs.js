import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import THEMES from "./styles/themes"

const primary = THEMES.colors.primary

const Breadcrumbs = ({ items }) => {
  if (items == null || items.length === 0) return null
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
      color: ${primary};
    }
  `
  return (
    <div>
      {items.map((item, i) => (
        <>
          {!!i && " / "}
          <StyledLink to={item.to}>{item.title}</StyledLink>
        </>
      ))}
    </div>
  )
}

export default Breadcrumbs
