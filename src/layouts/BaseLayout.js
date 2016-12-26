import React from "react";
import ReactDOM from "react-dom";
class BaseLayout extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}
export default BaseLayout;