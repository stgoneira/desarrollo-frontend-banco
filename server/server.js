const fastify = require('fastify')({ logger: true });
fastify.register(require('@fastify/cors'), {});

fastify.get('/', async (request, reply) => {
  return { api: 'Proyecto Frontend Banco 2023' };
});

fastify.route({
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    url: '/contacto',
    handler: require('./src/contacto')
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
};
start();