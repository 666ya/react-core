import React from 'react';
import ToolBar from './ToolBar';
import ThemeContext from './context';
import './index.css'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: {
                something: 'something'
            },
            name: ''
        }
        setTimeout(() => {
            this.setState({ name: 'aaa' })
        }, 2000);
    }
    render() {
        return (
            <div>
                <div>
                    <ThemeContext.Provider value={'dark'}>
                        <p>{this.state.name || 'context'}</p>
                        <ToolBar />
                    </ThemeContext.Provider>
                </div>

            </div >

            // <ToolBar />
        );
    }
}

export default App;