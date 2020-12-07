const cart = require('../scripts/cart')

module.exports = function(app) {

  //Backend

  app.post("/addProduct", function(req, res) {
    cart.addProduct(req, function(result) {
      res.send(result);
    });
  });

  app.post("/removeProduct", function(req, res) {
    cart.removeProduct(req, function(result) {
      res.send(result);
    })
  });

  app.get("/obtainProducts", function(req, res) {
    cart.getProducts(req, function(result) {
      res.send(result);
    });
  });

  //Frontend

  app.get("/", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("inicio", cart);
  });

  app.get("/cart", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("cart", cart);
  });

  app.get("/contacto", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("contacto", cart);
  });

  app.get("/tienda", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("tienda", cart);
  });

  app.get("/producto1", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto1", cart);
  });

  app.get("/producto2", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto2", cart);
  });

  app.get("/producto3", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto3", cart);
  });

  app.get("/producto4", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto4", cart);
  });

  app.get("/producto5", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto5", cart);
  });

  app.get("/producto6", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto6", cart);
  });

  app.get("/producto7", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto7", cart);
  });

  app.get("/producto8", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto8", cart);
  });
  
  app.get("/producto9", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto9", cart);
  });

  app.get("/producto10", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto10", cart);
  });

  app.get("/producto11", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto11", cart);
  });

  app.get("/producto12", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto12", cart);
  });

  app.get("/producto13", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto13", cart);
  });
  
  app.get("/producto14", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto14", cart);
  });

  app.get("/producto15", function(req, res) {
    const session = checkCart(req.session);
    const cart = session.cart
    res.render("producto15", cart);
  });

}

const checkCart = function(session) {
  var cart = session.cart;
  if(cart === undefined) {
    cart = {products: [], total: 0};
    session.cart = cart;
  }
  return session;
}