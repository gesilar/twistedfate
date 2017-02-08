// 订单管理
import React from "react";
import ReactDOM from "react-dom";
import {dateFormate} from "../../utils/dateUtils";
class BuyerInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            saler: "锦光",
            name:"",
            phone:"",
            address:"",
            remark:"",
            date:dateFormate(new Date())
        }
    }
    _revertData() {
        this.setState({
            name:"",
            phone:"",
            address:"",
            remark:"",
            date:dateFormate(new Date())
        });
    }
    render() {
        return (
            <div className='addOrderBlock'>
                <div className='buyerInfo'>
                    <div className='buyerName'> 
                        *姓名：<input value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}} />
                    </div>
                    <div className='phone'>
                        *手机：<input value={this.state.phone} onChange={(e) => {this.setState({phone:e.target.value})}} />
                    </div>
                    <div className='address'>
                        *地址：<input value={this.state.address} onChange={(e) => {this.setState({address:e.target.value})}}/>
                    </div>
                    <div className='remark'>
                        备注：<input value={this.state.remark} onChange={(e) => {this.setState({remark:e.target.value})}} />
                    </div>
                </div>
                <div className='time'>
                    订单时间：<input type = "date" value={this.state.date} onChange={(e) => {this.setState({date:e.target.value})}}/>
                </div>
                <div className='addBtn'>
                    <button onClick={(e) => {this.props.onAddOrder(Object.assign({},this.state));}}>add order</button>
                </div>
            </div>
        )
    }
}

export default BuyerInfo;