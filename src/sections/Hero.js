import React from "react"
import styled from "styled-components"
import { Button, Text } from "@rentalutions/elements"

const Wrapper = styled.section`
  display: flex;
  position: relative;
  height: calc(100vh - 24px);
  max-height: 1080px;
  .image,
  .content {
    flex: 1;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.72);
  }
  .hero-btn {
    align-self: flex-start;
  }
  @media (min-width: 960px) {
    .image {
      position: static;
    }
    .content {
      background-color: #f9f9f9;
    }
  }
`

const Hero = props => (
  <Wrapper backgroundImage="https://picsum.photos/800/800">
    <div className="image" />
    <div className="content">
      <Text hero>A lease built for Chicago</Text>
      <Text>
        See why thousands of your neighbors have leases created on Properly.
        Draft online and have your tenants sign digitally. All for free. No more
        faxing, emailing, or wasted time.
      </Text>
      <Button primary className="hero-btn">
        customize your lease template
      </Button>
    </div>
  </Wrapper>
)

export default Hero
