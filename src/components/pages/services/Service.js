/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useHistory } from "react-router-dom"
import Modal from "react-bootstrap/Modal"

import THEMES from "../../../styles/themes"

const primary = THEMES.colors.primary

const Service = ({ title, content, linkTo, imgSrc }) => {
  const [show, setShow] = useState(false)
  const history = useHistory()

  const closeModal = () => {
    console.log("close modal")
    setShow(false)
  }

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
      onClick={() => setShow(true)}
    >
      <StyledImg src={imgSrc} />
      <StyledLink to={linkTo}>{title}</StyledLink>
      <p
        css={css`
          color: #777777;
        `}
      >
        {content}
      </p>
      <Modal show={show} onHide={closeModal}>
        This is a modal
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}

export default Service
