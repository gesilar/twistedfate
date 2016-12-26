// 订单管理
import React from 'react';
import {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class AddGood extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            amount:'',
            price:'',
            remark:''
        }
    }
    _revertData() {
        this.setState({
            name:'',
            amount:'',
            price:'',
            remark:''
        });
    }
    render() {
        return (
            <div className='addGoodsBlock'>
                <div className='goodsInfo'>
                    <div className='goodsName'>*产品名<input value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}}/></div>
                    <div className='amount'>*产品数量<input type='number'value={this.state.amount} onChange={(e) => {this.setState({amount:e.target.value})}}/></div>
                    <div className='price' >*产品价格（售价）<input value={this.state.price} onChange={(e) => {this.setState({price:e.target.value})}}/></div>
                    <div className='remark' >备注<input value={this.state.remark} onChange={(e) => {this.setState({remark:e.target.value})}}/></div>
                </div>
                <div className='addGoodBtn'>
                    <button onClick={() => {this.props.onAddGood(Object.assign({},this.state));this._revertData()}}>add goods</button>
                </div>
            </div>
        )
    }
}

AddGood.propTypes = {
    isSaleType: PropTypes.boolean
}

AddGood.defaultProps = {
    isSaleType: true
}

export default AddGood;