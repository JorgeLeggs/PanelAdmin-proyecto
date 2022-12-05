

//---------------------------------//
//let map = L.map('map').setView([23.069920, -109.705733],16)
let marker = null;
let markerinicio= null;
let markerfinal= null;


const iconoBASE = L.icon({
  iconUrl: './recursos/icono/base.png',
  
  iconAnchor: [17, 34],
 
});


const iconoCAMION = L.icon({
  iconUrl: './recursos/icono/camion.png',
  iconAnchor: [17, 34],
});




//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);






const buses = [
  {
    id: "M21",
    model: "1998",
    brand: "Freighliner",
    ruta: "C1",
    color: "Amarillo",
    engine: "Cuminis",
    estado: "Activo",
    lastLocation: "23.069920, -109.705733"
     
  },

  {
    id: "M22",
    model: "1992",
    brand: "Freighliner 2",
    ruta: "U2",
    color: "Rojo",
    engine: "Cuminis 2",
    estado: "No-active",
    lastLocation: "23.093278, -109.727248"
  },

  {
    id: "M23",
    model: "2001",
    brand: "Freighliner 3",
    ruta: "C3",
    color: "Verde",
    engine: "Cuminis 2.0",
    estado: "Mantenimiento",
    lastLocation: "23.058910, -109.695189"
  },

  {
    id: "M24",
    model: "2003",
    brand: "Freighliner 3",
    ruta: "U4",
    color: "Blanco",
    engine: "Cuminis 3.0",
    estado: "Fuera de servicio",
    lastLocation: "23.044644, -109.699083"
  },

  {
    id: "M25",
    model: "2004",
    brand: "Freighliner 4",
    ruta: "U5",
    color: "Blanco",
    engine: "Cuminis 3.0",
    estado: "Activo",
    lastLocation: "23.076604, -109.706763"
  },
];
const $selectunidad = document.getElementById("selectunidad");
const $lblinfo = document.getElementById("lblinfo");
/*
// Esto se ejecutará una vez que se cargue el HTML
addEventListener("DOMContentLoaded", () => {
  buses.forEach((bus) => {
    let opt = document.createElement("option");
    opt.value = bus.id;
    opt.innerHTML = bus.id; // lo que quieres que se muestre
    $selectunidad.appendChild(opt);
  });
});


$selectunidad.addEventListener("change", (e) => {
  const idSelected = e.target.options[e.target.selectedIndex].value;
  const busFound = buses.find((item) => item.id === idSelected);

  // esta parte es solo para mostrar todo de golpe
  
  //const busString = JSON.stringify(busFound, null, 2);
  //$lblinfo.innerHTML = busString;
  
  
  // podrías hacerlo de la siguiente manera
  const moreInfo = `
  <table cellpadding="20">
  <tr>
  <td>Id: <td>
  <td>${busFound.id} <td>
  </tr>
  <tr>
  <td>Model: <td>
  <td>${busFound.model} <td>
  </tr>
  <tr>
  <td>Marca: <td>
  <td>${busFound.brand} <td>
  </tr>
  <tr>
  <td>Ruta: <td>
  <td>${busFound.ruta} <td>
  </tr>
  <tr>
  <td>Motor: <td>
  <td>${busFound.engine} <td>
  </tr>
  <tr>
  <td>Color: <td>
  <td>${busFound.color} <td>
  </tr>
  <tr>
  <td>Estado: <td>
  <td>${busFound.estado} <td>
  </tr>
  <tr>
  <td>Ubicacion: <td>
  <td>${busFound.lastLocation} <td>
  </tr>

  </table>
  
});
  `
*/



/*
  document.getElementById('selectunidad').addEventListener('click',function(e){
    if(marker) marker.remove()
    
      drawroute();
      
      let coords = busFound.lastLocation.split(",");
      map.flyTo(coords,16);
      marker = L.marker(coords , {icon: iconoCAMION})
      .bindPopup(coords).addTo(map);
      console.log("si llegué");
    
  })
  
  $lblinfo.innerHTML = moreInfo;
  
 
*/
//const marker = L.marker([coords]).addTo(map);



/*
const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});
overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});

*/
/*
function drawroute(){
  
    C1 = [
      [23.058955, -109.694999],
      [23.055861, -109.694556],
      [23.054087, -109.703536],
      [23.061349, -109.704006],
      [23.063578, -109.702463],
      [23.069867, -109.705073],
      [23.072297, -109.705215],
      [23.078638, -109.707602],
      [23.090644, -109.707260],
      [23.092949, -109.708787],
      [23.095718, -109.709482],
      [23.095128, -109.712605],
      [23.101888, -109.713568],
      [23.100607, -109.724033],
      [23.105638, -109.724834],
      [23.106431, -109.724777],
      [23.106181, -109.726883],
      [23.106225, -109.726985],
      [23.106141, -109.727755],
      [23.105699, -109.728259],
      [23.105096, -109.732830],
      [23.097669, -109.731720],
      [23.097974, -109.729388],
      [23.103841, -109.730378],
      [23.104165, -109.728052],
      [23.104165, -109.728052],
      [23.100176, -109.727508],
      [23.100345, -109.726040],
      [23.096953, -109.725696],
      [23.095011, -109.727111],
      [23.093231, -109.727266]
    
    ]



    L.polyline(C1, {color: "#ff0000", weight: 4}).addTo(map);
    map.fitBounds(C1);
  
    if(markerinicio) markerfinal.remove()
      
     
    markerinicio = L.marker(C1[0], {icon: iconoBASE})
    .bindPopup(C1[0]).addTo(map);
    markerfinal = L.marker(C1[30], {icon: iconoBASE})
    .bindPopup(C1[30]).addTo(map);
    console.log("si llegué");


  }

*/






