import React from "react";
import {hashHistory} from "react-router";
import toast  from "./toast.js";
class User extends React.Component{
     constructor(props){
          super(props)    
     }
    cartbtn(){
       hashHistory.push("/cart")
    }
    userpay(){
       hashHistory.push("/orderpage")  
    } 
    userpays(){
       hashHistory.push("/orderpage") 
    }   
    render(){
       return(
           <div   className="type">
				 <div id="content">
                        <div className="user_a">
                              <div className="user_b">
                                    <img src="http://s3.mogucdn.com/mlcdn/5abf39/170807_81hd8a2gab4a8ebd6l17a35gg9e5f_100x100.jpg_170x170.jpg "/>
                              </div>
                              <div className="user_c">
                                  <p>啊哈就好大会的机会</p>
                                  <p>我的收货地址   <span>></span></p>
                              </div>
                        </div>
                        <div className="bgk"></div>
                        <div className="user_d"  onClick={this.userpays.bind(this)} >
                            <img src="https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png"/>
                            <span>我得订单</span>
                            <span>></span>  
                        </div>
                        <div className="bgk_a"></div>
                        <div className="user_e">
                             <ul>
                                <li   onClick={this.userpay.bind(this)}><img src="https://s10.mogucdn.com/p1/160829/idid_ifqwcmddgrswkzdbmezdambqgyyde_38x33.png"/><br /><span>待付款</span><span  id="user_pay_a"> 0 </span></li>
                                <li><img src="https://s10.mogucdn.com/p1/160829/idid_ie4dcoddmnswkzdbmezdambqgiyde_38x36.png"/><br /><span>待收货</span></li>
                                <li><img src="https://s10.mogucdn.com/p1/160830/idid_ie4gimztheygcmdcmezdambqgiyde_38x36.png"/><br /><span>待评价</span></li>
                                <li><img src="https://s10.mogucdn.com/p1/160829/idid_ie3wezbvhbtgkzdbmezdambqgayde_38x35.png"/><br /><span>售后</span></li>
                             </ul>
                        </div>
                        <div className="bgk"></div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s6.mogucdn.com/p2/161130/159_0ihj4c5a23kabh84ka8dfhl552dla_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg"  onClick={this.cartbtn.bind(this)}>
                                      <p>我的购物车</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s2.mogucdn.com/mlcdn/c45406/170419_7c5a4j17k0061bg4kiagf9lc69fe8_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>我的拼团</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s10.mogucdn.com/mlcdn/c45406/170803_840decficafea4lfg10gjc2a020gc_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>我的钱包</p>
                                      <p><span>快速提现   </span>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s10.mogucdn.com/p2/160822/159_00ijba9e46e13970ec7kakll8a06a_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>我的优惠券</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s16.mogucdn.com/p1/160727/upload_ifqtsndeg43gkmrqmezdambqgyyde_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>我收藏过的商品</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s17.mogucdn.com/p1/160727/upload_ie4wmy3gmq3wkmrqmezdambqgqyde_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>我收藏过的店铺</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div  className="user_g">
                            <img src="https://s10.mogucdn.com/p2/170217/79944927_03dfe3a4b2fg9kd5849093d56ib14_750x130.png"/>
                        </div>
                        <div className="bgk"></div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s16.mogucdn.com/p1/160727/upload_ie4tgm3ege4wkmrqmezdambqgqyde_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>消息通知</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s16.mogucdn.com/p1/160307/idid_ifrtqmdfgztggnzsg4zdambqhayde_84x84.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>客服</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div className="user_f">
                                 <div  className="user_f_img">
                                     <img src="//s17.mogucdn.com/p1/160727/upload_ifrdonbugezgkmrqmezdambqmeyde_56x56.png"/>
                                 </div>
                                 <div  className="user_f_msg">
                                      <p>意见反馈</p>
                                      <p>></p>
                                 </div>
                        </div>
                        <div  className="user_h">
                             <button  className="disbtn"  id="disbtn">退出登录</button>
                        </div>
                 </div>
           </div>
       	)
    }
    componentDidMount(){
             var op =  localStorage.getItem("num")
             if(op == 0){
               $("#user_pay_a").css("display","none")

             }else{
                $("#user_pay_a").css("display","block")
                 $("#user_pay_a").html(op)
             }
              
             if(localStorage.getItem("login") === "1"){
                   
             }else{
                    toast.makeText("请先登录",2000)
                    toast.dop(2000)
                     setTimeout(function(){
                        hashHistory.push("/login")  
                       },2000)
             }  
         $("#disbtn").on("tap",function(){           
            localStorage.setItem("login","0") 
            toast.makeText("退出成功",1000) 
            setTimeout(function(){
                        hashHistory.push("/login")  
                       },1000)    
         })
    }
}
export default User;