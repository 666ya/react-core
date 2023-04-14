import React from "react"
const LogProps = (WrappedCompoennt)=> {
    class LogProps extends React.Component{
        componentDidUpdate(prevProps) {
            console.log('old Props', prevProps)
            console.log('new props', this.props)
        }
        render(){
            return <WrappedCompoennt {...this.props}/>
        }
    }
    return LogProps
}
export default LogProps