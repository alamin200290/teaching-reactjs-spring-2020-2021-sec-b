const http = require('http');

const server = http.createServer(serverRequest);

function serverRequest(request, response){
	//console.log(request.url);
	console.log(request);

	response.write('<h1>hello from node server...</h1>');
	response.end();
}

server.listen(3000);
console.log('server started at 3000');