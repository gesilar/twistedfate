// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import GoodList from "../common/GoodList";
class PurchaseOrderList extends React.Component {
    constructor() {
        super();
    }
    render() {
        if (this.props.purchaseOrderList.length === 0) {
            return (
                <div>
                    暂无订单
                </div>
            )
        }
        return (
            <div>
                {
                    this.props.purchaseOrderList.map((order) => {
                        return (<div>
                            <div className='addOrderBlock'>
                                <div className='buyerInfo'>
                                    <div className='orderNo'>订单号:{order.orderId}</div>
                                    <div className='time'>
                                        订单时间：{order.date}
                                    </div>
                                </div>
                            </div>
                            <GoodList goodsList={order.goodsList} />
                        </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default PurchaseOrderList;