$(function(){ 

	$.get('/ajax/index',function(d){
		new Vue({
			
			el:'#app',//渲染的部分的id
			data:{
				top:d.items[0].data.data,/*top hot---都是数组*/
				hot:d.items[1].data.data,
				recommend:d.items[2].data.data,
				female:d.items[3].data.data,
				male:d.items[4].data.data,
				free:d.items[5].data.data,
				topic:d.items[6].data.data,
				duration:0,
				position_body:0,
				header_position:0,
				header_duration:0,
				tab_1_class:'Swipe-tab__on',
				tab_2_class:'' 
			},
			methods:{
				tabSwitch:function(pos){
					this.duration = 0.5;
					this.header_duration = 0.5;
					if(pos==0){
						this.position_body = 0;
						this.header_position = 0;
						this.tab_1_class = "Swipe-tab__on";
						this.tab_2_class = "";
					}else{
						this.position_body = (-734);
						this.header_position = (277);
						this.tab_1_class = "";
						this.tab_2_class = "Swipe-tab__on";
					}
					
				}
			}
			
			
		})
		
	},'json');
}); 