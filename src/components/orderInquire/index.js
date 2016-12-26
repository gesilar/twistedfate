// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import OrderList from "./OrderList";
import PurchaseOrderList from "./PurchaseOrderList";
import * as orderListApi from "../../api/orderList";
import * as purchaseApi from "../../api/purchase";
class OrderInquire extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            purchaseOrderList:[],
            showPurchaseOrder:false
        }
    }
    _tabChange() {
        
    }
    componentWillMount() {
        const that = this;
        orderListApi.getOrder({
            // order: this.state.order,
            success(response) {
                console.log(response);
                that.setState({orderList:response});
            },
            error(response) {
                console.log(response);
            }
        });
        purchaseApi.getOrder({
            // order: this.state.order,
            success(response) {
                console.log(response);
                that.setState({purchaseOrderList:response});
            },
            error(response) {
                console.log(response);
            }
        });

    }
    render() {
        return (
            <div>
                <div>
                    <a onClick={() => {this.setState({showPurchaseOrder:false})}}>所有订单</a>
                    <a onClick={() => {this.setState({showPurchaseOrder:false})}}>未出货订单</a>
                    <a onClick={() => {this.setState({showPurchaseOrder:false})}}>已出货订单</a>
                    <a onClick={() => {this.setState({showPurchaseOrder:true})}}>进货单</a>
                </div>
                {
                    this.state.showPurchaseOrder
                    ?(<PurchaseOrderList purchaseOrderList={this.state.purchaseOrderList} />)
                    :(<OrderList orderList={this.state.orderList} />)
                }
            </div>
        );
    }
}
export default OrderInquire;