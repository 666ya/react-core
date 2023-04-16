import React from 'react'
import dog from  './dog.jpg'

class Dog extends React.Component {
    render(){
        const mouse = this.props.mouse
        return (
            <img  src={dog} alt='dog' style={{position: 'absolute', width:'36px',height:'36px', left: mouse.x,top: mouse.y}} />
        )

    }
}

class Mouse extends React.PureComponent {
    constructor(props) {
        console.log(props)
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {x:0,y:0}
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y:event.clientY
        })
    }
    render(){
        return (
            <div style={{
                height: '100vh'
            }}  onMouseMove={this.handleMouseMove
            }>

                {/* <p>当前鼠标的位置（{this.state.x},{this.state.y}）</p> */}
                {/* <Dog mouse={this.state} /> */}
                {this.props.children(this.state)}
               { this.props.render(this.state)}
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    render(){
        return (
            <>
            <h1>移动鼠标</h1>
            <Mouse render={mouse => <Dog mouse={mouse}/>}>{mouse => (<p>当前鼠标的位置（{mouse.x},{mouse.y}）</p> )}</Mouse>
            </>
        )
    }
}

export default MouseTracker