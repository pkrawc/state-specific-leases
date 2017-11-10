import React from "react"
import styled from "styled-components"
import { Text } from "@rentalutions/elements"

const Wrapper = styled.section`
  padding: 72px 24px 0;
  overflow: hidden;
  .headline {
    margin-bottom: calc(3rem * 1.334);
  }
  .wysiwyg {
    padding: 24px;
    background-color: #f9f9f9;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    margin: 0 auto;
    max-width: 960px;
    .title-bar {
      display: flex;
      justify-content: center;
      font-size: 1.5em;
    }
    .mdi {
      color: #9ea8b2;
      padding-right: 1em;
      cursor: pointer;
      &:hover {
        color: #404040;
      }
    }
    .mdi-menu {
      margin-right: auto;
    }
    .mdi-close {
      margin-left: auto;
      padding-right: 0;
    }
    .not-on-mobile {
      display: none;
    }
    @media (min-width: 720px) {
      .not-on-mobile {
        display: inline;
      }
    }
  }
`

const Customizable = props => (
  <Wrapper>
    <Text headline center>
      Customize and add to the lease as you go.
    </Text>
    <div className="wysiwyg">
      <div className="title-bar">
        <span className="mdi mdi-menu" />
        <span className="text-format">
          <span className="mdi mdi-format-bold" />
          <span className="mdi mdi-format-italic" />
          <span className="mdi mdi-format-size" />
          <span className="not-on-mobile">
            <span className="mdi mdi-format-underline" />
            <span className="mdi mdi-format-color-text" />
            <span className="mdi mdi-format-align-left" />
            <span className="mdi mdi-format-align-center" />
            <span className="mdi mdi-format-align-right" />
            <span className="mdi mdi-format-list-bulleted" />
            <span className="mdi mdi-format-list-numbers" />
          </span>
        </span>
        <span className="mdi mdi-close" />
      </div>
      <Text>
        Lessor may bar individuals from the building and/or Lessee's Premises.
        All guests and invitees of Lessee shall observe all rules and
        regulations of the building.
      </Text>
      <Text>
        If these provisions are violated by guests, they may be barred and/or
        arrested for criminal trespass, after they have received a barred notice
        and then have been placed on a barred list by Lessor. Violation of this
        rule are grounds for termination of your tenancy.
      </Text>
    </div>
  </Wrapper>
)

export default Customizable
