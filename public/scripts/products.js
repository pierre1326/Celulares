$("#photo").click(function() {
  var src = $("#photo").attr('src');
  const index = charIndex(src, "_");
  var value = parseInt(src.charAt(index + 1));
  if(value === 3) {
    value = 1;
  }
  else {
    value += 1;
  }
  src = updateString(src, index, value);
  $("#photo").attr('src', src);
})

$("#form").submit(function(e) {
  e.preventDefault();
});

function addProduct() {
  const name = $("#name").text();
  const quantity = parseInt($("#quantity").val());
  const price = parseInt($("#price").text());
  const data = {name: name, price: price, quantity: quantity}
  console.log(data);
  $.ajax({
    type: "POST",
    url: "/addProduct",
    async: false,
    data: data,
    success: function(response) {
      window.location.replace('/cart');
    }
  });
}

function updateString(string, index, value) {
  return string.substr(0, index) + '_' + value + '.jpg'
}

function charIndex(string, char) {
  var i, j 
  for(i = 0, j = string.length; i < j; ++ i) {
      if(string.charAt(i) === char) {
        return i;
      }
  }
  return -1;
}
