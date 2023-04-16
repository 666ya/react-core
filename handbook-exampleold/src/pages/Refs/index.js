import React from "react"
import FancyButton from './FancyButton'
const ref = React.createRef()

const App = ()=> {
    console.log(ref)
    return (
        <FancyButton ref={ref}>click me</FancyButton>
    )
}
export default App