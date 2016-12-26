import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from "react-router";

import App from "./app";
import Order from './components/order/index';
import OrderInquire from './components/orderInquire/index';



import Purchase from './components/purchase/index';
import StoreManage from './components/storeManage/index';

class MyRouter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Router>
                <Route path='/' component={App}>
                    <IndexRoute component={OrderInquire}></IndexRoute>
                    <Route path='order' component={Order}></Route>
                    <Route path='orderInquire' component={OrderInquire}></Route>
                    <Route path='purchase' component={Purchase}></Route>
                    <Route path='storeManage' component={StoreManage}></Route>
                </Route>
            </Router>
        )
    }
}
ReactDOM.render(<MyRouter />, document.getElementById("app"));
