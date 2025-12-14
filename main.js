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
