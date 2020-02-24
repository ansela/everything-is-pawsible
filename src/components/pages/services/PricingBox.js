import React from "react"
import styled from "@emotion/styled"
import { Link, useHistory } from "react-router-dom"

import theme from "../../../styles/themes"
const primary = theme.colors.primary

const StyledPricingBox = styled.div`
  box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.15);
  width: 400px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  h1 {
    color: ${primary};
    text-align: center;
    font-size: 2em;
  }
`
const PricingContent = styled.div`
  flex: 1 1 100%;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 5px 0;
    }
  }
`
const StyledLink = styled(Link)`
  align-self: flex-end;
  color: ${primary};

  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`
const Divider = styled.div`
  height: 1px;
  border-top: 1px solid ${primary};
  margin: 10px -20px;
  opacity: 40%;
`
const Footer = styled.div`
  margin-top: 10px;
`
const StyledButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.2em;
  padding: 15px 30px;

  &:hover {
    background: transparent;
    border: 1px solid ${primary};
    color: ${primary};
    cursor: pointer;
  }
`

const PricingBox = ({ prices, className }) => {
  const history = useHistory()
  return (
    <StyledPricingBox className={className}>
      <h1>Pricing</h1>
      <PricingContent>
        <ul>
          {prices.map(price => (
            <li>{price}</li>
          ))}
        </ul>
        <StyledLink to="/pricing"> All Pricing and Packages &raquo;</StyledLink>
      </PricingContent>
      <Divider />
      <Footer>
        <StyledButton onClick={() => history.push("/schedule")}>
          Request Appointment
        </StyledButton>
      </Footer>
    </StyledPricingBox>
  )
}

export default PricingBox
