import React from "react";
import ajax from "./../MyAjax.js";
import {Link,IndexLink,hashHistory}  from "react-router";
class Search1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            list1:[]
        } 
     }
    backBtn(){
      window.history.go(-1)
    }
    componentWillMount(){
           var  that  = this
           var val= localStorage.getItem("val")
           var  oq = JSON.parse(val)
            var url ='http://list.mogujie.com/search?_version=61&q='+oq+'&cKey=46&minPrice=&_mgjuuid=b9334580-2b06-4cb3-9ef9-c18b6306cecd&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&priceList=&_=1502263967314';
            ajax.fetchJsonp(url,function(data){
                 var obj = data.result
                 that.setState({
                     list:obj
                 })
            },function(err){
                 console.log(err)
            })
    }
    detailBtn1(goodsID){
          hashHistory.push("/detail")
         hashHistory.push({
			pathname:"/detail",
			query:{
				goodsID:goodsID
			}
		})
    }
    btnxiao(){
        var  that = this
      var obj = this.state.list
            for(var i in obj){
                var  dat = obj.wall.docs
            }
       dat.sort(function(a,b){   
            return  b.cfav - a.cfav;
       })
       that.setState({
          list1:dat
       })
         console.log(dat)
    }
    btnprice(){
      var  that = this
      var obj = this.state.list
            for(var i in obj){
                var  dat = obj.wall.docs
            }
       dat.sort(function(a,b){   
            return  b.price - a.price;
       })
       that.setState({
          list1:dat
       })
    }
    btn1(){
      var  that = this
      var obj = this.state.list
            for(var i in obj){
                var  dat = obj.wall.docs
            }
      that.setState({
          list1:dat
       })
       console.log(dat) 
    } 
    btn2(){
       var  that = this
      var obj = this.state.list
            for(var i in obj){
                var  dat = obj.wall.docs
            }
       dat.sort(function(a,b){   
            return  b.orgPrice - a.orgPrice;
       })
       that.setState({
          list1:dat
       })
    }  
    render(){
           var obj = this.state.list
            for(var i in obj){
                var  dat = obj.wall.docs
            }
           var   arr=[]
           for(var j  in dat){
                   var obj = dat[j].props
                    var obj1 = dat[j].leftbottom_taglist
                        var arr1 =[]
                    if(obj1.length != "0"){
                        arr1.push(<span  key={1} className="hotmai1">{obj1[0].content}</span>)
                    }
                    var arr2 = []
                    for(var t  in  obj){
                            arr2.push(
                                <span  key={t} >{obj[t]}</span>
                            )
                    }   
            arr.push(<li  key={j}    onClick={this.detailBtn1.bind(this,dat[j].iid)}>
                            <img src={dat[j].img}/>
                            <div  className="listbo">
                                {arr1}
                                {arr2}
                            </div>
                             <p  className="boti"><span>￥{dat[j].price}</span><span  className="iconfont">{dat[j].cfav}  &#xe600;</span></p>
                </li>)
           }       
         return(
             <div  id="container">
                    <div   className="type">
                            <header id="header">
                               <div className="commonHeader">
                                   <div   className="back  iconfont"  onClick={this.backBtn.bind(this)}>&#xe664;</div>
                                   <div   className="title"  id="title" >
                                       <input type="text" id="ipt"  ref="ipt" placeholder="防脱色哑光唇膏"/>
                                    </div>
                                   <div   className="moreInfo   iconfont" >&#xe687;</div>
                              </div>     
                           </header>
                           <div  className="title_a">
                                  <ul  id="addbtn">
                                     <li><IndexLink onClick={this.btn1.bind(this)} >综合</IndexLink></li>
                                     <li><Link   onClick={this.btnxiao.bind(this)}>销量</Link></li>
                                     <li><Link   onClick={this.btn2.bind(this)}>新品</Link></li>
                                     <li><Link    onClick={this.btnprice.bind(this)}>价格</Link></li>
                                  </ul>
                           </div>
                           <div  id="content">
                                  <div  className="search_a  bigList">
                                        <ul>
                                          {arr}
                                        </ul>
                                  </div>
                           </div>
                    </div>
             </div>
             )
    }
    componentDidMount(){
            
        var val= localStorage.getItem("val")
         $("#ipt").focus();
         $("#ipt").val(JSON.parse(val))
         $("#title").css("border","1px solid  red")
        $("#ipt").on("focus",function(){
             $("#title").css("border","1px solid  red")
        })
        $("#ipt").on("blur",function(){
             $("#title").css("border","1px solid  #EEEEEE")
        })
        $(".hotmai1").css({
                display:"inline-block",
                color:"#FFFFFF",
                background:"#FF743C",
                padding:"2px  3px"
            }) 
         $("#addbtn").find("li").eq(0).addClass("active1")
         $("#addbtn").find("li").on('tap',function(){
                    $("#addbtn").find("li").removeClass("active1")
                         $(this).addClass("active1")

         }) 
    }         
 }
export default Search1;   