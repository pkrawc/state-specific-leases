import React from "react"
import styled from "styled-components"
import { Text } from "@rentalutions/elements"

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: calc(5rem * 1.334) calc(1rem * 1.334);
  margin: 0 auto;
  max-width: 1280px;
  .local-assist-step,
  .copy {
    flex: 1;
  }
  .local-assist-step {
    padding: calc(1rem * 1.334);
    background-color: #f9f9f9;
    border-radius: 2px;
    box-shadow: 0 24px 36px -24px rgba(0, 0, 0, 0.24);
    .callout {
      background-color: #3cbc8d;
      padding: 12px;
      color: #f9f9f9;
    }
    label {
      display: block;
      position: relative;
      padding-top: 1rem;
      pointer-events: none;
    }
    input[type="text"] {
      padding: calc(1rem * 1.334) calc(0.5rem * 1.334);
      margin-bottom: calc(1rem * 1.334);
      font-size: 1rem;
      background: transparent;
      border: none;
      border-bottom: 2px solid #ced4d9;
      width: 100%;
      outline: none;
    }
    input[type="text"] + span {
      color: #ced4d9;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.75rem;
    }
  }
  @media (min-width: 720px) {
    flex-flow: row;
    .local-assist-step {
      margin-right: 48px;
    }
  }
`

const LocalAssist = props => (
  <Wrapper>
    <div className="local-assist-step">
      <div className="callout">
        <strong>Did you know:</strong> In Chicago you can only charge $50 in
        late fees for the first $800 in rent. After that it becomes a 5% fee.
      </div>
      <div className="step-content">
        <Text title>Are you collecting a security Deposit?</Text>
        <label>
          <input type="text" value="$4,000.00" />
          <span>Security deposit amount</span>
        </label>
        <label>
          <input type="text" value="2024 N California Ave" />
          <span>Security deposit bank address</span>
        </label>
      </div>
    </div>
    <div className="copy">
      <Text title>It’s like having a lawyer over your shoulder.</Text>
      <Text>
        We provide step-by-step guidance on your leasing journey. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Enim quibusdam natus animi
        distinctio exercitationem dolores, pariatur atque odio eum accusantium
        iure nostrum totam, in, aspernatur molestias ut culpa vel similique.
      </Text>
    </div>
  </Wrapper>
)

export default LocalAssist
