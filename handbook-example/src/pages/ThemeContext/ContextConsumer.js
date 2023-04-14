import ThemeContext from './context';
function ContextConsumer(props) {
    // console.log(this.context)
    return (
        <ThemeContext.Consumer>
            {value => {
                console.log(value)
                return (<button className={value}> context consumer</button>)
            }}
        </ThemeContext.Consumer>

    )
}
// ContextConsumer.contextType = ThemeContext
export default ContextConsumer