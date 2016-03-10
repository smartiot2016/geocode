var http = require("http");
    var url = require('url');
    var fs = require('fs');
//var io = require('socket.io');
    var server = http.createServer(function(request, response){
        var path = url.parse(request.url).pathname;

         switch(path){
            case '/':
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write('hello world');
                response.end();
                break;
            case '/locate.html':
                fs.readFile(__dirname + path, function(error, data){
                    if (error){
                        response.writeHead(404);
                        response.write("opps this doesn't exist - 404");
                        response.end();
                    }
                    else{
                        
                        response.writeHead(200, {"Content-Type": "text/html"});
                        //console.log(JSON.stringify(data));
                        console.log('test');
                        
                        response.write('ajeet');
                        response.write(data);
                        response.on('end', function () {
    console.log(locatedata);
  });
                        response.end();
                        
                        
                    }
                });
                break;
        case '/log.html':
                  fs.readFile(__dirname + path, function(error, data){
                    if (error){
                        response.writeHead(404);
                        response.write("opps this doesn't exist - 404");
                        response.end();
                    }
                    else{
                        
                        response.writeHead(200, {"Content-Type": "text/html"});
                        //console.log(JSON.stringify(data));
                        console.log('log');
                        
                        response.write(data);
                        response.end();
                        
                        
                    }
                });
                        break;
    case '/del':  
        console.log('delete');
        break;
        
     case '/edit':
          console.log('edit');
          break;
          
            default:
                response.writeHead(404);
                response.write("opps this doesn't exist - 404");
                response.end();
                break;
        }
    });
    
var port=process.env.PORT;
server.listen(port);
// var  listener= io.listen(server);
