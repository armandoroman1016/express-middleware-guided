const express = require('express')
const productsRouter = require('./products/products_router')
const suppliersRoutes = require('./suppliers/suppliers_router')
const server = express()

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRoutes)

server.get('/', (req, res) => {
    res.status(200).json({message: 'welcome'})
})


module.exports = server