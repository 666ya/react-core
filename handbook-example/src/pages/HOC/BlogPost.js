import React from 'react'
import TextBlock from './TextBlock'
let DataSource =  {}
class CommentList extends React.component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
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
            blogPost: DataSource.getBlogPost(this.props.id)
        })
    }

    render() {
        return <TextBlock text={this.state.blogPost}/>
    }
}
export default CommentList