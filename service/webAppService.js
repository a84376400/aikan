var fs = require('fs');

exports.get_chapter_data = function() {
	var content = fs.readFileSync('./mock/reader/chapter.json', 'utf-8');
	return content;
}

exports.get_chapter_content_data = function(id) {
	if (!id) {
		id = "1";
	}
	var content = fs.readFileSync('./mock/reader/data/data' + id + '.json', 'utf-8');
	return content;
}

exports.get_book_data = function(id) {
	
	//加载本地json文件
	/*if(fs.existsSync('./mock/book/' + id + '.json')){
	 	return fs.readFileSync('./mock/book/' + id + '.json', 'utf-8');
	}else{
		return fs.readFileSync('./mock/book/18218.json', 'utf-8');
	}*/
	
	//请求后台json 参数是fiction_Id
	
	return function(cb) {
		var http = require('http');
		
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/itemBook?id='+id,
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {
			console.log("error");
		});

		req_obj.end();
	}
}

exports.get_index_data = function() {
	//请求本地json
	/*var content = fs.readFileSync('./mock/home.json', 'utf-8');
	return content;*/
	//请求后台json
	return function(cb) {
		var http = require('http');
		
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/showIndex',
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
}



exports.get_rank_data = function(channelId) {
	var content = fs.readFileSync('./mock/rank.json', 'utf-8');
	return content;
}

exports.get_category_data = function(channelId) {
	/*var content = fs.readFileSync('./mock/category.json', 'utf-8');
	return content;*/
	return function(cb) {
		var http = require('http');
		
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/showCategory',
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
	
}

exports.get_female_data = function(channelId) {
	/*var content = fs.readFileSync('./mock/channel/female.json', 'utf-8');
	return content;*/
	return function(cb) {
		var http = require('http');
		
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/showFemale',
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
	
}

exports.get_male_data = function(channelId) {
	/*var content = fs.readFileSync('./mock/channel/male.json', 'utf-8');
	return content;*/
	//请求后台json
	return function(cb) {
		var http = require('http');
		
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/showMale',
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
}


exports.get_search_data = function(start, end, keyword) {
	return function(cb) {
		var http = require('http');
		var qs = require('querystring');
		var data = {
			s: keyword,
			start: start,
			end: end
		}
		var content = qs.stringify(data);
		var http_request = {
			hostname: 'dushu.xiaomi.com',
			port: 80,
			path: '/store/v0/lib/query/onebox?' + content,
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
}

exports.get_demo_asjdja = function(start, end, keyword) {
	return function(cb) {
		var http = require('http');
		var qs = require('querystring');
		var data = {
			s: keyword,
			start: start,
			end: end
		}
		
		var http_request = {
			hostname: 'localhost',
			port: 8087,
			path: '/page/register',
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
}	
exports.get_category_info_data = function(id) {
	
	return function(cb) {
		var http = require('http');
		var http_request = {
			hostname: 'localhost',
			port: 8080,
			path: '/showCategoryInfo?id='+id,
			method: 'GET'
		};

		req_obj = http.request(http_request, function(_res) {
			var callback_content = '';
			var _this = this;
			var content='';
			_res.setEncoding('utf8');

			_res.on('data', function(chunk) {
				content += chunk;
			});

			_res.on('end', function(e) {
				cb(null,content);
			});

		});

		req_obj.on('error', function(e) {

		});

		req_obj.end();
	}
	
	}
