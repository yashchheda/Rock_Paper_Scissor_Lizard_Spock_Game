var jsonObj = {outcome:'Win',
wins:'3',
loses:'2',
ties:'0'};
var http = require('http');
var choices=["rock", "paper", "scissors","lizard","spock"];
var win=0,lose=0,tie=0;
var server= http.createServer(function (req, res) {
  var string;
  switch(req.url) {
    case '/':
		  // show the user a simple form
		  console.log("[200] " + req.method + " to " + req.url);
		  res.writeHead(200, "OK", {'Content-Type': 'text/html'});
		  res.write('<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8" /><title>Hello Noder!</title></head><body>');
		  res.write('<h2> User Make a Choice </h2>');
		  res.write('<form action="/play/rock" method="post">');
		  res.write('<input type="submit" value="Rock" />');
		  res.write('</form>');
		  
		  res.write('<form action="/play/paper" method="post">');
		  res.write('<input type="submit" value="Paper" />');
		  res.write('</form>');
		  
		  res.write('<form action="/play/scissors" method="post">');
		  res.write('<input type="submit" value="Scissors" />');
		  res.write('</form>');
		  
		  res.write('<form action="/play/lizard" method="post">');
		  res.write('<input type="submit" value="Lizard" />');
		  res.write('</form>');
		  
		  res.write('<form action="/play/spock" method="post">');
		  res.write('<input type="submit" value="Spock" />');
		  res.write('</form>');
		  
		  
		  res.write('</body></html>');
		  res.end();
		  break;
    
	case '/play/rock':
      if (req.method == 'POST') {
		console.log("[200] " + req.method + " to " + req.url);
		
			string = choices[Math.floor(Math.random()*choices.length)];
			console.log("string '" + string + "' chosen");
			res.writeHead(200, "OK", {'Content-Type': 'application/json;charset=utf-8'});
			switch(string){
		
				case 'rock':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: rock <br/> The Server chose: " + string + " </h3>");
				jsonObj.outcome='Tie';
				tie=tie+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();				
				break;
				
				case 'paper':
				case 'spock':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: rock <br/> The Server chose: " + string + "</h3>");
				jsonObj.outcome='Lose';
				lose=lose+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();
				break;
				
				case 'scissors':
				case 'lizard':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: rock <br/> The Server chose: " + string + " </h3>");
				jsonObj.outcome='Win';
				win=win+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();
				break;
				
			}
  } else {
		console.log("[405] " + req.method + " to " + req.url);
		res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
		res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
	}  
  break;
  
	case '/play/paper':
		if (req.method == 'POST') {
			console.log("[200] " + req.method + " to " + req.url);
			console.log("request received");
			
			string = choices[Math.floor(Math.random()*choices.length)];
			console.log("string '" + string + "' chosen");
			res.writeHead(200, "OK", {'Content-Type': 'application/json; charset=utf-8'}); 
			switch(string){
		
				case 'rock':
				case 'spock':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: paper <br/> The Server chose: " + string + " </h3>");
				jsonObj.outcome='Win';
				win=win+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();
				break;
				
				case 'paper':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: paper <br/> The Server chose: " + string + "</h3>");
				jsonObj.outcome='Tie';
				tie=tie+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();
				break;
				
				case 'scissors':
				case 'lizard':
				//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: paper <br/> The Server chose: " + string + " </h3>");
				jsonObj.outcome='Lose';
				lose=lose+1;
				jsonObj.wins=win;
				jsonObj.loses=lose;
				jsonObj.ties=tie;
				console.log(jsonObj);
				res.write(JSON.stringify(jsonObj));
				//res.write("</body></html>");
				res.end();
				break;
			}
    
  } 	else {
			console.log("[405] " + req.method + " to " + req.url);
			res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
			res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
		}  
	break;
  
	case '/play/scissors':
      if (req.method == 'POST') {
			console.log("[200] " + req.method + " to " + req.url);
     
				console.log("request received");
				string = choices[Math.floor(Math.random()*choices.length)];
				console.log("string '" + string + "' chosen");
				res.writeHead(200, "OK", {'Content-Type': 'application/json; charset=utf-8'}); 
				switch(string){
			
					case 'rock':
					case 'spock':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: scissor <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Lose';
					lose=lose+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'paper':
					case 'lizard':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: scissor <br/> The Server chose: " + string + "</h3>");
					jsonObj.outcome='Win';
					win=win+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'scissors':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: scissor <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Tie';
					tie=tie+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
				}
		} else {
			console.log("[405] " + req.method + " to " + req.url);
			//res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
			res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
	}  
  break;
  
  case '/play/lizard':
      if (req.method == 'POST') {
			console.log("[200] " + req.method + " to " + req.url);
      
				console.log("request received");
				string = choices[Math.floor(Math.random()*choices.length)];
				console.log("string '" + string + "' chosen");
				res.writeHead(200, "OK", {'Content-Type': 'application/json; charset=utf-8'}); 
				switch(string){
			
					case 'rock':
					case 'scissors':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: lizard <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Lose';
					lose=lose+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'paper':
					case 'spock':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: lizard <br/> The Server chose: " + string + "</h3>");
					jsonObj.outcome='Win';
					win=win+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'lizard':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: lizard <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Tie';
					tie=tie+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
				}
    
		} else {
			console.log("[405] " + req.method + " to " + req.url);
			res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
			res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
	}  
	break;
  
  case '/play/spock':
      if (req.method == 'POST') {
			console.log("[200] " + req.method + " to " + req.url);
      
			  console.log("request received");
				string = choices[Math.floor(Math.random()*choices.length)];
				console.log("string '" + string + "' chosen");
				res.writeHead(200, "OK", {'Content-Type': 'application/json; charset=utf-8'}); 
				switch(string){
			
					case 'rock':
					case 'scissors':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: spock <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Win';
					win=win+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'paper':
					case 'lizard':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: spock <br/> The Server chose: " + string + "</h3>");
					jsonObj.outcome='Lose';
					lose=lose+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
					
					case 'spock':
					//res.write("<html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8' /></head><body><h3>The User chose: spock <br/> The Server chose: " + string + " </h3>");
					jsonObj.outcome='Tie';
					tie=tie+1;
					jsonObj.wins=win;
					jsonObj.loses=lose;
					jsonObj.ties=tie;
					console.log(jsonObj);
					res.write(JSON.stringify(jsonObj));
					//res.write("</body></html>");
					res.end();
					break;
				}
	} else {
			console.log("[405] " + req.method + " to " + req.url);
			res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
			res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
		}  
	break;
	
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  }
}).listen(3000);
var address= server.address();
console.log("Game is running at http://localhost:" + address.port + "/");