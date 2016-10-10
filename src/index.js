import React from "react";
import ReactDOM from "react-dom";
import Baselayout from "./components/layout/BaseLayout";
class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                test
                <Baselayout />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("content"));
