var array_param = location.href.split('?id=');
var param = array_param[1].split('&label=');
var categoryId = param[0];
$.get('/ajax/category_info?id='+categoryId,function(d){
	new Vue({
		el:'#app',
		data:{
			category_info:d
		}
	});
},'json');