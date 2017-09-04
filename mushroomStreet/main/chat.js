import React from "react";

import  "./../scss/chat.scss";
class Chat extends React.Component{
     constructor(props){
          super(props) 
          this.state={
              list:[]
          }
     }
    sendbtn(){
        var that = this
       var  vla = that.refs.msginput.value;
       console.log(vla)
    that.setState({
       list:vla
 
      })
    }    
    render(){
        var vul = this.state.list
         console.log(vul)
       var arr=[]
       arr.push(<li  className="msgContent right"  key={1}>
               {vul} 
       </li>)
       return(
           <div   className="type">
                 <header id="header"></header>
				 <div id="content">
                       <div  className="chat_a"   id="chat_a">
                            <div id="main_chat" className="main_chat">
                                <ul id="content_chat" className="content_chat">
                                    <li className="msgContent left">hello?</li>
                                    <div className="kong"></div>
                                    <li className="msgContent left">hello</li>
                                    <div  className="kong"></div>
                                    <li className="msgContent right">hi</li>
                                    <div  className="kong"></div>
                                    <li className="msgContent left">hehe</li>
                                    <div  className="kong"></div>
                                    <li className="msgContent left">goodbye</li>
                                    <div className="kong"></div>
                                    <li className="msgContent right">。。。。</li>
                                    <div  className="kong"></div>
                                    <li className="msgContent right">sdfasdsadfassdfsdfsdfdsfsdfsdfsdfdfasdffasdfasfdasd fasd fasd fasdfasdfasdf</li>
                                    <div className="kong"></div>
                                        {arr}
                                </ul>
                                <textarea ref="msginput" className="msgInput"></textarea>
                                <button   onClick={this.sendbtn.bind(this)} className="sendbtn">发送</button>
                            </div>
                       </div>
                 </div>
           </div>
       	)
    }
}
export default Chat;