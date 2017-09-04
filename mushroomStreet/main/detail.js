import React from "react";
import  {IndexLink,Link,hashHistory} from "react-router";
import ajax from "./../MyAjax.js";
import toast  from "./toast.js";
class Detail extends React.Component{
     constructor(props){
          super(props)
          this.state = {
            goodsID : this.props.location.query.goodsID,
            list:[],
            discount:[],
            list1:[],
            list2:[],
            list3:[]           
		} 
     }
     componentWillMount(){
            
            var that = this
            var id = this.state.goodsID
            var  url="http://m.mogujie.com/jsonp/detail.api/v1?iid="+id+"&template=1-2-detail_normal-1.0.0&appPlat=" 
            ajax.fetchJsonp(url,function(data){
                  var obj = data.data
                  that.setState({
                     list:obj
                  }) 
                    console.log(obj)     
            },function(err){
                 console.log(err)
            })
            var url1 = " http://promotion.mogujie.com/jsonp/getValidShopProList/1?sellerId="+id+"&shopId=1cvou0&marketType=market_mogujie"
            ajax.fetchJsonp(url1,function(data){
                  console.log(data)                
            },function(err){
                  console.log(err)
            })
     }
    chatDetail(){
     hashHistory.push("/chat")
    }
    shopbtn(){
        hashHistory.push("/myshop")
    }    
    cartDetail(){
       var data = this.state.list 
       for(var i in data){
          var  title = data.normalShareInfo.title
          var  nowPrice =  data.normalPrice.nowPrice
          var  img1 = data.topImages[0]
          var shopname = data.shopInfo.name

       }
      if(localStorage.getItem("login") != "1"){
               toast.makeText("请先登录",2000)
               setTimeout(function(){
                  hashHistory.push("/login")
               },2000) 
            }else{
                var id = this.state.goodsID
                toast.makeText("已加入购物车",2000)
                //  console.log(localStorage.getItem('goods'))
			    var first = localStorage.getItem('goods')==null?true:false;//判断是否有cookie进行添加
			    var same = false;//判断时候已经追加
			//是否是第一次添加
			if(first){
                // console.log(title,nowPrice,img1)
                // console.log(id)
				//第一次添加,建立结构。
				localStorage.setItem('goods','[{"id":"'+id+'","title":"'+title+'","price":"'+nowPrice+'","img":"'+img1+'","num":"1","name":"'+shopname+'"}]');
                localStorage.setItem('first','false');
                
			}else{
                var str = localStorage.getItem('goods');
            //    console.log(str)
                var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;
				for(var attr in arr){
					if(arr[attr].id == id){		
						arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
						var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
						localStorage.setItem('goods',cookieStr);
						same = true;
					}
                }
				//如果id不同，重新建立商品对象;
				if(!same){
					var obj  = {id:id,num:1,title:title,price:nowPrice,img:img1,name:shopname};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
                    localStorage.setItem('goods',cookieStr);
                    console.log(arr)
                }                
			}
        }  
    }
    checkbtn(index,index1,index2,i){
      var that = this
      that.setState({
          list1:index
      })
      that.setState({
          list2:index1
      })
      that.setState({
          list3:index2
      })  
        console.log(i);
      $(".chekbtn").eq(i).addClass("chactive").siblings().removeClass("chactive")   

    }
    render(){
       var data = this.state.list
       for(var i in data){
          var ob = data.topImages
          var  title = data.normalShareInfo.title
          var  oldPrice  =  data.normalPrice.oldPrice
          var   nowPrice =  data.normalPrice.nowPrice
          var   text = data.normalPrice.priceTags[0].text
          var  highNowPrice = data.normalPrice.highNowPrice
          if(data.itemServices.columns[1].desc){
             var  desc= data.itemServices.columns[1].desc
          }
          if(data.itemServices.columns[2]){
               var  desc1= data.itemServices.columns[2].desc
          }
          var  services1= data.itemServices.services[0].name
          var  services2= data.itemServices.services[1].name
          var  services3= data.itemServices.services[2].name
          var  img1 = data.itemServices.services[0].icon
          var  img2 = data.itemServices.services[1].icon
          var  img3 = data.itemServices.services[2].icon
          var  cRate = data.rateInfo.cRate
          var  sales = data.rateInfo.sales
          var  rateTags=data.rateInfo.rateTags
          var  content = data.rateInfo.list
          var  skufo = data.skuInfo.skus
          var  shopLogo = data.shopInfo.shopLogo
          var  name = data.shopInfo.name
          var  cFans = data.shopInfo.cFans
          var  cSells = data.shopInfo.cSells
          var  score = data.shopInfo.score[0].score
          var  score1 = data.shopInfo.score[1].score
          var  imgslist = data.detailInfo.detailImage[0].list

       } 
        // console.log(services1,services2,services3)
        var  arr28 = []
        console.log(imgslist)
       for(var m in imgslist){
              
         arr28.push(<img key={m}   src={imgslist[m]}/>)


       }
 
        var  arr26 = [score]

        var arr27 = [score1]
         console.log(score)
        var  index = [this.state.list1]
        var  index1 = [this.state.list2]
        var  index2 = [this.state.list3]
        console.log(index[0],index2[0],index1[0])
        var  arr21 = []
         for(var  i  in  skufo){
            arr21.push(<li  key={i}  className="chekbtn"  onClick={this.checkbtn.bind(this,skufo[i].size,skufo[i].stock,skufo[i].img,i)}>
                   {skufo[i].style}
            </li>)
         }
        var  arr = []
        var  arr1 = []
        var  arr2 = [title]
        var  arr3 = []
        var  arr4 = [nowPrice]
        var  arr5 = [oldPrice]
        var  arr6 = [text]
        var  arr7 = [highNowPrice]
        var  arr8 = [desc]
        var  arr15 = [img3]
        var  arr9 = [services1]
        var  arr10 = [services2]
        var  arr11 = [services3]
        var  arr12 = [img1]
        var  arr13 = [img2]
        var  arr14 = [desc1]
        var  arr16 = [cRate]
        var  arr17 = [sales]
        var  arr18 = []
        var  arr19 = []
        var  arr22 = [shopLogo]
        var  arr23 = [name]
        var  arr24 = [cFans]
        var  arr25 = [cSells]
      
       for(var b in  content){
           var iop = content[b].images
           var  arr20 = []
           for(var c in iop){
                arr20.push( <img key={c} src={iop[c]}/>)
           }
            arr19.push(<div key={b} className="list_a">
                                      <div className="list_b">
                                           <span><img src={content[b].user.avatar}/></span><span>{content[b].user.uname}</span>
                                      </div>
                                      <div className="list_c">
                                             {content[b].content}
                                      </div>
                                      <div className="list_d">
                                             2017-08-06   
                                      </div>
                                      <div className="list_e">
                                            {arr20}
                                      </div>
                                 </div>)
       }
       for(var p in ob){
            arr.push(<li   key={p}>
                        <img  src={ob[p]}/>
                   </li>)  
       }
       for(var  c  in  rateTags){
            arr18.push(<span  key={c}>
                {rateTags[c].value}  ({rateTags[c].num})
            </span>)
       }
       return(
            <div id="container">
                <div   className="type">
                    <div id="content">
                          <div className="topimg">
                               <ul>
                                   {arr}
                               </ul>
                                 {arr1}
                          </div>
                          <div className="detailTitle">
                                   {arr2}
                          </div>
                          <div  className="detailPrice">
                                 <div  className="defaultPrice">
                                         ￥{arr4}
                                 </div>
                                 <div  className="discotprice">
                                       <span>
                                           ￥{arr5}
                                       </span><br />
                                       <span>
                                            {arr6}
                                       </span>
                                 </div>
                          </div>
                          <div className="desc">
                                  <span>
                                      {arr8}
                                  </span>
                                  <span>
                                       {arr14}
                                  </span>
                          </div> 
                          <div className="serverlist">
                                   <span  className="iconfont"><img src={arr12}/><n>{arr9}</n></span>
                                   <span  className="iconfont"><img src={arr13}/><n>{arr10}</n></span>
                                   <span  className="iconfont"><img src={arr15}/><n>{arr11}</n></span>
                                   <span  className="iconfont">&#xe604;</span>
                          </div>
                          <div  className="bgk"></div>
                          <div className="coupon">
                                <div className="coupons">优惠活动(4)</div>
                                <div className="couponpige">
                                      <ul>
                                      </ul>
                                </div>
                          </div>
                          <div  className="bgk"></div>
                          <div className="cheackcolor"  id="checkbtns">
                              <span>请选择：颜色  尺码</span><span  className="iconfont">&#xe604;</span>
                          </div>
                          <div  className="bgk"></div>
                          <div   className="evaluation">
                                  <span>  买家评价  </span><span>  {arr16}  </span>  |  <span>  销量  </span><span>   {arr17}   </span><span  className="iconfont">&#xe604;</span>
                          </div>
                          <div  className="evaluationlist">
                                 {arr18}
                          </div>
                           <div  className="evaluationlists">
                                 {arr19}
                           </div>
                          <div  className="poping">
                                 <div  className="poping_a">
                                       <div  className="poping_b">
                                            <div className="poping_img">
                                                 <img src={index2[0]}/>
                                            </div>
                                            <div  className="poping_imga">
                                                   <span>￥</span>
                                                   <span>{arr4}</span><br />
                                                   <span>库存{index1[0]}件</span><br />
                                                   <span>已选择：</span>
                                                   <span>{index[0]}</span>
                                            </div>
                                            <span  id="displaynone"> X </span>
                                       </div> 
                                       <div  className="poping_c">
                                             <ul> 
                                               <p>颜色：</p>  
                                                {arr21}
                                             </ul>
                                       </div>
                                       <div  className="poping_footer"  onClick={this.cartDetail.bind(this)}>
                                              确  定
                                       </div>
                                 </div>
                          </div>
                          <div  className="bgk"></div>
                          <div  className="bessinss">
                                <div className="bessinss_a">
                                      <img src={arr22}/>
                                </div>
                                <div className="bessinss_b">
                                    <p>{arr23}</p>
                                    <p>
                                        <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"/>
                                        <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"/>
                                        <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"/>
                                        <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"/>
                                    </p>
                                </div>
                                <div className="bessinss_c">
                                     <span>进店></span>
                                </div>
                                <div  className="bessinss_d">
                                       <ul>
                                          <li>
                                              <span>{arr25}</span><br />
                                              <span  className="minpx">总销量</span>
                                          </li>
                                          <li>
                                              <span>{arr24}</span><br />
                                              <span className="minpx">收藏数</span>
                                          </li>
                                          <li>
                                              <span  className="minpx">描述相符</span>
                                              <span>{arr26}</span><br />
                                              <span  className="minpx">质量满意</span>
                                              <span >{arr26}</span>
                                          </li>
                                       </ul>
                                </div>
                          </div>
                          <div  className="bgk"></div>
                          <div  className="listtopq">
                                 <ul>
                                   <li>图文详情</li>
                                   <li>商品参数</li>
                                   <li>热卖推荐</li>
                                 </ul>
                          </div>
                          <div  className="listtopq_a">
                               {arr28}
                          </div>
                        <div className="zhnawei"></div>  
                    </div>
                    <footer  id="footer1"  className="footer1">
                      <ul>
                         <li>
                            <IndexLink to=""   className="active"   onClick={this.chatDetail.bind(this)}><span  className="iconfont">&#xe670;</span><br />客服</IndexLink>
                         </li>
                         <li>
                             <Link  to=""   id="btnclor" ><span  className="iconfont  star"  >&#xe600;</span><br />收藏</Link>
                         </li>
                         <li>
                             <Link  to=""  ><span  className="iconfont"   onClick={this.shopbtn.bind(this)}>&#xe668;</span><br />小店</Link>
                         </li>
                         <li>
                              <Link  to=""  id="displayblock">加入购物车</Link>
                         </li>
                         <li>
                              <Link  to="" >立即购物</Link>
                         </li>
                        </ul> 
                    </footer>
                    <div  id="toast"></div>
                </div>
            </div>    
       	)
    }
    componentDidUpdate(){
         
         $("#btnclor").on("tap",function(){
              console.log( $(".star").css("color"))
               if($(".star").css("color") == "rgb(102, 102, 102)"){
                      toast.makeText("收藏成功",2000)
                     $(".star").css("color","red")
               }else{
                    toast.makeText("取消收藏",2000)
                     $(".star").css("color","#666")
               }

         }) 
         $("#displaynone").on("tap",function(){

            $(".poping").css("display","none")

         })
         $("#displayblock").on("tap",function(){

            $(".poping").css("display","block")

         })
        $("#checkbtns").on("tap",function(){

           $(".poping").css("display","block")
        })
        $(".chekbtn").eq(0).addClass("chactive")
        // $(".chekbtn").on("tap",function(){
            
        //    $(".chekbtn").removeClass("chactive")
        //    $(this).addClass("chactive")

        // })

       $('#content').bind('scroll', function(e) { 
                   
                    // e.preventdefault();               //禁用默认滚动行为，需要自己实现滚动
                    // console.log($(this).scrollTop());// 计算你的屏幕高度
                    if($(this).scrollTop() > 1500){
                         $(".listtopq").css({
                               position:"fixed",
                                right:"0",
                                top:"0",
                                height:"40px",
                                background:"#ffffff",
                                width:"100%",
                                "z-index":"1"
                         })
                    }else{
                         $(".listtopq").css({
                                position:"",
                                width:"100%",
                                height:"40px"
                         }) 
                    }
            });


    }
}
export default  Detail;
