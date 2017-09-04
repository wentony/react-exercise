import React from "react";
import  {hashHistory} from "react-router";
import ajax from "./../MyAjax.js";

class Home extends React.Component{
     constructor(props){
          super(props) 
          this.state={
              list:[],
              bigList:[]
          }
     }
    componentWillMount(){
          var that = this
         var url="http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604"
          ajax.fetchJsonp(url,function(data){
               that.setState({
                    list:data
               })    
          },function(err){
              console.log(err)
          })
         var  url1 ="https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=1&_version=61&_=1501898874045"
           ajax.fetchJsonp(url1,function(data){
               var obj1 =data.result.wall.docs
               that.setState({
                    bigList:obj1
               })    
          },function(err){
              console.log(err)
          })
    }  
    detailBtn(goodsID){
         hashHistory.push("/detail")
         hashHistory.push({
			pathname:"/detail",
			query:{
				goodsID:goodsID
			}
		})

    } 
    searchBtn(){
        hashHistory.push("/search")
    }
    chatBtn(){
        hashHistory.push("/chat")
    }
    cartBtn(){
        hashHistory.push("/cart")
    }
    render(){
          var data = this.state.list
          var datas = this.state.bigList
        //   console.log(data.data)
        //   console.log(datas)
          var obj = data.data
        //    var arr1 = data.data[51822].list
         for(var j in obj){
            var op = obj[51822].list
            var ob = obj[51827].list
            var oc = obj[41119].list[0].list
            var on = obj[51833].list
            var hot = obj[51836].list
          }
          var  arr5 = []
         for(var s in datas){
               var obj = datas[s].props
               var obj1 = datas[s].leftbottom_taglist
                var arr7 =[]
               if(obj1.length != "0"){
                  arr7.push(<span  key={t} className="hotmai">{obj1[0].content}</span>)
               }
               var arr6 = []
               for(var t  in  obj){
                      arr6.push(
                          <span  key={t} >{obj[t]}</span>
                     )
               }
               arr5.push(<li  key={s}    onClick={this.detailBtn.bind(this,datas[s].iid)}>
                            <img src={datas[s].img}/>
                            <div  className="listbo">
                             {arr7}   
                             {arr6}
                            </div>
                             <p  className="boti"><span>￥{datas[s].price}</span><span  className="iconfont">{datas[s].cfav}  &#xe600;</span></p>
                        </li>)
               
         }
          var arr=[]
           for(var i in op){
            arr.push( <div key={i} className="swiper-slide">
                                        <img src={op[i].image_800}/>
                                    </div>)
           }
           var arr1=[]
           for(var k in ob){
            arr1.push(<div key={k} className="hot1">
                                  <span>{ob[k].title}</span><br/>
                                  <span>{ob[k].description}</span><br/>
                                  <img  src={ob[k].image}/>
                              </div>)
           }
           var arr2 = []
           for(var d in  oc){
              arr2.push(<li  key={d}>
                           <img src={oc[d].img}/><br />
                           <span>{oc[d].title}</span>
                           <span>￥{oc[d].salePrice}</span>
                           <span>￥{oc[d].price}</span>
                        </li>)
           }
           var arr3=[]
           for(var m in on){
                arr3.push(<div  key={m} className="setol">
                                 <span>{on[m].title}</span><br />
                                 <span>{on[m].viceTitle.replace("{","").replace("}","")}</span><br />
                                 <img  src={on[m].image} />
                             </div>)

           }
           var  arr4=[]
           for(var v in hot){
                arr4.push(<li  key={v}>
                            <img src={hot[v].image}/><br />
                            <span>{hot[v].title}</span>
                          </li>)
           }
       return(
           <div   className="type">
                 <header id="header">
                    <div  className="commonHeader">
                        <div   className="back  iconfont"  onClick={this.chatBtn.bind(this)}>&#xe670;</div>
                        <div   className="title" onClick={this.searchBtn.bind(this)}>
                             <n  className="iconfont"  id="font">&#xe602;</n>
                             <n  id="fnt">荷叶边套头连衣裙首</n>
                        </div>
                        <div   className="moreInfo  iconfont"   onClick={this.cartBtn.bind(this)}>&#xe687;</div>
                    </div> 
                 </header>
				 <div id="content">
                      <div className="swiper-container">
                            <div className="swiper-wrapper">
                               {arr}
                            </div>
                            <div className="swiper-pagination"></div>
                       </div>
                       <div className="hotTop">
                              {arr1}
                       </div>
                       <div className="bgk"></div>
                       <div className="countdown">
                            11点快抢  距结束<span  id="_d">00</span> : <span  id="_h">00</span> : <span  id="_m">00</span>
                            <img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png"/>
                       </div>
                       <div  className="Panicbuying">
                             <ul  id="Panic">
                                 {arr2}
                             </ul>
                       </div>
                       <div className="bgk"></div>
                       <div className="discount">
                            超实惠 - 促销直达
                       </div>
                       <div className="setop">
                             {arr3}
                       </div>
                       <div className="bgk"></div>
                       <div className="market">热门市场</div>
                       <div className='marketkind'>
                              <ul>
                                 {arr4} 
                              </ul>
                       </div>
                       <div className="likelove_a">
                           <div className="likelove">猜你喜欢</div>
                       </div>
                       <div   className="bigList">
                            <ul>
                               {arr5}
                            </ul>
                       </div>
                 </div>
           </div>
       	)
    }
    componentDidUpdate(){
          var mySwiper = new Swiper(".swiper-container",{
				autoplay:2000,
				loop:true,
				autoplayDisableOnInteraction:false,
				pagination:".swiper-pagination"
            })
           function countTime() {  
	            //获取当前时间  
	            var date = new Date();  
	            var now = date.getTime();  
	            //设置截止时间  
	            var endDate = new Date("2017-9-9 23:23:23");  
	            var end = endDate.getTime();  
	            //时间差  
	            var leftTime = end-now;
//	            console.log(leftTime)
	            //定义变量 d,h,m,s保存倒计时的时间  
	            var ms,h,m,s;  
	            if (leftTime>=0) {  
	                h = Math.floor(leftTime/1000/60/60%24);
	                m = Math.floor(leftTime/1000/60%60);  
	                s = Math.floor(leftTime/1000%60);
	            }else{
	            	$(".countdown").append('<span>抢购已结束</span>')
	            }
	            if(h<10){
	            	h="0"+h
	            }
	            if(m<10){
	            	m="0"+m
	            }
	            if(s<10){
	            	s="0"+s
	            }
	            $("#_d").html(h);  
	            $("#_h").html(m);  
	            $("#_m").html(s);  
	            //递归每秒调用countTime方法，显示动态时间效果  
	            setTimeout(countTime,1);  
	  
	        }
              countTime() 
            //热卖    
            $(".hotmai").css({
                display:"inline-block",
                color:"#FFFFFF",
                background:"#FF743C",
                padding:"2px  3px"
            })


    }
}
export default Home;


