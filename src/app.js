import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Baselayout>
                <div className='navBlock'><NavItem></NavItem></div>
                <div className='contentBlock'>{this.props.children}</div>
            </Baselayout>
        )
    }
}
export default App;
