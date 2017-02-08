// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import OrderList from "./OrderList";
import PurchaseOrderList from "./PurchaseOrderList";
import * as orderListApi from "../../api/orderList";
import * as purchaseApi from "../../api/purchase";
import _ from "lodash";

const subMenu = [
    {
        key: "all",
        title: "所有订单",
        showPurchaseOrder: false
    },
    {
        key: "notOut",
        title: "未出货订单",
        showPurchaseOrder: false
    },
    {
        key: "outed",
        title: "已发货订单",
        showPurchaseOrder: false
    },
    {
        key: "purchase",
        title: "进货单",
        showPurchaseOrder: true,
        showContent: false
    }
]
class OrderInquire extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            purchaseOrderList:[],
            showPurchaseOrder:false,
            showContent: 'all'
        }
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
    getOrderList() {
        const showContent = this.state.showContent;
        if(showContent === "all") {
            return this.state.orderList;
        }
        const mapping = {
            notOut: "未发货",
            outed: "已出货"
        }
        return _.filter(this.state.orderList, (item) => {
            return item.status === mapping[showContent];
        });
    }
    handleMenuChange(key, showPurchaseOrder) {
        this.setState({
            showContent: key,
            showPurchaseOrder
        })
    }
    render() {
        return (
            <div className="orderInquire">
                <div className="linkBlock">
                {
                    subMenu.map((item) => {
                        const className = item.key === this.state.showContent ? 'active' : '';
                        return (<a className={className} onClick={() => {this.handleMenuChange(item.key, item.showPurchaseOrder)}}>{item.title}</a>)
                    })
                }
                </div>
                <div className="listOperate">
                    <input type="checkbox" />全选
                    <a>删除</a>
                    {
                        this.state.showContent==="notOut"?(<a>发货</a>):null
                    }
                </div>
                {
                    this.state.showPurchaseOrder
                    ?(<PurchaseOrderList purchaseOrderList={this.state.purchaseOrderList} />)
                    :(<OrderList orderList={this.getOrderList()} />)
                }
            </div>
        );
    }
}
export default OrderInquire;