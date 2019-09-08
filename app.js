var koa = require('koa');
var controller = require('koa-route');
var app = koa();
var koaBody = require('koa-body');

var views = require('co-views')
var render = views('./view', {
  map: { html: 'ejs' }
});



var koa_static = require('koa-static-server');
var service = require('./service/webAppService.js');
app.use(koa_static({
	rootDir: './static/',
	rootPath: '/static/',
	maxage: 0
}));

app.use(controller.get('/', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('index',{title:'书城首页'});
}));



app.use(controller.get('/backet', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('backet');
}));

 var querystring = require('querystring')
 
app.use(controller.get('/book', function*(){
	this.set('Cache-Control', 'no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	//从get请求体中获取参数
	var bookId = params.id;
	this.body = yield render('book',{nav:'书籍详情',bookId:bookId});
}));

app.use(controller.get('/search', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('search',{nav:'搜索'});
}));

app.use(controller.get('/reader', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('reader');
}));

app.use(controller.get('/demo', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('demo');
}));

app.use(controller.get('/male', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('male',{nav:'男生频道'});
}));

app.use(controller.get('/female', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('female',{nav:'女生频道'});
}));

app.use(controller.get('/usercenter', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('user-center',{nav:'用户中心'});
}));

app.use(controller.get('/rank', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('rank',{nav:'排行'});
}));

app.use(controller.get('/category', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('category',{nav:'分类'});
}));

app.use(controller.get('/category_info',function*(){
	this.set('Cache-Control','no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var label = params.label;
	this.body = yield render('category_info',{nav:label})
}))

app.use(controller.get('/login',function*(){
	this.set('Cache-Control','no-cache');
	this.body = yield render('login');
}))


/*获取json数据的接口 ，可以给js代码调用*/

/*app.use(controller.get('/ajax/index', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = service.get_index_data();
}));*/

/*请求后台 */
app.use(controller.get('/ajax/index', function*(){
	this.set('Cache-Control', 'no-cache');
	var _this = this;
	this.body = yield service.get_index_data();
}));

app.use(controller.get('/ajax/rank', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = service.get_rank_data();
}));

app.use(controller.get('/ajax/male', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield service.get_male_data();
}));

app.use(controller.get('/ajax/female', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield service.get_female_data();
}));

app.use(controller.get('/ajax/category', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield service.get_category_data();
}));

var querystring = require('querystring');

app.use(controller.get('/ajax/book', function*(){
	this.set('Cache-Control', 'no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var id = params.fictionId;
	if(!id){
	   id = "";
	}
	this.body = yield service.get_book_data(id);
}));

app.use(controller.get('/ajax/category_info', function*(){
	this.set('Cache-Control', 'no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var id = params.id;
	if(!id){
		id = 1;
	}
	this.body = yield service.get_category_info_data(id);
}));


app.use(controller.get('/ajax/chapter', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = service.get_chapter_data();
}));

app.use(controller.get('/ajax/chapter_data', function*(){
	this.set('Cache-Control', 'no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var id = params.id;
	if(!id){
	   id = "";
	}
	this.body = service.get_chapter_content_data(id);
}));





app.use(controller.get('/ajax/search', function*(){
	this.set('Cache-Control', 'no-cache');
	var _this = this;
	var params = querystring.parse(this.req._parsedUrl.query);
	var start = params.start;
	var end = params.end;
	var keyword = params.keyword;
	this.body = yield service.get_search_data(start,end,keyword);
}));
/*demo111 为测试get方法的路由*/
app.use(controller.get('/ajax/demo111', function*(){
	this.set('Cache-Control', 'no-cache');
	var _this = this;
	var params = querystring.parse(this.req._parsedUrl.query);
	var jtid = params.jtid;
	this.body = yield service.get_demo_asjdja(jtid);
}));
/*demo112 为测试post表单提交的路由*/
app.use(controller.post('/users',koaBody,function*(){
	this.set('Cache-Control', 'no-cache');
	console.log(this.request.body);
	this.body = yield service.get_demo_asjdja();
}));



app.listen(3001);