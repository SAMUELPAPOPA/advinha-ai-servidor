const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').Server(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  proxied: true
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.send('Servidor PeerJS do ADVINHA AÍ está online!');
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
