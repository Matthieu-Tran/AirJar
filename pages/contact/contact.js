function initMap() {
  const montblanc = { lat: 45.832376, lng: 6.865349 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: montblanc,
  });
  const marker = new google.maps.Marker({
    position: montblanc,
    map: map,
  });
}
