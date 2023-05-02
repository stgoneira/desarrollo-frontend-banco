const fastify = require('fastify')({ logger: true });
fastify.register(require('@fastify/cors'), {});

fastify.get('/', async (request, reply) => {
  let mensaje = 'Proyecto Frontend Banco 2023';  
  if (process.env.NODE_ENV === 'production') {
    mensaje += ' | PROD'
  } else {
    mensaje += ' | DEV'
  } 
  return { api: mensaje };
});
/* SETUP */
fastify.get('/setup', require('./src/setup'));
/* USUARIO */
fastify.get('/usuario/:id', require('./src/usuario-id'));
fastify.post('/usuario/login', require('./src/usuario-login'));
fastify.route({
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  url: '/usuario',
  handler: require('./src/usuario')
});
/* CONTACTO */
fastify.route({
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    url: '/contacto',
    handler: require('./src/contacto')
});
fastify.get('/contacto/:id', require('./src/contacto-id'));
/* CATEGORIA */
fastify.route({
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  url: '/categoria',
  handler: require('./src/categoria')
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