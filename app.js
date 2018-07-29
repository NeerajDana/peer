var express  = requrie('express')
var path = require('path')
var https = require('http')
var errorhandler = require('errorhandler')
var cors = require('cors')
var ExpressPeerServer = require('peer').ExpressPeerServer

var option = {
    debug : true ,
    key: 'codeshow'
}
var app = express()
var server = http.createServer(app);

var port = process.env.PORT || '3000';

app.set('port' , port)

app.use(cors());
app.use(express.static(path.join(__dirname , 'public')));
app.use('/peerjs' , ExpressPeerServer(server , option));
app.use(errorhandler());

process.on('uncaughtException' , function(exc){
    console.error(exc);
})

server.listen(port);
