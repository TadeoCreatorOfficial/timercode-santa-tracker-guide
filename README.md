# Santa Tracker Guide
You will learn how to make a similar
tracker to the timercode web, learn with TimerCode Help.
We Will Learn And Resolve Questions.
# 1. How To Install The Tracker?
Santa Tracker Are Used To Be A Festive Tradition Company,
Some Company's Of Goverment Like NORAD Makes It To,
Make Some Money And Smiles. Child Loves It Google Use Google Santa Tracker A Project To Simulate. But TimerCode Not Simulation A Fake Santa tracker, it makes it real.
We Will Learn How To Make A Similar Real Tracker Like timercode web, With TimerCode Help.
We will learn the `<head>`:
```
Installer Pack Of Tracker 🔎🚙:
Pack 1:
Scenes:
The Scene body is:
Tracker:
<img src="YOUR_SANTA_IMAGE.png/jpg" style="width:120px;" class="X-route-follow" id="A-route-follow">
Js/Javascript 🎅:
// Crear mapa
const map = L.map('map').setView([0, 0], 2);

// Tiles gratis
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Icono imagen
const icon = L.icon({
  iconUrl: 'YOUR_SANTA_IMAGE.png/jpg', // tu imagen
  iconSize: [48, 48],
  iconAnchor: [24, 24]
});

// Marker vacío (se inicializa después)
let marker;

// Pedir ruta desde el LINK
fetch('https://TU_API_KEY_WEB.com/org/net/v1/builder/structure/')
  .then(res => res.json())
  .then(data => {

    // 👇 AJUSTA ESTO según tu API
    // Ejemplo esperado: data.route = [[lat,lng], [lat,lng], ...]
    const route = data.route;

    // Dibujar ruta
    L.polyline(route, { weight: 4 }).addTo(map);

    // Centrar mapa
    map.fitBounds(route);

    // Crear marker en el inicio
    marker = L.marker(route[0], { icon }).addTo(map);

    // Animar siguiendo la ruta
    let i = 0;
    setInterval(() => {
      if (i >= route.length) return;
      marker.setLatLng(route[i]);
      i++;
    }, 1000);

  })
  .catch(err => {
    console.error('Error cargando ruta:', err);
  });
```
Ojo Tu Web De La Api Key Debe Tener Un Mapa De Cada Ciudad data/tipo Google maps, 
como json, si no solo mostrará un Santa moviendo en una ruta transparente si saber nada.
`console.error` es el error de tu consola de editor de html/css/js/react/vite/git/ts/tsx 
