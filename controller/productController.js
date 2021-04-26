let productos = require('../data/datosProductos')

let productController = {

    index: (req,res) => {
        res.render('detail-product')
    }
}

module.exports = productController