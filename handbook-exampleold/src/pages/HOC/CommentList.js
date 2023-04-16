import React from 'react'
import Comment from './Comment'
let DataSource =  {}
class CommentList extends React.component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            commemts: DataSource.getComments()
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
            commemts: DataSource.getComments()
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.commemts.map(comment => 
                       ( <Comment comment = {comment} key={comment.id}/>))
                }
            </div>
        )
    }
}
export default CommentList