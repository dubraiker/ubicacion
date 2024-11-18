let map, marker;

function initMap() {
  // Inicializar el mapa centrado en una ubicación por defecto.
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 15
  });

  // Crear un marcador en el mapa.
  marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    map: map
  });

  // Obtener ubicación en tiempo real.
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const newPos = { lat: latitude, lng: longitude };

      // Actualizar marcador y centrar mapa.
      marker.setPosition(newPos);
      map.setCenter(newPos);
    },
    (error) => console.error('Error al obtener la ubicación:', error),
    { enableHighAccuracy: true }
  );
}

initMap();