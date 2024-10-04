import Fastify from 'fastify';
import { BingoController } from './controller/BingoController';

const server = Fastify();
const bingoController = new BingoController();

server.get('/', () => {
  return bingoController.getBingo();
});

export default server;