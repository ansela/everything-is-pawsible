import React from "react"
import styled from "@emotion/styled"
import PricingBox from "../components/pages/services/PricingBox"

import img1 from "../images/about3.jpg"
import img2 from "../images/home1.jpg"
import img3 from "../images/home2.jpg"
import img4 from "../images/home3.jpg"
import img5 from "../images/home4.jpg"
import img6 from "../images/dog1wide.jpg"

import theme from "../styles/themes"
const primary = theme.colors.primary

const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula nec odio posuere dictum eu eu justo. Donec quis metus urna. Fusce pharetra eu tortor id eleifend. Vestibulum fringilla varius congue. Phasellus luctus quis metus in cursus. Nulla hendrerit enim condimentum ante molestie euismod. Duis luctus, tortor quis mollis accumsan, tellus urna bibendum neque, et iaculis arcu nisi et purus. "
const loremLong =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula nec odio posuere dictum eu eu justo. Donec quis metus urna. Fusce pharetra eu tortor id eleifend. Vestibulum fringilla varius congue. Phasellus luctus quis metus in cursus. Nulla hendrerit enim condimentum ante molestie euismod. Duis luctus, tortor quis mollis accumsan, tellus urna bibendum neque, et iaculis arcu nisi et purus. Proin vulputate efficitur tortor, non condimentum est accumsan in. Nullam sem purus, aliquam vel mi a, dapibus sollicitudin libero. Nam bibendum quam mattis nulla lobortis viverra. Fusce iaculis dolor et risus efficitur gravida. Proin libero dolor, volutpat nec enim ac, pellentesque vehicula quam. Praesent vel feugiat risus. Nulla a quam consectetur, eleifend metus vitae, sagittis nisi. Vivamus et posuere justo. Cras dapibus tincidunt massa, eu dignissim risus ullamcorper id."
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante nec lacus sollicitudin, quis venenatis quam mollis."

export const Content = ({ title, prices, imgSrc }) => {
  const StyledContent = styled.div`
    p,
    ul {
      line-height: 32px;
      font-size: 16px;
    }
  `
  const Header = styled.h1`
    font-size: 3em;
    margin: 20px 0;
    color: black;
  `
  const SectionHeader = styled.h2`
    text-transform: uppercase;
    margin: 16px 0;
  `
  const StyledPricingBox = styled(PricingBox)`
    position: relative;
    float: right;
    margin: -200px -10% 15px 15px;
  `

  const List = styled.ul`
    list-style: none;

    li:before {
      content: "\\00BB";
      color: ${primary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      font-size: 1.3em;
    }
  `
  const Image = styled.img`
    position: relative;
    float: left;
    max-width: 50%;
    margin: 0 15px 15px 0;
  `

  return (
    <StyledContent>
      <StyledPricingBox prices={prices} />
      <Header>{title}</Header>
      <p>{loremShort}</p>

      <section>
        <SectionHeader>The Benefits of this service</SectionHeader>
        <p>{content}</p>
        <List>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </List>
      </section>
      <section>
        <SectionHeader>Meet the team</SectionHeader>
        <Image src={imgSrc} />
        <p>{loremLong}</p>
      </section>
    </StyledContent>
  )
}

export const services = {
  kennel: {
    title: "Kennel",
    overviewBlurb: content,
    imgSrc: img1,
    prices: [
      "One Day: $25",
      "5 Day Pass: $115 ($23/day)",
      "10 Day Pass: $220 ($22/day)",
      "30 Day Pass: $600 ($20/day)"
    ]
  },
  walking: {
    title: "Dog Walking",
    overviewBlurb: content,
    imgSrc: img2,
    prices: [
      "One Walk: $10",
      "5 Walk Pass: $45 ($9/walk)",
      "10 Walk Pass: $80 ($8/walk)",
      "30 Walk Pass: $180 ($6/walk)"
    ]
  },
  training: {
    title: "Group Training",
    overviewBlurb: content,
    imgSrc: img3,
    prices: [
      "One Day: $25",
      "5 Day Pass: $115 ($23/day)",
      "10 Day Pass: $220 ($22/day)",
      "30 Day Pass: $600 ($20/day)"
    ]
  },
  "in-home": {
    title: "In Home Services",
    overviewBlurb: content,
    imgSrc: img4,
    prices: [
      "In home services vary depending on the service needed. Please contact us for more information."
    ]
  },
  obedience: {
    title: "Obedience Class",
    overviewBlurb: content,
    imgSrc: img5,
    prices: [
      "One Day: $25",
      "5 Day Pass: $115 ($23/day)",
      "10 Day Pass: $220 ($22/day)",
      "30 Day Pass: $600 ($20/day)"
    ]
  },
  private: {
    title: "Private Training",
    overviewBlurb: content,
    imgSrc: img6,
    prices: [
      "One Day: $40",
      "5 Day Pass: $190 ($38/day)",
      "10 Day Pass: $360 ($36/day)",
      "30 Day Pass: $900 ($30/day)"
    ]
  }
}
