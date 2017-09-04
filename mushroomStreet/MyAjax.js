var fetchJsonp = require("fetch-jsonp");
module.exports = {
	zeptoAjax(obj,callback){
		$.ajax({
			type:"get",
			url:obj.url,
			data:obj.data,
			dataType:obj.dataType,
			success:function(data){
				callback(data)
			}
		})
	},
	fetch(url,successCallback,failCallBack){
		fetch(url).then(function(response) {
		  return response.json();
		}).then(function(data) {
			//成功的回调
		  successCallback(data)
		}).catch(function(e) {
			//失败
		  failCallBack(e)
		});
	},
	fetchJsonp(url,successCallback,failCallBack){
		fetchJsonp(url).then(function(response) {
		  return response.json();
		}).then(function(data) {
			//成功的回调
		  successCallback(data)
		}).catch(function(e) {
			//失败
		  failCallBack(e)
		});
	}
}
