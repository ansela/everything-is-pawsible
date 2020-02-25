import React, { useState } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

import THEMES from "../../styles/themes"
const primary = THEMES.colors.primary

const InputGroup = styled.div`
  background: #f9f9ff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  display: flex;
`
const Input = styled.input`
  border-radius: 20px;
  border: 1px solid #f9f9ff;
  background-color: #f9f9ff;
  padding: 9px 9px 9px 20px;
  font-size: 13px;
  flex: 1 1 100%;
`
const Button = styled(FontAwesomeIcon)`
  color: ${primary};
  border: none;
  border-radius: 57px;
  height: 36px;
  line-height: 44px;
  width: 44px;
  font-size: 1.8em;
  opacity: 80%;

  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
`

const Newsletter = () => {
  const [email, setEmail] = useState("")

  return (
    <div>
      <h4>Newsletter</h4>
      <p>You can trust us. We only send offers, never spam.</p>
      <InputGroup>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Button icon={faArrowCircleRight}>Go</Button>
      </InputGroup>
    </div>
  )
}

export default Newsletter
