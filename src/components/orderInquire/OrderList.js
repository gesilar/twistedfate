// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import GoodList from "../common/GoodList";
class OrderList extends React.Component {
    constructor() {
        super();
    }
    render() {
        if(this.props.orderList.length === 0){
            return (
                <div>
                    暂无订单
                </div>
            )
        }
        return (
            <div>
                {
                    this.props.orderList.map((order) => {
                        return (<div>
                            <div className='addOrderBlock'>
                                <div className='buyerInfo'>
                                    <div className='orderNo'>订单号:{order.orderId}</div>
                                    <div className='buyerName'>
                                        姓名：{order.name}
                                    </div>
                                    <div className='phone'>
                                        手机：{order.phone}
                                    </div>
                                    <div className='address'>
                                        地址：{order.address}
                                    </div>
                                    <div className='remark'>
                                        备注：{order.remark}
                                    </div>
                                </div>
                                <div className='time'>
                                    订单时间：{order.date}
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

export default OrderList;