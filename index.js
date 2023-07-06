const express = require('express')

const app = express();

app.use('/', (req, res, next)=> {
    req.user = 'Thibaut'
    console.log('Je suis dans le MiddleWare !')
    next()
})

app.use((httpRequest, httpResponse, next) => {
    console.log('Je suis dans un autre middleware ', httpRequest.user)
    httpResponse.send('<p>Hello, it\'s me, ', httpRequest.user, '</p>')

})

app.listen(3000);