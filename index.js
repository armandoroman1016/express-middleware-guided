const server = require('./server.js')

const port = 5000

server.listen(port, () => console.log(`\nServer is listening on port ${port}\n`))

