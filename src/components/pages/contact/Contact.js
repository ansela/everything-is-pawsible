/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import THEMES from "../../../styles/themes"

const Contact = () => {
  const primary = THEMES.colors.primary

  const ContactCard = styled.div`
    display: flex;
    flex: 1 1 100%;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      justify-content: space-around;
    }

    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
  `
  const Column = styled.div`
    flex-basis: 30%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  `
  const ContactCardColumn = styled(Column)`
    flex-basis: 45%;

    @media screen and (max-width: 650px) {
      flex-basis: 100%;
    }
  `
  const Row = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-start;
  `
  const Input = styled.input`
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    font-size: 1em;

    @media screen and (max-width: 650px) {
      margin: 10px 0;
    }
  `
  const Icon = styled(FontAwesomeIcon)`
    color: ${primary};
    font-size: 2em;
    margin-right: 15px;
  `
  const Header = styled.div`
    font-weight: bolder;
    font-size: 1.2em;
  `
  const Info = styled.div`
    font-size: 0.9em;
    color: silver;
  `
  const StyledButton = styled.button`
    background-color: ${primary};
    color: white;
    font-size: 1.2em;
    padding: 15px 30px;
    margin-top: 20px;
    transition: all 0.3s ease 0s;
    text-transform: uppercase;
    font-size: 1em;
    width: 170px;
    align-self: flex-end;

    &:hover {
      background: transparent;
      border: 1px solid ${primary};
      color: ${primary};
      cursor: pointer;
    }
  `
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 50px auto 100px;
        align-items: center;
        max-width: 1140px;
      `}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0528212084196!2d-81.58340068402597!3d28.417662982503167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7e536aa54b81%3A0x66b8bcd58da841a!2sMagic%20Kingdom%20Park!5e0!3m2!1sen!2sus!4v1580951971798!5m2!1sen!2sus"
        width="100%"
        height="445"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        title="Google Map"
      ></iframe>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-top: 50px;
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            @media screen and (max-width: 1024px) {
              flex-direction: column;
            }
          `}
        >
          <Column
            css={css`
              @media screen and (max-width: 1024px) {
                align-items: center;
              }
            `}
          >
            <Row>
              <Icon icon={faHome} />{" "}
              <div>
                <Header>Melissa Ansell</Header>
                <Info>Address here</Info>
              </div>
            </Row>
            <Row>
              <Icon icon={faPhone} />{" "}
              <div>
                <Header>(555) 555-5555</Header>
                <Info>Mon to Fri 9am to 6pm</Info>
              </div>
            </Row>
            <Row>
              <Icon icon={faEnvelope} />{" "}
              <div>
                <Header>info@example.com</Header>
                <Info>Drop a note to us anytime!</Info>
              </div>
            </Row>
          </Column>
          <ContactCard>
            <ContactCardColumn>
              <Input type="text" placeholder="Enter your name" />

              <Input type="email" placeholder="Enter email address" />

              <Input type="text" placeholder="Enter your subject" />
            </ContactCardColumn>
            <ContactCardColumn>
              <textarea
                placeholder="message"
                css={css`
                  height: 100%;
                  font-size: 1em;
                  padding: 10px;
                  border: 1px solid #ced4da;
                `}
              />
            </ContactCardColumn>
          </ContactCard>
        </div>
        <StyledButton type="submit">Send Message</StyledButton>
      </div>
    </div>
  )
}

export default Contact
