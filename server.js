const express = require('express')
const app = express()
const routes = require('./route');

app.use(routes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})