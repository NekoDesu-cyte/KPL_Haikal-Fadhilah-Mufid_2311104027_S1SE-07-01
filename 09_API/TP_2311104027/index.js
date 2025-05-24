const express = require('express');
const cors = require('cors');
const MahasiswaRouter = require('./Mahasiswa');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');

const server = express();
const port = 8080;

server.use(cors());
server.use(express.json());

server.use('/api/Mahasiswa', MahasiswaRouter);

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.listen(port, () => {
  console.log(`Server aktif di http://localhost:${port}`);
  console.log(`Dokumentasi tersedia di http://localhost:${port}/docs`);
});
