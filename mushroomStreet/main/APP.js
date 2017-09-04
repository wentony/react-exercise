

import React from "react";
import {Router,Route,Link,IndexLink}  from "react-router";
class APP extends React.Component{
     constructor(props){
          super(props) 
     }
    render(){
       return(
          <div  id="container">
                  {this.props.type}
                  <footer  id="footer"  className="footer">
                      <ul>
                         <li>
                            <IndexLink to="/"    activeClassName="active"><span  className="iconfont">&#xe668;</span><br />首页</IndexLink>
                         </li>
                         <li>
                             <Link  to="/kind"   activeClassName="active"><span  className="iconfont">&#xe7f9;</span><br />分类</Link>
                         </li>
                         <li>
                             <Link  to="/cart"   activeClassName="active"><span  className="iconfont">&#xe687;</span><br />购物车</Link>
                         </li>
                         <li>
                             <Link  to="/user"   activeClassName="active"><span  className="iconfont">&#xe680;</span><br />我的</Link>
                         </li>
                        </ul> 
                  </footer>
                  <div  id="toast"></div>
                  <div  id="cover"></div>
          </div>
       	)
    }
   componentDidMount(){
         $("#footer").find("li").find("a").on("tap",function(){
                 $("#footer").find("li").find("a").removeClass("active")
                  $(this).addClass("active")
         })
   }
}

export default APP;

