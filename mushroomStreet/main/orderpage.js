import React from "react";
import  {IndexLink,Link,hashHistory} from "react-router";
import ajax from "./../MyAjax.js";


class  orderPage extends  React.Component{
      constructor(props){
          super(props)
      }
      back(){
        window.history.go(-1)
       localStorage.removeItem("pid") 
      } 
      mfont(){
        hashHistory.push("/cart")
        localStorage.removeItem("pid")
      }
      btn(){
        hashHistory.push("/chat")        

      }
      render(){
          var  str1  = localStorage.getItem("pid")
          var str = localStorage.getItem('goods');
          var arr1 = eval(str);
          var  arr = eval(str1)
          console.log(arr,arr1)
           var arr2 =[]
           var ar = 0;
           for(var i=0 ; i<arr1.length;i++){
                console.log(arr1[i])
             if(arr !=  null){
                for(var j=0 ; j<arr.length;j++){
                    if(arr1[i].id == arr[j].pid){
                       console.log(arr1[i].id)
                         arr2.push(
                             <li  key={i}>
                                 <div  className="order_main_a"> <span>{arr1[i].name}</span> <span  className="iconfont"  onClick={this.btn.bind(this)}>&#xe6e4;  联系卖家</span> </div> 
                                 <div  className="order_main_b">
                                        <div  className="order_main_c">
                                            <img src={arr1[i].img}/>
                                        </div>
                                        <div  className="order_main_d" >{arr1[i].title}</div>
                                        <div  className="order_main_e"><span>{arr1[i].price}</span><br /><span>{arr1[i].num}</span></div>
                                        <div  className="order_main_f"><input type="text" placeholder="请给店家留言" /></div>
                                 </div>
                              </li>
                         )
                    }
                }
             }   
           }
          return(
              <div    id="container">  
                    <div   className="type">
                          <header id="header">
                            <div  className="commonHeader">
                                    <div   className="back  iconfont"  onClick={this.back.bind(this)}>&#xe664;</div>
                                    <div   className="title1">
                                        确认订单
                                    </div>
                                    <div   className="iconfont" id="mfont"  onClick={this.mfont.bind(this)}>&#xe687;</div>
                            </div> 
                         </header>
                         <div id="content">
                              <div   className="order_a">
                                   <span  className="iconfont">&#xe61c;</span><div  className="order_address">请输入收货地址</div><span className="iconfont">&#xe604;</span>
                              </div>
                              <div   className="order_main">
                                     <ul>
                                       {arr2}
                                     </ul>
                              </div>
                              <div   className="order_footer">
                                     <div  className="orderfooter_a">
                                         <p>共<span  id="nums">0</span>件商品</p>
                                         <p><span>总价：</span>￥<span  id="popo">0</span></p>
                                     </div>
                                     <div  className="orderfooter_b"  id="orderfooter_b">提交订单</div>
                              </div>
                              <div  className="tan_address">
                                       <div  className="tanaddress_a" >
                                             <a href="javascript:;"  id="address_none">X</a>
                                             <div  className="tanaddress_b">添加收货地址</div>
                                             <div  className="tanaddress_c">
                                                  <div  className="tanaddress_name">
                                                      <input type="text"  id="tanaddress_name"    placeholder="姓名"/>
                                                  </div>
                                                  <div  className="tanaddress_phone">
                                                      <input type="text"   id="tanaddress_phone"     placeholder="电话"/>
                                                  </div>
                                             </div>
                                             <div  className="tanaddress_d">
                                                <div  className="tanaddress_e" >
                                                    <select ref="city"   id="city">
                                                       <option>请选择省份</option>
                                                       <option>河南省</option>
                                                       <option>北京</option>
                                                        <option>四川省</option>
                                                       <option>广东省</option>
                                                        <option>上海</option>
                                                       <option>杭州</option>
                                                        <option>苏州</option>
                                                       <option>武汉</option>
                                                    </select>
                                                </div>
                                                <div    className="tanaddress_f">
                                                    <select  id="prviens">
                                                       <option>请选择城市</option>
                                                       <option>郑州</option>
                                                       <option>新乡</option>
                                                       <option>漯河</option>
                                                       <option>洛阳</option>
                                                       <option>新密</option>
                                                       <option>南阳</option>
                                                       <option>驻马店</option>
                                                       <option>南充</option>
                                                    </select>
                                                </div>
                                                <div  className="tanaddress_g">
                                                    <select   id="xiang">
                                                       <option>请选择地区</option>
                                                       <option>郾城</option>
                                                       <option>源汇区</option>
                                                       <option>十五里店</option>
                                                       <option>新店</option>
                                                       <option>小商桥</option>
                                                       <option>七里香</option>
                                                       <option>北舞渡</option>
                                                       <option>七里香</option>
                                                       <option>晴天</option>
                                                       <option>七里香</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div  className="tanaddress_h">
                                                <input   type="text"  id="xiangxi"  ref="xiangxi"  placeholder="详细街道地址"/>
                                            </div>
                                            <div   className="tanaddress_n" > 保  存</div>
                                    </div>
                              </div>
                              <div  className="paymoney">
                                     <div  className="paymoney_a">
                                           <div  className="paymoney_b">
                                                 <span  id="paymoney_f">X</span><span>收银台</span><span  className="iconfont">&#xe607;</span>
                                           </div>
                                           <div  className="paymoney_c">
                                                <span>支付方式</span><span><n>微信支付</n> ></span>
                                           </div>
                                           <div  className="paymoney_d">
                                                <span>支付金额</span ><span  id="mony"></span>
                                           </div>
                                           <div  className="paymoney_e">确认支付</div>
                                     </div>
                                     <div  className="paymoney_g">
                                            <img  src="../img/img2.jpg"/>
                                     </div>
                              </div>
                         </div>    
                    </div>
              </div>
          )
      }
      componentDidMount(){
             $("#address_none").on("tap",function(){
                 $(".tan_address").css("display","none")
             })
             $(".order_a").on("tap",function(){
                 $(".tan_address").css("display","block")
             })
             var arr=[]
             $(".tanaddress_n").on("tap",function(){
                 $(".tan_address").css("display","none")
                 $(".order_address").html("")
                //  var obj = {name:$("#tanaddress_name").val(),phone:$("#tanaddress_phone").val(),city:$("#city").val(),privens:$("#prviens").val(),xiang:$("#xiang").val()}
                //   arr.push(obj)
                //   localStorage.setItem("adress",JSON.stringify(arr))
                 $(".order_address").append('<n>收货人：'+$("#tanaddress_name").val()+'</n><n>'+$("#tanaddress_phone").val()+'</n><br />'+
                 '<n>'+$("#city").val()+$("#prviens").val()+$("#xiang").val()+'</n>'
                 )       
             })  
                var  str1  = localStorage.getItem("pid")
                var str = localStorage.getItem('goods');
                var arr1 = eval(str);
                var  arr = eval(str1)
                var ar = 0;
                var nu = 0;
            for(var i=0 ; i<arr1.length;i++){
               if(arr != null){
                     for(var j=0 ; j<arr.length;j++){
                        if(arr1[i].id == arr[j].pid){
                            ar =ar+ arr1[i].price*arr1[i].num
                            nu =  nu +arr1[i].num
                            $("#nums").html( nu) 
                            $("#popo").html(ar)
                        }   
                    }
                }
            } 
           $("#mony").append("￥"+ar)
           console.log(ar,nu)
           localStorage.setItem("num",nu)
          $("#orderfooter_b").on("tap",function(){
                 
                $(".paymoney").css("display","block")
          })
          $("#paymoney_f").on("tap",function(){
               $(".paymoney").css("display","none")
          }) 
           $(".paymoney_e").on("tap",function(){

                $(".paymoney_g").css("display","block")
                $(".paymoney_a").css("display","none")


           }) 
     }
}
export default  orderPage;   