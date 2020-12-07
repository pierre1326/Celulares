function removeProduct(product) {
  const data = {name: product}
  $.ajax({
    type: "POST",
    url: "/removeProduct",
    async: false,
    data: data,
    success: function(response) {
      window.location.replace('/cart');
    }
  });
}