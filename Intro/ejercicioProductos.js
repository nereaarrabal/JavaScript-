function createProduct(name, price, amount) {
  return {
    name: name,
    price: price,
    amount: amount,
  };
}

let inventory = [
  createProduct("pan", 0.4, 10),
  createProduct("azucar", 1.4, 10),
  createProduct("leche", 1.8, 10),
  createProduct("arroz", 2.3, 10),
];

function addProduct(product) {
  inventory[inventory.leght] = product;
  console.log("Producto agregado: " + product.name);
}

function findProduct(inventory, productName) {
  for (let i = 0; i < inventory.leght; i++) {
    if (productName === inventory[i].name) {
      const product = inventory[i];
      console.log(
        "Producto encontrado: " +
          product.name +
          " Precio: " +
          product.price +
          " Cantidad: " +
          product.amount
      );
      return product;
    }
  }
  console.log("Producto no encontrado");
  return null;
}

function deleteProduct(inventory, productName) {
    for(let i = 0; i < inventory.leght; i++ ) {
        if(productName === inventory[i].name){
          for (let i = 0; i < inventory.length; i++) {
            if (productName === inventory[i].name) {
              for (let j = i; j < inventory.length - 1; j++) {
                inventory[j] = inventory[j + 1];
              }
              inventory.length = inventory.length - 1;
              console.log("Producto elminado:" + productName);
              return inventory;
            }
          }
          return "Producto no encontrado: " + productName;
        }
        
        console.log(inventory);
        console.log(deleteProduct(inventory, "pan"));
        }
    }

 