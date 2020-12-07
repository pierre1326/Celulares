module.exports = {

  addProduct : function(req, callback) {
    const session = checkCart(req.session);
    const body = req.body;
    const actualProduct = {name: body.name, price: parseInt(body.price), quantity: parseInt(body.quantity)};
    const products = session.cart.products;
    var found = false;
    for(const i in products) {
      const product = products[i];
      if(product.name === actualProduct.name) {
        product.quantity += actualProduct.quantity;
        found = true;
      }
    }
    if(!found) {
      products.push(actualProduct)
    }
    session.cart.products = products;
    session.cart.total += actualProduct.price * actualProduct.quantity;  
    callback({
      status: "Completado",
      mensaje: "Producto añadido con exito",
      productos: session.cart.products,
      total: session.cart.total
    });
  },

  removeProduct : function(req, callback) {
    const session = checkCart(req.session);
    const body = req.body;
    const products = session.cart.products;
    var index = -1;
    for(const i in products) {
      const product = products[i]
      if(product.name === body.name) {
        session.cart.total -= product.price * product.quantity;
        index = i;
        break;
      }
    }
    if(index !== -1) {
      products.splice(index, 1);
      session.cart.products = products;
    }
    callback({
      status: "Completado",
      mensaje: "Producto eliminado con exito",
      productos: session.cart.products,
      total: session.cart.total
    })
  },

  getProducts : function(req, callback) {
    const session = checkCart(req.session)
    callback({
      status: "Completado",
      mensaje: "Informacion enviada",
      productos: session.cart.products,
      total: session.cart.total
    })
  }

}

const checkCart = function(session) {
  var cart = session.cart;
  if(cart === undefined) {
    cart = {products: [], total: 0};
    session.cart = cart;
  }
  return session;
}