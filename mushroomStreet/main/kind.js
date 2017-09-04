import React from "react";
import  {hashHistory} from "react-router";
import ajax from "./../MyAjax.js";
class Kind extends React.Component{
     constructor(props){
          super(props)
          this.state={
              list:[],
              list1:[],
              list2:'',
              list3:''
          } 
     }
    searchBtn1(){
         hashHistory.push("/search")
    }
    chatbtn(){
         hashHistory.push("/chat")
    }
    btne(index,index1){ 
       var that = this 
       that.setState({
          list2:index
       })
       that.setState({
          list3:index1
       })
    }     
    componentWillMount(){
            var that = this
            var  op = that.state.list2
            var url = "http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604"
            ajax.fetchJsonp(url,function(data){
                 var obj = data.data
                 that.setState({
                      list:obj
                 })     
            },function(err){
               console.log(err)
            })
    }
    cartbtn(){
        hashHistory.push("/cart")
    }               
    render(){
         var that = this
         var data = this.state.list
         for(var i in data){
             var  pops = data[41789].list
         }
         var  arr = []
         for(var j in pops){
             arr.push(<li  key={j}  onClick={this.btne.bind(this,pops[j].maitKey,pops[j].miniWallkey)}>
                 <p>{pops[j].title}</p>
             </li>)
         }

       return(
           <div   className="type">
               <div className="zhanwei"></div>
               <header id="header"   className="header_fix">
                    <div  className="commonHeader">
                            <div   className="back  iconfont"  onClick={this.chatbtn.bind(this)}>&#xe670;</div>
                            <div   className="title" onClick={this.searchBtn1.bind(this)}>
                                <n  className="iconfont"  id="font">&#xe602;</n>
                                <n  id="fnt">阔腿吊带</n>
                            </div>
                            <div   className="moreInfo  iconfont"  onClick={this.cartbtn.bind(this)}>&#xe687;</div>
                    </div> 
               </header> 
               <div id="content">
                   <div id="contentkind">
                     <div className="content_left">
                          <ul>
                               {arr}
                          </ul>
                     </div>
                     <div className="content_right"   id="contentright">
                             <div className="content_right_a">
                               <div className="lists_a">
                                    <ul  id="list_right">
                                    </ul>
                                    <div className="Complex">
                                        <ul  id="Complex_a">
                                            <li><span>综合</span></li>
                                            <li><span>销量</span></li>
                                            <li><span>新品</span></li>
                                        </ul>
                                    </div>
                                    <div className="Complex_list">
                                        <ul  id = "Complex_list_a">
                                            
                                        </ul>
                                    </div>  
                              </div>  
                         </div>
                     </div>
                   </div>  
               </div> 
           </div>
       	)
    }
    componentDidUpdate(){
            
            var obj  =  this.state.list2
            var obj1  =  this.state.list3
            var url1 = "http://mce.mogujie.com/jsonp/makeup/3?pid=41888&_=1502008486212"
            ajax.fetchJsonp(url1,function(data){
            //    console.log(data.data.categoryNavigation)
               var obj = data.data.categoryNavigation
               for(var i in obj){
               }
                // console.log(obj.list)
                var vor = obj.list
                for(var j in  vor){
                    $("#list_right").append('<li>'+
                            '<img src="'+vor[j].image+'"/><br />'+
                            '<span>'+vor[j].title+'</span>'+
                        '</li>')
                }
            },function(err){
               console.log(err)
            })
            var url1 = "http://mce.mogujie.com/jsonp/makeup/3?pid="+obj+"&_=1502008486212"
            ajax.fetchJsonp(url1,function(data){
                $("#list_right").html("")
            //    console.log(data.data.categoryNavigation)
               var obj = data.data.categoryNavigation
               for(var i in obj){
               }
                // console.log(obj.list)
                var vor = obj.list
                for(var j in  vor){
                    $("#list_right").append('<li>'+
                            '<img src="'+vor[j].image+'"/><br />'+
                            '<span>'+vor[j].title+'</span>'+
                        '</li>')
                }
            },function(err){
               console.log(err)
            })
            var url2 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+obj1+"&page=1&_version=1&pid=&q=&cpc_offset=0&_=1502078179443"
            ajax.fetchJsonp(url2,function(data){
                    $("#Complex_list_a").html("")
                     var  obj2 = data.result.wall.docs
                      for(var i in  obj2){
                            $("#Complex_list_a").append('<li  onClick = "detail1()"   goodsid ='+obj2[i].iid+'>'+
                                 '<img src="'+obj2[i].img+'"/>'+
                                 '<p>'+obj2[i].title+'</p>'+
                                 '<p>￥'+obj2[i].price+'<span  class="iconfont">'+obj2[i].cfav+'&#xe600;</span></p>'+
                                 '<p>已售'+obj2[i].sale+'件</p>'+
                            '</li>')
                      }
            },function(err){
               console.log(err)
            })
             function detail1(event){
                console.log(event.target.getAttribute("goodsid"))
                } 
            $("#Complex_a").find("li").on("tap",function(){
                        console.log($(this).index())
                        var index = $(this).index()
                         var url2 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+obj1+"&page="+index+"&_version=1&pid=&q=&cpc_offset=0&_=1502078179443"
                            ajax.fetchJsonp(url2,function(data){
                                    $("#Complex_list_a").html("")
                                    var  obj2 = data.result.wall.docs
                                    for(var i in  obj2){
                                            $("#Complex_list_a").append('<li   goodsid ='+obj2[i].iid+'>'+
                                                '<img src="'+obj2[i].img+'"/>'+
                                                '<p>'+obj2[i].title+'</p>'+
                                                '<p>￥'+obj2[i].price+'<span  class="iconfont">'+obj2[i].cfav+'&#xe600;</span></p>'+
                                                '<p>已售'+obj2[i].sale+'件</p>'+
                                            '</li>')
                                    }
                            },function(err){
                            console.log(err)
                            })


            })

           $(".content_left").find("li").eq(0).addClass("activebg")
           $(".content_left").find("li").eq(0).find("p").addClass("activecor")
           $(".content_left").find("li").on("tap",function(e){
                $(".content_left").find("li").removeClass("activebg").eq($(this).index()).addClass("activebg").siblings().removeClass("activebg")
                $(".content_left").find("li").find("p").removeClass("activecor").eq($(this).index()).addClass("activecor")
           })    

         
           $('#contentright').bind('scroll', function(e) { 
                   
                    // console.log( $("#list_right").height())
                    var height =  $("#list_right").height()
                    // e.preventdefault();               //禁用默认滚动行为，需要自己实现滚动
                    // console.log($(this).scrollTop());// 计算你的屏幕高度
                    if($(this).scrollTop() > height){
                         $(".Complex").css({
                               width:"80%",
                               position:"fixed",
                               right:"0",
                                top:"23px",
                                height:"40px",
                                background:"#ffffff",
                                "z-index":"1"
                         })
                    }else{
                         $(".Complex").css({
                                position:"",
                               "margin-top":"20px",
                                width:"96%",
                                height:"30px"
                         }) 
                    }
            });
    }
}
export default Kind;

//https://list.mogujie.com/search?cKey=h5-cube&fcid=50003&page=1&_version=1&pid=&q=&cpc_offset=0&_=1502078179443&callback=jsonp5
//https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&_=1502078117301&callback=jsonp3