/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useHistory } from "react-router-dom"

import THEMES from "../../../styles/themes"

const primary = THEMES.colors.primary

const Service = ({ title, overviewBlurb, linkTo, imgSrc }) => {
  const history = useHistory()
  const StyledLink = styled(Link)`
    font-size: 1.2em;
    font-weight: 800;
    color: black;
    text-decoration: none;

    &:hover {
      color: ${primary};
    }
  `
  const StyledImg = styled.img`
    display: inline-block;
    width: 100%;
  `
  return (
    <div
      css={css`
        transition: all 0.3s ease 0s;
        background-color: #f9f9ff;

        &:hover {
          cursor: pointer;
          box-shadow: -15px 15px 20px 0px rgba(157, 157, 157, 0.3);
        }
      `}
      onClick={() => history.push(linkTo)}
    >
      <StyledImg src={imgSrc} />
      <StyledLink to={linkTo}>{title}</StyledLink>
      <p
        css={css`
          color: #777777;
        `}
      >
        {overviewBlurb}
      </p>
    </div>
  )
}

export default Service
