import React from "react";
import {hashHistory} from "react-router";
import toast  from "./toast.js";
import ajax from "./../MyAjax.js";
class Login extends React.Component{
     constructor(props){
          super(props)
          this.state={
              lis:{

              }
          } 
     } 
     bak(){
        if(localStorage.getItem("login") == "1"){
             window.history.go(-1)
        }     
     }    
     registerBtn(){
        hashHistory.push("/register")
     }
    btncheck1(){
       var  that = this;
       var username = that.refs.username.value;
       var  password = that.refs.passward.value;
       var  obj ={
         status:"login",
         userID:username,
         password:password
       }
       that.setState({
          lis:obj
       })
    }   
    render(){
       return(
           <div id="container">
                <div className="type">
                    <header id="header">
                           <div  className="commonHeader">
                                <div   className="back  iconfont"  onClick={this.bak.bind(this)}>&#xe664;</div>
                                <div   className="title1">
                                    登陆头部
                                </div>
                                <div   className="iconfont" id="mfont">忘记密码</div>
                          </div> 
                    </header>
                    <div id="content">
                         <div className="content_a">
                                <p>蘑菇街账号</p>
                                <input type="text"  className= "username"  ref="username"  placeholder="输入用户名/邮箱/手机"/>
                         </div>
                         <div className="content_b">
                                <p>密码</p>
                                <input type="passward"  className= "passward"  ref="passward"    placeholder="输入用密码"/>
                         </div>
                         <div className="content_c">
                                <input type="button"   onClick={this.btncheck1.bind(this)}  id="butn" value="登 陆"/>
                         </div>
                         <div   className="content_d">
                               <span>免密登陆</span>
                               <span  onClick={this.registerBtn.bind(this)}>注册账号</span>
                         </div>
                         <div className="content_e">
                               <span></span>
                               <span>Or</span>
                               <span></span>
                         </div>
                         <div  className="content_f">
                             <img src="https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png" />
                         </div>
                         <div  id="toast"></div>
                    </div>
                </div>
           </div>     
       	)
    }
    componentDidUpdate(){
          var obj = this.state.lis
          console.log(obj)
           console.log(obj.userID,obj.password)
          if(obj.userID !=  undefined || obj.password != undefined ){
            
            if(obj.userID == "" || obj.password == "" ){
                toast.makeText("用户信息不能为空",1000)
                $(".username").focus();
            }else{
                 $("#butn").val("正在登陆。。。")
                 $("#butn").attr("disabled","disabled")
                 var opo = {
                       url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                       data:obj,
                       dataType:JSON
                 }
                ajax.zeptoAjax(opo,function(data){
                       $("#butn").val("登 陆")
                      $("#butn").removeAttr("disabled")
                       console.log(data)
                       if(data == ""){
                       }else if(data == "0"){
                           toast.makeText("用户名不存在",1000)
                           $(".username").focus();
						}else  if(data == "2"){
                            toast.makeText("用户名密码不符",1000)
                            $(".username").focus();
						}else{
                            console.log("11111111111")
                             toast.makeText("登陆成功",1000)
                             hashHistory.push("/user")
                             localStorage.setItem("login","1")
                        }
                 })

            }
         }




    }
}
export default Login;