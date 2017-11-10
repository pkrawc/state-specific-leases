import React from "react"
import styled from "styled-components"
import { Text } from "@rentalutions/elements"

const Wrapper = styled.section`
  padding: 72px 24px;
  background-color: #34495e;
  .content {
    display: flex;
    margin: calc(3rem * 1.334) auto;
    max-width: 1280px;
    .illustration,
    .copy {
      flex: 1;
    }
    .title {
      color: #f9f9f9;
    }
  }
`

const Security = props => (
  <Wrapper>
    <div className="content">
      <div className="illustration" />
      <div className="copy">
        <Text title>
          Even better, once you're done editing, everyone can sign the lease
          online.
        </Text>
      </div>
    </div>
  </Wrapper>
)

export default Security
