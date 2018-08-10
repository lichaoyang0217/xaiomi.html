
//当前页面加载完成
/*$(document).ready(function(){
	alert("傻根")
});*/


$(function(){
	
	//获取购物车数据
	$.ajax({
		
		type:"post",
		url:"http://localhost:8080/ProductSystemManager/com/neuedu/front/cart.do",
		async:true,
		data:"method=1",
		dataType:"jsonp", 
		success:function(data){
		//alert(JSON.stringify(data));	
			
		$.each(data, function(index,element) {
				var _obj=data[index];
				$("#content").append("<div class=\"bottom_2\">"+
					"<div class=\"bottom_1_1\">"+
						"<form style=\"text-align: center;\">"+
							"<input style=\"display: inline-block; margin-left: -34px;\" type=\"checkbox\"/>"+
							"<span class=\"span\"></span>"+
						"</form>"+
					"</div>"+
					"<div style=\"width: 70px; height: 70px;position: absolute; margin-left: 140px;\">"+
						"<a href=\"xiangqing.html\"><img src=\"img/shouji.jpg\"/></a>"+
					"</div>"+
					"<div class=\"bottom_1_2\">"+
						"<span class=\"span\"><a href=\"xiangqing.html\"  style=\"text-decoration: none;\">"+_obj.product.pname+"</a></span>"+
					"</div>"+
					"<div class=\"bottom_1_3\">"+
						"<span class=\"span\">"+_obj.product.price+"元</span>"+
					"</div>"+
					"<div class=\"bottom_1_4\">"+
							"<input type=\"text\" class=\"productnum\" />"+
					"</div>"+
					"<div class=\"bottom_1_5\">"+
						"<span class=\"span\"style=\"color: #FF6B00;\" >"+_obj.product.price+"元</span>"+
					"</div>"+
					"<div class=\"bottom_1_6\">"+
						"<span class=\"span\"><a href=\"#\" style=\"text-decoration: none;\">删除</a></span>"+
					"</div>"+
				"</div>")
				
			});
			
		}

	})
	
	
});
