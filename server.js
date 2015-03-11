///////////////////////////////////////////////////
///---Chrome Extension to Arduino---///////////////
///---Adapted from code by Tom Igoe---/////////////
///////////////////////////////////////////////////

var express = require('express')
var app = express()

var serialport = require("serialport"),	
	SerialPort  = serialport.SerialPort,	
	portName = process.argv[2];				
	var brightness = 0;


var myPort = new SerialPort(portName, { 
	baudRate: 9600,
	parser: serialport.parsers.readline('\r\n')
});
 
myPort.on('open', listen);			
myPort.on('close', closePort);	
myPort.on('error', serialError);	


var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)

})

function listen() {
	console.log('port open');
	console.log('baud rate: ' + myPort.options.baudRate);
	
	app.get('/', function (req, res) {
		console.log("got request");
		sendData();
		res.end();
	})		
}


function sendData() {
	var serialOut = 'y';
	myPort.write(serialOut);
	console.log("Sending '" + serialOut + "' out the serial port");
	}


function closePort() {
	console.log('port closed');
}

function serialError(error) {
	console.log('there was an error with the serial port: ' + error);
	myPort.close();
}
