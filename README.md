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
// 📅 Verificar fecha (24 de diciembre)
const today = new Date();
const isDec24 =
  today.getMonth() === 11 && // Diciembre (0-based)
  today.getDate() === 24;

if (!isDec24) {
  console.log('Ruta inactiva. Solo disponible el 24 de diciembre 🎄');
} else {

  // Crear mapa
  const map = L.map('map').setView([0, 0], 2);

  // Tiles gratis
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  // Icono imagen
  const icon = L.icon({
    iconUrl: 'tracker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 24]
  });

  let marker;

  // Obtener ruta desde el LINK
  fetch('https://domain-api.route.org/route/v1/builder')
    .then(res => res.json())
    .then(data => {

      // Ajusta la key si tu API usa otro nombre
      const route = data.route;

      // Dibujar ruta
      L.polyline(route, { weight: 4 }).addTo(map);

      // Ajustar vista
      map.fitBounds(route);

      // Marker inicial
      marker = L.marker(route[0], { icon }).addTo(map);

      // Animación
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
}
```
Note: Your API Key website must have a map of each city (data/Google Maps type, such as JSON), otherwise it will just show a Santa Claus moving along a transparent route without any context.

`console.error` is the error from your HTML/CSS/JS/React/Vite/Git/TS/TSX editor console.

# 2. Games & Or Funny
When We Start A Tracker We Expected Make It The Santa Way, Only December 24 But The Difference Is The Funny thing.
Make A Game With A `Youtube Games HTML CSS JS Tutorial's` We Will Work Not Anymore On Scenes, Now On Games.
```
Games Scene ⚃️:
Search A Funny Game With Some Tutorial's But The Button's functions and css.
Games HTML:
<button href="YOUR_GAME_FILE.html" class="GAME_BUTTON_NAME">YOUR_GAME_TITLE_BUTTON</button>
Games CSS:
.GAME_BUTTON_NAME{
  color: white;
  background: COLOR_NAME;
  border-radius: 10px;
  padding: 10px 20px;
}
```
We End This Tutorial With The First TimerCode 
Tutorial Seasson.
