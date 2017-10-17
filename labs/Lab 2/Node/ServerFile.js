var http = require('http');
var fs = require('fs');


function send404Response(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: page not found!");
	response.end();
}


function onRequest(request, response){
	if(request.method=='GET' && request.url == '/'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./Portfolio.html").pipe(response);

	} else if(request.method=='GET' && request.url == '/images/mrrobot.jpg'){
		response.writeHead(200, {"Content-Type": "image/jpg"});
		fs.createReadStream("./images/mrrobot.jpg").pipe(response);

	} else if(request.method=='GET' && request.url == '/main.css'){
		response.writeHead(200, {"Content-Type": "text/css"});
		fs.createReadStream("./main.css").pipe(response);

	} else if(request.method=='GET' && request.url == '/decimal/decimal-to-binary.html'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./decimal/decimal-to-binary.html").pipe(response);
	

	} else if(request.method=='GET' && request.url == '/decimal/style.css'){
		response.writeHead(200, {"Content-Type": "text/css"});
		fs.createReadStream("./decimal/style.css").pipe(response);
	} else if(request.method=='GET' && request.url == '/decimal/script.js'){
		response.writeHead(200, {"Content-Type": "text/javascript"});
		fs.createReadStream("./decimal/script.js").pipe(response);
	} else if(request.method=='GET' && request.url == '/Activity1/decimal-to-binary.html'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./Activity1/decimal-to-binary.html").pipe(response);
	

	} else if(request.method=='GET' && request.url == '/Activity1/style.css'){
		response.writeHead(200, {"Content-Type": "text/css"});
		fs.createReadStream("./Activity1/style.css").pipe(response);
	} else if(request.method=='GET' && request.url == '/Activity1/script.js'){
		response.writeHead(200, {"Content-Type": "text/javascript"});
		fs.createReadStream("./Activity1/script.js").pipe(response);
	}
	else{
		send404Response(response);
	}
};

var server = http.createServer(onRequest);

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

