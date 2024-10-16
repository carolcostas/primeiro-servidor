import fastify from 'fastify'

const servidor = fastify({
    logger: true
})




servidor.get('/teste', (req, res) => {
     return res.send('Olá, esse é o meu primeiro servidor')
})



servidor.listen({
    port: 3000
})