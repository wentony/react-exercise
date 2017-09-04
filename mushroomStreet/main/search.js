import React from "react";
import ajax from "./../MyAjax.js";
import  {hashHistory} from "react-router";
class Search extends React.Component{
     constructor(props){
          super(props) 
          this.state={
             hotSearch:[]
          }
     }
    backBtn(){
        window.history.go(-1)
    }
    componentWillMount(){
          var that = this;
          var url ="http://list.mogujie.com/module/mget?code=sketch%2ChotWord";
          ajax.fetchJsonp(url,function(data){
              var obj =data.data.hotWord.data
               that.setState({
                   hotSearch:obj
               })
          },function(err){
              console.log(err)
          })
    }
    btninf(){
        var that = this
        var  vale = that.refs.ipt.value
        if(that.refs.ipt.value != ""){
             console.log(JSON.stringify(vale))
             localStorage.setItem("val",JSON.stringify(vale)) 
             hashHistory.push("/search1")
        } 
    }     
    render(){
       var  data = this.state.hotSearch
       var arr = []
        for(var i in data){
            // console.log(data[i])
             var len = data[i].color.length
             if(len == "0"){
                arr.push(<li  key={i}>{data[i].frontword}</li>)
             }else{
                arr.push(<li  key={i}  className="bgcolor">{data[i].frontword}</li>)
             }
              
        }
       return(
           <div id="container">
                <div   className="type">
                        <header id="header">
                            <div className="commonHeader">
                               <div   className="back  iconfont"  onClick={this.backBtn.bind(this)}>&#xe664;</div>
                                <div   className="title"  id="title" >
                                    <input type="text" id="ipt"  ref="ipt" placeholder="防脱色哑光唇膏"/>
                                </div>
                                <div   className="moreInfo"   id="moreInfo"  onClick={this.btninf.bind(this)}>搜索</div>
                            </div>     
                        </header>
                    <div id="content">
                           <div  className="history">
                               <p  className="historytitle"><span  className="iconfont">&#xe602;</span><span>历史搜索</span><span  className="iconfont">&#xe648;</span></p>
                               <div className="hist">暂无记录</div>
                           </div>
                           <div  className="hotword">
                                  <p  className="hotstar"><span  className="iconfont">&#xe600;</span><span>热门搜索</span></p>
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
       // http://m.mogujie.com/wall/s?q=n&ptp=m1.fKiTO.0.0.y5WKrq
         $("#ipt").focus();
         $("#title").css("border","1px solid  red")
        $("#ipt").on("focus",function(){
             $("#title").css("border","1px solid  red")
        })
        $("#ipt").on("blur",function(){
             $("#title").css("border","1px solid  #EEEEEE")
        })
    }
}
export default Search;