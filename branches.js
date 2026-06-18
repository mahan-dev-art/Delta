const map = L.map('map').setView([35.6892, 51.3890], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

const branches = [
  {
    name: "شعبه مرکزی",
    lat: 35.53589005238011,
    lng: 51.40505967236182,
    address: "GCP4+927، باقرشهر، ایران"
  },
  {
    name: "شعبه غرب",
    lat: 35.6642857584145,
    lng: 51.355602634505026,
    address: "تهران - غرب"
  }
];

branches.forEach(b => {
  L.marker([b.lat, b.lng])
    .addTo(map)
    .bindPopup(`
      <b>${b.name}</b><br>
      ${b.address}
    `);
});