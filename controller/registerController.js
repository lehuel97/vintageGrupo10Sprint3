let productos = require('../data/datosProductos')

let registroController = {

    leerTodos: function() {
        return productos
    }
}

module.exports = registroController