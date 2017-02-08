// 订单管理
import React from "react";
import {PropTypes} from 'react';
import ReactDOM from "react-dom";
class GoodList extends React.Component {
    constructor() {
        super();
    }
    getTotal(goodList) {
        let total = 0;
        goodList.forEach(function(item) {
            total += Number(item.amount) * Number(item.price);
        })
        return total;
    }
    render() {
        if(this.props.goodsList.length === 0){
            return (
                <div>
                    暂无商品
                </div>
            )
        }
        const {type, operate} = this.props;
        let tableHeadNodes = null;
        if (type === 'out') {
            tableHeadNodes = (<th className='price' >产品价格（售价）</th>);
        } else if(type === 'in') {
            tableHeadNodes = (<th className='price' >产品价格（进价）</th>);
        } else {
            tableHeadNodes = [(<th className='price' >产品价格（进价）</th>), (<th className='price' >产品价格（售价）</th>)];
        }
        return (
            <table className='goodsTableList'>
                <tr className='goodsListHead'>
                    <th className=''>序号</th>
                    <th className='goodsName'>产品名</th>
                    <th className='amount'>产品数量</th>
                    {tableHeadNodes}
                    <th className='price' >备注</th>
                    <th className='price' >操作</th>
                </tr>
                {this.props.goodsList.map((item, index) => {
                    return (
                        <tr className='goodsList' key={index}>
                            <td className=''>{index+1}</td>
                            <td className='goodsName'>{item.name}</td>
                            <td className='amount'>{item.amount}</td>
                            <td className='price' >{item.price}</td>
                            <td className='remark' >{item.remark}</td>
                            <td className='operate' >
                            {
                                operate.map((item) => {
                                    if(item === 'del' ){
                                        return (<button onClick={(index) => {this.props.onDelGood(index)}}>删除</button>);
                                    }else{
                                        return (<button>修改</button>);
                                    }
                                })
                            }
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td>总价（售）：{this.getTotal(this.props.goodsList)}</td>
                </tr>
            </table>
        )
    }
}

GoodList.propTypes = {
    type: PropTypes.oneOf(['in','out','all']),
    operate: PropTypes.any,
    onDelGood: PropTypes.func,
    onModifyGood: PropTypes.func
}

GoodList.defaultProps = {
    type: "out",
    operate: ['del']
}

export default GoodList;