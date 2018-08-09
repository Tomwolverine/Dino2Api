const express = require('express')
const app = express()
const port = 9000

app.get( '/',  (request, response, next) => {
    return response.render('<h1>dino</h1>')

})

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})