// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import AddGood from '../common/AddGood';
import BuyerInfo from './BuyerInfo';
import GoodList from '../common/GoodList';
import _ from 'lodash';
import * as orderListApi from '../../api/orderList';

const initState = {
    order: {
        orderId: '',
        date: '',
        time: '',
        operator: 'jimmy',
        name: '',
        phone: '',
        address: '',
        remark: '',
        goodsList: []
    }
}

class Order extends React.Component {
    constructor() {
        super();
        this.state = initState;
    }
    _validate() {
        const order = this.state.order;
        if(order.goodsList.length === 0) {
            alert("货品不能为空！");
            return false;
        }
        if(!order.name || !order.phone || !order.address){
            alert("带*号的信息不能为空！");
            return false;
        }

        return true;
    }
    _onAddOrder(orderInfo) {
        const that = this;
        this.setState({
            order: Object.assign({}, this.state.order, orderInfo)
        });
        if(!this._validate()) {
            return ;
        }
        orderListApi.addOrder({
            order: this.state.order,
            success(response) {
                console.log(response);
                that.setState(initState);
            },
            error(response) {
                console.log(response);
            }
        });
    }
    _onAddGood(goodInfo) {
        if (!goodInfo.name || !goodInfo.amount || !goodInfo.price) {
            return alert("带*号的信息不能为空！");
        }
        const order = this.state.order;
        let goodsList = order.goodsList;
        goodsList = [...goodsList, goodInfo];
        this.setState({
            order: Object.assign({}, order, {
                goodsList
            })
        })
    }
    _onModifyGood() {

    }
    _onDelGood(goodInfo) {
        let goodsList = this.state.order.goodsList;
    }
    render() {
        return (
            <div className='order'>
                <BuyerInfo onAddOrder={(orderInfo) => { this._onAddOrder(orderInfo) } } />
                <AddGood onAddGood={(goodInfo) => { this._onAddGood(goodInfo) } } />
                <GoodList goodsList={this.state.order.goodsList} onModifyGood={() => { this._onModifyGood() } } onDelGood={() => this._onDelGood()} />
            </div>
        );
    }
}
export default Order;