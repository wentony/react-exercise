
import React from "react";
import ReactDom from "react-dom";

import {Router,Route,hashHistory,IndexRoute} from "react-router";

import  "./scss/main.scss";

import Home from "./main/home.js";
import Cart from "./main/cart.js";
import Kind from "./main/kind.js";
import User from "./main/user.js";

import Login from "./main/login.js";
import Register from "./main/register.js";
import Detail from "./main/detail.js";
import APP from "./main/APP.js";

import Search from "./main/search.js";
import Chat from "./main/chat.js";
import Search1 from "./main/search1.js";
import myShop from "./main/myshop.js";
import OrderPage from "./main/orderpage.js";

	ReactDom.render(<Router  history={hashHistory}>
						<Route  path="/" component={APP}>
						   <IndexRoute   components={{type:Home}}></IndexRoute>
						   <Route  path="kind"  components={{type:Kind}}></Route>
						   <Route  path="user"  components={{type:User}}></Route> 
						</Route>
						<Route  path="cart"  component={Cart}></Route>
						<Route  path="login"  component={Login}></Route>
						<Route  path="register"  component={Register}></Route>
						<Route  path="detail"  component={Detail}></Route>
						<Route  path="search"  component={Search}></Route>
						<Route  path="search1"  component={Search1}></Route>
						<Route  path="chat"  component={Chat}></Route>
						<Route  path="myshop"  component={myShop}></Route>
						<Route  path="orderpage"  component={OrderPage}></Route>
		</Router> ,document.getElementById("app"))
