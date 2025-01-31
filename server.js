const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Habilita o CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permite acesso de qualquer origem
  res.header('Access-Control-Allow-Headers', '*'); // Permite todos os cabeçalhos
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Permite todos os métodos HTTP
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
