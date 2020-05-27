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
  const StyledImgWrapper = styled.div`
    padding-top: 66.66%;
    position: relative;
  `
  const StyledImg = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    object-fit: cover;
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
      <StyledImgWrapper>
        <StyledImg src={imgSrc} />
      </StyledImgWrapper>

      <StyledLink to={linkTo}>{title}</StyledLink>
      <div
        css={css`
          color: #777777;
          font-size: 14px;
          margin: 1em 0;
        `}
      >
        {overviewBlurb}
      </div>
    </div>
  )
}

export default Service
