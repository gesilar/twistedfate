// 库存管理
import React from "react";
import ReactDOM from "react-dom";
import GoodList from '../common/GoodList';
import AddGood from '../common/AddGood';

import * as storeListApi from "../../api/storeList";
class StoreManage extends React.Component{
    constructor(){
        super();
        this.state = {
            goodsList:[]
        }
    }
    componentWillMount() {
        const that = this;
        storeListApi.getGoodsList({
            success(response) {
                console.log(response);
                that.setState({goodsList:response})
            },
            error(response) {
                console.log(response);
            }
        });
    }
    _onAddGood(goodInfo) {
        console.log(goodInfo);
        const that = this;
        storeListApi.addGoodsList({
            goodsList: [goodInfo],
            success(response) {
                console.log(response);
                let goodsList = that.state.goodsList;
                goodsList = [...goodsList, goodInfo];
                that.setState({goodsList});
            },
            error(response) {
                console.log(response);
            }
        });
    }
    render(){
        return (
               <div>
                    <AddGood onAddGood={(goodInfo) => {this._onAddGood(goodInfo)}}/>
                    <GoodList goodsList={this.state.goodsList}/>
               </div>
        )
    }
}
export default StoreManage;
