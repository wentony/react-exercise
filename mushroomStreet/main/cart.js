import React from "react";
import ajax from "./../MyAjax.js";
import  {hashHistory} from "react-router";
import toast  from "./toast.js";
class Cart extends React.Component{
     constructor(props){
          super(props)
          this.state={
              list:[],
              list1:[],
              num:[0],
              list2:[],
              list3:[]
          }
     }
     btnbak(){
        window.history.go(-1)
     }
    dingdan(){
        var  arr = localStorage.getItem("pid")
        var  arr1 = JSON.parse(arr)
        if(arr1 !=  null){
            if(arr1.length != "0"){
               hashHistory.push("/orderpage")
            }else{
              toast.makeText("请选择商品",2000)
            }
        }else{
            toast.makeText("请选择商品",2000)
        }
    }
    minusbtn(index1){
     var  that = this
       console.log(index1)
     var str = localStorage.getItem('goods');
      var arr = eval(str);
		for(var attr in arr){
		if(arr[attr].id == index1){
            
            if(arr[attr].num == 1){
                arr[attr].num = 1;
            }else{
                arr[attr].num = arr[attr].num - 1;  
            }
            that.setState({
                list:arr
             }) 
			var cookieStr = JSON.stringify(arr);
			localStorage.setItem('goods',cookieStr);
		   }
       } 

    }
    addbtn(index3){
        var  that = this
      console.log(index3)
      var str = localStorage.getItem('goods');
      var arr = eval(str);
		for(var attr in arr){
		if(arr[attr].id == index3){
            arr[attr].num = arr[attr].num + 1;  
			var cookieStr = JSON.stringify(arr);
            localStorage.setItem('goods',cookieStr);
            that.setState({
                list:arr
             }) 
           }
        }
      console.log($(".dpos"))  
    }
    componentWillMount(){
            var that = this
            var arr = localStorage.getItem("goods")
            var  arr1 = eval(arr)
            console.log(arr1)
           that.setState({
                list:arr1
           })
     }       
    render(){
            var list3 = this.state.list3
            console.log(list3)
            var  obj = this.state.list
            var price = this.state.list1
            var  arr = []
            var num =this.state.num;
            var arr2 = []
            arr2.push(num)
            
            for(var i in obj){
                  arr.push(
                    <li  key={i}  >
                       <div  className="shopname"><input   className="ipts2"   value={obj[i].num}   data={obj[i].price}   data-id={obj[i].id}  type="checkbox"/>    {obj[i].name}</div>
                       <span>
                           <img src={obj[i].img}/>
                       </span>   
                        <span>{obj[i].title}</span>
                        <span>￥{obj[i].price}</span>
                        <span><button  id = "minusbtn" onClick={this.minusbtn.bind(this,obj[i].id)}>-</button><n   className="dpos" data={i} >{obj[i].num}</n><button  id="addbtn"   onClick={this.addbtn.bind(this,obj[i].id)}>+</button></span>
                    </li>        
                  ) 
            }
            var  arr1 = [price] 
       return(
         <div    id="container">  
            <div   className="type">
                    <header id="header">
                        <div  className="commonHeader">
                                <div   className="back  iconfont"  onClick={this.btnbak.bind(this)}>&#xe664;</div>
                                <div   className="title1">
                                    购物车
                                </div>
                                <div   className="iconfont" id="mfont">编辑  &#xe670;</div>
                        </div> 
                    </header>
                    <div id="content">
                          <div className="cart_a"   id="carta1">
                                <p>
                                    <span  className="iconfont">&#xe687;</span>
                                </p>
                                <p >
                                    购物车还是空的哦 ~
                                </p>
                                <p>
                                    <span  className="cart_btn">去逛逛</span>
                                </p>
                          </div>
                          <div  className="cartlist">
                                  <ul  id="cartlist_a">
                                       {arr}
                                  </ul>
                          </div>
                    </div>
                     <div  className="grand">
                            <input  type="checkbox"  id="grand_ipt1"/>
                            <span> 全选（<n  id="btn_a">0</n>）</span>
                            <span  id="grand_ipt2"><n>￥</n><n  id="grand_ipt2_a">0</n></span>
                            <input   onClick={this.dingdan.bind(this)}     id="grand_ipt3"  type="button"  value="结 算"/>
                    </div> 
                   <div  id="toast"></div> 
            </div>
         </div>   
       	)
    }
    componentDidMount(){
          var  obj = this.state.list
          if(localStorage.getItem("login") != "1"){  
                $(".cartlist").css("display","none")
                toast.bop()
                $(".grand").css("display","none")     
          }else{
               if(localStorage.getItem("id") != ""){
                   $(".grand").css("display","block")  
                   toast.fop()
                }else{
                    toast.bop()
                }
          }
          var num = 0;  
          var prs = 0;
          var  arr=[];
           var arr4 = [];
         $(".ipts2").on("tap",function(){
                var price = $(this).attr("data")
                var  nu =  $(this).attr("value")
                var id =   $(this).attr("data-id")
                var  pri = price*nu   
                var that = this
                
                if($(this).attr("checked")  == undefined){
                     $(this).attr("checked","checked")
                        num++;
                       prs =  prs+pri;
                       var obj = {pid:id}  
                       arr.push(obj)
                       localStorage.setItem("pid",JSON.stringify(arr))
                }else{
                    $(this).removeAttr("checked")
                        num--;
                       prs = prs-pri
                       var arr2= localStorage.getItem("pid")
                       var  arr1 = JSON.parse(arr2)
                       for(var i in arr1){
                          if(arr1[i].pid == id){
                               arr1.splice(i,1)
                               arr.splice(i,1)
                               arr4.splice(i,1)
                           }
                       }
                       localStorage.setItem("pid",JSON.stringify(arr1))
                }
              if($(".ipts2").length  == num){
                  $("#grand_ipt1").attr("checked","true")
              }else{
                  $("#grand_ipt1").removeAttr("checked")
              }      
             $("#btn_a").html(num)
             $("#grand_ipt2_a").html(prs)
            console.log($(".ipts2").length)
          })
          var arr3 = 0;
         
          for(var i in obj){
              var obj1 = {pid:obj[i].id}  
              arr4.push(obj1)
              arr3+= Number(obj[i].price*obj[i].num)
          }
          console.log(arr4)      
           var  first = true;
          $("#grand_ipt1").on("tap",function(){
              console.log($(".ipts2").attr("data-id"))
               console.log(first)
              if(first){
                 localStorage.setItem("pid",JSON.stringify(arr4))
                 $(".ipts2").attr("checked","true");
                 first = false;
                 $("#btn_a").html($(".ipts2").length)
                 $("#grand_ipt2_a").html(arr3)
              }else{
                 localStorage.removeItem("pid")
                 $(".ipts2").removeAttr("checked");
                 first = true;
                 $("#grand_ipt2_a").html(0)
                 $("#btn_a").html(0)
              }
          })

    }
}
export default Cart;