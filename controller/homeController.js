let products = require('../data/datosProductos')

let homeController = {

    leerTodos: (req, res) => {
        res.render('index', { 'products': products })
    }
    
}

module.exports = homeController