import React from "react";
import toast  from "./toast.js";
import ajax from "./../MyAjax.js";
class Register extends React.Component{
     constructor(props){
          super(props),
          this.state={
              list:{
				
              }
          }
     }
    bakbtn(){
       window.history.go(-1)
    }
    btncheck2(){
     var that  = this
     var  username = that.refs.usernames.value
     var  password  = that.refs.passwards.value
     var obj={
         status:"register",
         userID:username,
         password:password
     }
        that.setState({
            list:obj
        })
    }    
    render(){
       return(
              <div id = "container">
                    <div  className="type">
                        <header id="header">
                             <div  className="commonHeader">
                                <div   className="back  iconfont"  onClick={this.bakbtn.bind(this)}>&#xe664;</div>
                                <div   className="title1">
                                    进入蘑菇街
                                </div>
                                <div   className="iconfont" id="mfont"></div>
                             </div> 
                        </header>
                        <div id="content">
                                <div className="content_a">
                                     <p>注册账号</p>
                                     <input type="text"  className= "username"  ref="usernames"  placeholder="输入注册用户名/邮箱/手机"/>
                                </div>
                                <div className="content_b">
                                        <p>密码</p>
                                        <input type="password"  className= "passward"  ref="passwards"    placeholder="输入用密码"/>
                                </div>
                                <div className="content_c">
                                        <input type="button"   onClick={this.btncheck2.bind(this)}   id= "butna" value="一键注册"/>
                                </div>
                                <div   className="content_d">
                                    <span>账号免密登陆</span>
                                    <span>免密登陆</span>
                                </div>
                                <div className="content_e">
                                    <span></span>
                                    <span>Or</span>
                                    <span></span>
                                </div>
                                 <div  className="content_f">
                                     <img src="https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png" />
                                 </div>
                                 <div  className="content_g">
                                         *注册代表同意《蘑菇街网络服务协议》       
                                 </div>
                                <div  id="toast"></div>
                        </div>
                    </div>
               </div>     
       	)
    }
    componentDidUpdate(){
        var obj =  this.state.list;
        console.log(obj)
         if(obj == ""){
         }else{
            if(obj.userID == "" || obj.password == "" ){
                toast.makeText("信息不能为空",1000);
                $(".username").focus();
            }else{
                 $("#butna").val("正在注册。。。");
                 $("#butna").attr("disabled","disabled");
                 var op = {
                       url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                       data:obj,
                       dataType:JSON
                 }
                ajax.zeptoAjax(op,function(data){
                       $("#butna").val("一键注册");
                      $("#butna").removeAttr("disabled");
                        console.log(data)
                       if(data == "0"){
                           toast.makeText("用户名重名",1000);
                           $(".username").focus();
						}else if(data == "1"){
                           toast.makeText("注册成功",1000);
                           hashHistory.push("/login")
						}else  if(data == "2"){
							toast.makeText("服务器报错",1000)
						}


                })

            }
         }
    }
}
export default Register;