import React, { Component } from "react"
import styled from "styled-components"
import Hero from "./sections/Hero"
import Clauses from "./sections/Clauses"
import LocalAssist from "./sections/LocalAssist"
import Customizable from "./sections/Customizable"
import Security from "./sections/Security"
import CallToAction from "./sections/CallToAction"

const Wrapper = styled.main``

class App extends Component {
  clauses = [
    "Lessor provides no storage.",
    "$50 per key will be charged to provide additional or replacement keys to apartment.",
    "Lessee shall not sublet the Premises or any part thereof, nor assign this lease, without obtaining Lessor's prior written permission to sublet or assign.",
    "Lessee shall not dispose of rubbish, rags, or other items which might clog toilets or sink drains into toilets or sink drains."
  ]
  render() {
    return (
      <Wrapper>
        <Hero />
        <Clauses clauses={this.clauses} />
        <LocalAssist />
        <Customizable />
        <Security />
        <CallToAction />
      </Wrapper>
    )
  }
}

export default App
