// 导航
import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
class Nav extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <Link to='/order' >下&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单</Link>
          </li>
          <li>
            <Link to='/orderInquire'>订单查询</Link>
          </li>
          <li>
            <Link to='/purchase'>进&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;货</Link>
          </li>
          <li>
            <Link to='/storeManage'>库存管理</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Nav;
