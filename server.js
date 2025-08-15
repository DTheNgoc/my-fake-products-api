const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Bật CORS cho mọi domain (hoặc giới hạn theo domain của bạn)
server.use(cors({
  origin: ['https://demo-restful-api-thngeoc.vercel.app'], // Domain frontend của bạn
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

server.use(middlewares);
server.use(router);

// Render sẽ lấy PORT từ biến môi trường
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
