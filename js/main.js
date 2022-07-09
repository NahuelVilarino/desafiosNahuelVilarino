
const productos = [
	{ id: "0", tipo: "monitor", modelo: "SAMSUNG MONITOR CURVO 24 FULLHD", precio: 250, img: "assets/images/samsungmonitor.jpg" },
	{ id: "1", tipo: "monitor", modelo: "LG MONITOR ULTRAGEAR™ 23.6", precio: 225, img: "assets/images/LG-monitor.jpg" },
	{ id: "2", tipo: "Joystick", modelo: "DUALSHOCK PS4", precio: 85, img: "assets/images/dualshock-ps4.jpg" },
	{ id: "3", tipo: "consola", modelo: "PLAYSTATION 5", precio: 1300, img: "assets/images/ps5.jpg" },
	{ id: "4", tipo: "Mouse", modelo: "MOUSE LOGITECH PRO SERIES G PRO HERO", precio: 45, img: "assets/images/logitech-g-pro.jpg" },
	{ id: "5", tipo: "Mouse", modelo: "LOGITECH G SERIES LIGHTSPEED G502", precio: 116, img: "assets/images/logitech-g502.jpg" },
	{ id: "6", tipo: "consola", modelo: "NINTENDO SWITCH", precio: 570, img: "assets/images/n-switch.jpg" },
  ];

const contenedorTienda = document.getElementById("contenedorTienda");

for (const producto of productos) {
    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('h3');


    divProducto.className = "card";
    imgProducto.className = "card-img-top";
    nombreProducto.className = "nombre-producto";
    precioProducto.className = "card-precio";
   


    divProducto.id = producto.id;
    imgProducto.src = producto.img;
    nombreProducto.append(producto.modelo);
    precioProducto.append(`$${producto.precio}`);
   

    
    divProducto.append(imgProducto, nombreProducto, precioProducto);

  
    contenedorTienda.append(divProducto);
}

let financiar = document.getElementById ("formulario");
financiar.addEventListener ("submit",validarConsulta);

function validarConsulta (e) {
    e.preventDefault();
    console.log("Datos enviados");
}
let financiar2 = document.getElementById ("formulario");
financiar.addEventListener ("submit",calcularRecargo);

function calcularRecargo () {
    if  (document.getElementById("costo").value === 250||225||85||1300||45||116||570 ) {
        let financiacionesConsultadas = "El producto se financia con un recargo de 10% en " + document.getElementById("cuotas").value + " cuotas de U$S" + Math.ceil(document.getElementById("costo").value*1.10/document.getElementById("cuotas").value);   
        localStorage.setItem("productosConsultados",financiacionesConsultadas)    
    }else {
        alert("Ingrese un valor valido")
    }

}




