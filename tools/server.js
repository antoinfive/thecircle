import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import open from 'open';  
import favicon from 'serve-favicon';
import { Server } from 'http'
import socket from 'socket.io'

/* eslint-disable no-console */

const port = 8000;  
const app = express();  
const server = Server(app)
const compiler = webpack(config);
const io = socket(server)

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

io.on('connection', (socket) => {
  console.log('a user connected') 
  socket.on('disconnect', () =>{
    console.log('a user disconnected')
  })

  socket.on('chat message', (message) => {
    console.log('MESSAGE!!!!', message)
    io.emit('chat message', message)
  })
  
  socket.on('like update', (id) => {
    console.log(id)
    io.emit('like update', id)
  })
})

app.get('*', function(req, res) {  
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

server.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
