var id = location.href.split('?id=').pop();
$.get('/ajax/book',{
	fictionId : id
},function(d){
	new Vue({
		el:'#app',
		data:{
			item:d[0],
			author_books:d[1],
			related:d[2]
		},
		methods:{
			readBook:function(){
				location.href = "/demo"
			}
		}
	});
},'json');