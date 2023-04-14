// function FancyButton(props) {
//     return (
//         <button className="FancyButton"></button>
//     )
// }
import React from "react"
const FancyButton =React.forwardRef((props,ref)=> {
    <button ref={ref} className="FancyButton">{props.children}</button>
})
export default FancyButton