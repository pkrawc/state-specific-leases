import React from "react"
import { Text } from "@rentalutions/elements"
import styled from "styled-components"

const Wrapper = styled.section`
  padding: 72px 24px;
  margin: 0 auto;
  max-width: 1280px;
  .headline {
    margin-bottom: calc(5rem * 1.334);
  }
  .clauses-showcase {
    display: flex;
    flex-flow: column;
    .copy,
    .clauses-card {
      flex: 1;
    }
    @media (min-width: 720px) {
      flex-flow: row;
      .clauses-card {
        margin-left: calc(2rem * 1.334);
      }
    }
  }
  .copy {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .clauses-card {
    margin-left: 0;
    background-color: #f9f9f9;
    border-radius: 2px;
    box-shadow: 0 24px 36px -24px rgba(0, 0, 0, 0.24);
    max-height: calc(13.5rem * 1.334);
    overflow-y: auto;
    ul {
      list-style: none;
      padding-left: 48px;
      margin: calc(1rem * 1.334) 0;
      li {
        position: relative;
        margin-bottom: calc(1rem * 1.334);
        padding-right: calc(1rem * 1.334);
        &::before {
          content: "";
          position: absolute;
          left: -24px;
          top: 6px;
          border: 2px solid #50e3c2;
          border-radius: 50%;
          height: calc(0.5rem * 1.334);
          width: calc(0.5rem * 1.334);
        }
      }
    }
  }
`

const Clauses = ({ clauses = [] }) => (
  <Wrapper>
    <Text headline center>
      Because our leases are designed with you in mind, we’ve got you covered on
      all Illinois laws and Chicago ordinances.
    </Text>
    <div className="clauses-showcase">
      <div className="copy">
        <Text title>
          Lease clauses, rules, and disclosures will be unique to Chicago to
          ensure you’re protected.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          accusantium suscipit, autem nemo rem doloribus blanditiis beatae
          corporis inventore eveniet veritatis molestiae nisi maxime nostrum
          eaque, ad laborum aliquid odio?
        </Text>
      </div>
      <div className="clauses-card">
        <ul>{clauses.map(clause => <li>{clause}</li>)}</ul>
      </div>
    </div>
  </Wrapper>
)

export default Clauses
