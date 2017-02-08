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
        const {type} = this.props;
        let priceInput = null;
        if (type === 'out') {
            priceInput = (<div className='price' >*产品价格（售价）<input type='number' value={this.state.price} onChange={(e) => {this.setState({price:e.target.value})}}/></div>);
        } else {
            priceInput = (<div className='price' >*产品价格（进价）<input type='number' value={this.state.price} onChange={(e) => {this.setState({price:e.target.value})}}/></div>);
        }
        return (
            <div className='addGoodsBlock'>
                <div className='goodsInfo'>
                    <div className='goodsName'>*产品名<input value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}}/></div>
                    <div className='amount'>*产品数量<input type='number' value={this.state.amount} onChange={(e) => {this.setState({amount:e.target.value})}}/></div>
                    {
                        priceInput
                    }
                    <div className='remark' >备注<input value={this.state.remark} onChange={(e) => {this.setState({remark:e.target.value})}}/></div>
                    {
                        type === 'out' ? null :(<div>当日汇率<input></input></div>)
                    }
                </div>
                <div className='addGoodBtn'>
                    <button onClick={() => {this.props.onAddGood(Object.assign({},this.state));this._revertData()}}>add goods</button>
                </div>
            </div>
        )
    }
}

AddGood.propTypes = {
    type: PropTypes.oneOf(['in','out','all']),
};

AddGood.defaultProps = {
    type: "out",
};

export default AddGood;