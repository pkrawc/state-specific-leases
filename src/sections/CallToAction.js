import React from "react"
import styled from "styled-components"
import { Text, Button } from "@rentalutions/elements"
import ipadLease from "../lease_in_ipad.png"

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: calc(5rem * 1.334) calc(1rem * 1.334);
  margin: 0 auto;
  max-width: 1280px;
  img {
    display: block;
    margin-bottom: 24px;
    filter: drop-shadow(3px 6px 12px rgba(0, 0, 0, 0.12));
    max-width: 960px;
    width: 100%;
  }
`

const CallToAction = props => (
  <Wrapper>
    <Text headline center>
      Do it yourself doesn't mean do it alone
    </Text>
    <img src={ipadLease} alt="ipad" />
    <Button success>let's create your lease</Button>
  </Wrapper>
)

export default CallToAction
