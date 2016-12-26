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
            <Link to='/order' >Order</Link>
          </li>
          <li>
            <Link to='/orderInquire'>orderInquire</Link>
          </li>
          <li>
            <Link to='/purchase'>purchase</Link>
          </li>
          <li>
            <Link to='/storeManage'>storeManage</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Nav;
