// 订单管理
import React from "react";
import {PropTypes} from 'react';
import ReactDOM from "react-dom";
class GoodList extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props.type);
        if(this.props.goodsList.length === 0){
            return (
                <div>
                    暂无商品
                </div>
            )
        }
        const {type} = this.props;
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
                        <tr className='goodsList'>
                            <td className=''>{index}</td>
                            <td className='goodsName'>{item.name}</td>
                            <td className='amount'>{item.amount}</td>
                            <td className='price' >{item.price}</td>
                            <td className='remark' >{item.remark}</td>
                            <td className='operate' >
                                <button>删除</button>
                                <button>修改</button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        )
    }
}

GoodList.propTypes = {
    type: PropTypes.oneOf(['in','out','all'])
}

GoodList.defaultProps = {
    type: "out"
}

export default GoodList;