import React from "react";
import  {hashHistory} from "react-router";
import ajax from "./../MyAjax.js";
class myshop extends React.Component{
       constructor(props){
            super(props) 
        }
      bakbtn(){
           window.history.go(-1)
      } 
      backbtn(){
        hashHistory.push("/cart")
      } 
     componentWillMount(){
            var url = 'http://api.mogujie.com/h5/mwp.shopappservice.getContent/1/?mw-appkey=100028&mw-t=1502358777409&mw-ttid=NMMain%40mgj_h5_1.0&mw-sign=23fa29dbaee86ce57d9fb11c49d829d7&data=%7B%22shopId%22%3A%2215tr2%22%2C%22shopType%22%3A%22mgjh5%22%2C%22moduleId%22%3A%225001%22%2C%22layoutId%22%3A%22489352%22%7D&_=1502358777412';
            ajax.fetchJsonp(url,function(data){
                     console.log(data)

            },function(err){
              console.log(err)
            })




       }
       render(){
           return(
              <div id="container">
                <div   className="type">
                    <div id="content">                      
                       <div className="myshop_a">
                            <div  className="myshop_b">
                                 <div  className="myshop_c">
                                      <span   id="myshop_b_a"  onClick={this.bakbtn.bind(this)}></span>
                                      <span   id="myshop_b_b"   onClick={this.backbtn.bind(this)}></span>

                                 </div>
                            </div>
                       </div>
                    </div>
                </div>
             </div>   
           )
      }
}
export default myshop;