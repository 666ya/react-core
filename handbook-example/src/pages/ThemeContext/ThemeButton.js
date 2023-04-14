import React from 'react';
import ThemeContext from './context';
class ThemeButton extends React.Component {
    // static contextType = ThemeContext
    render() {
        let value = this.context
        console.log(value)
        return (
            <button >theme context</button>
        );
    }
}
ThemeButton.contextType = ThemeContext
export default ThemeButton;