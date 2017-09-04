export default {
	makeText(str,time){
		$("#toast").show()
		$("#toast").html(str);
		
		setTimeout(function(){
			$("#toast").hide()
		},time)
	},
    dop(time){
        $("#cover").show()
        setTimeout(function(){
			$("#cover").hide()
		},time)
	},
	bop(){
		
		 $("#carta1").show()
	},
	fop(){

		 $("#carta1").hide()
	}

}