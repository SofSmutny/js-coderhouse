// barcito

alert('Bienvenidx a la cafeteria Mokka & Kuni');

class Recibo {
    constructor(producto, precio, cantidad ){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.total = 0,
        this.subTotal = 0
    }
    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }
    calcularIva() {
        return this.subTotal * 0.21;
    }
    calcularTotal() {
        this.total = this.subTotal + this.calcularIva();
    }
}

function hacerPedido() {

    let producto = 0;
    let precio = 0;
    let cantidadProducto = 0;

    while (!producto || producto == 0 || producto > 6){
        producto = parseInt(prompt('Que desea ordenar?:\n 1: Café $140\n 2: Capuccino $160\n 3: Chocolotada $120\n 4: Submarino $180\n 5: Té $120\n 6: Café Americano $150'));
    }

    switch(producto){
        case 1 :
            producto = "Café";
            precio = 140;
            break;
        case 2 :
            producto = "Capuccino";
            precio = 160;
            break;
        case 3 :
            producto = "Chocolotada";
            precio = 120;
            break;
        case 4 :
            producto = "Submarino";
            precio = 180;
            break;
        case 5 :
            producto = "Té";
            precio = 120;
            break;
        case 6 :
            producto = "Café Americano";
            precio = 150;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n\n Introduzca la cantidad deseada."));
    }
    const compra = new Recibo(producto, precio, cantidadProducto);

    return compra;
}

const pedido = hacerPedido();
console.log(pedido);

pedido.calcularSubTotal();
pedido.calcularTotal();

alert("Detalle del pedido:\n\n"+
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    "Total = $" + pedido.total
);