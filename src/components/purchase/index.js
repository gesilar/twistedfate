// 订单查询
import React from "react";
import ReactDOM from "react-dom";
import GoodList from "../common/GoodList";
import AddGood from "../common/AddGood";
import * as purchaseApi from "../../api/purchase";
class Purchase extends React.Component{
    constructor(){
        super();
        this.state = {
            orderId:"",
            date:"",
            goodsList:[]
        }
    }
    _onAddGood(goodInfo) {
        let goodsList = this.state.goodsList;
        this.setState({
            goodsList: [...goodsList, goodInfo]
        })
    }
    _onAddOrder() {
        purchaseApi.addOrder({
            order: this.state,
            success(response) {
                console.log(response);
            },
            error(response) {
                console.log(response);
            }
        });
    }
    render(){
        return (
               <div className='order'>
                <div className='addOrderBlock'>
                    <div className='time'>
                        订单时间：<input type='date'/>
                    </div>
                    <div className='addBtn'>
                        <button onClick = {() => {this._onAddOrder();}}>add order</button>
                    </div>
                </div>
                <AddGood onAddGood={(goodInfo) => {this._onAddGood(goodInfo)}}/>
                <GoodList goodsList={this.state.goodsList} />
            </div>
        )
    }
}
export default Purchase;
