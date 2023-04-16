import React from 'react'
let DataSource = {}
function whithSubscription(WrappedCompoennt,selectData){
    return class extends React.Component{
        constructor(props) {
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data: selectData(DataSource,props)
            }
        }
        componentDidMount(){
            DataSource.addChangeListener(this.handledChange)
        }
        componentWillUnmount(){
            DataSource.removeChangeListener(this.handledChange)
        }
        handleChange(){
            this.setState({
                data: selectData(DataSource,this.props)
            })
        }
        render(){
            return <WrappedCompoennt data={this.state.data} {...this.props} />
        }
    }
}
export default whithSubscription