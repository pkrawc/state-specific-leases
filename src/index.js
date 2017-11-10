import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from "styled-components"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

injectGlobal`
@import url("//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css");
*,*:before,*:after {
  box-sizing: border-box;
}
:root {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 18px;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  background: #F2F2F2;
  margin: 0;
}
`

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
