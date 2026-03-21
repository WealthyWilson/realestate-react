import React, { useEffect } from 'react';
import L from 'leaflet';

// Fix for default markers in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
});

const LocationSection = () => {
  useEffect(() => {
    // Initialize the map centered on Liberia
    const map = L.map('liberia-map').setView([6.4281, -9.4295], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // List of Liberia's counties with their coordinates
    const counties = [
      { name: "Bomi", coords: [6.88, -10.83] },
      { name: "Bong", coords: [7.0, -9.5] },
      { name: "Gbarpolu", coords: [7.70, -10.53] },
      { name: "Grand Bassa", coords: [6.31, -9.58] },
      { name: "Grand Cape Mount", coords: [6.75, -11.0] },
      { name: "Grand Gedeh", coords: [5.89, -8.21] },
      { name: "Grand Kru", coords: [4.81, -8.22] },
      { name: "Lofa", coords: [8.35, -9.75] },
      { name: "Margibi", coords: [6.53, -10.21] },
      { name: "Maryland", coords: [4.72, -7.73] },
      { name: "Montserrado", coords: [6.40, -10.80] },
      { name: "Nimba", coords: [7.5, -8.68] },
      { name: "River Cess", coords: [5.95, -9.58] },
      { name: "River Gee", coords: [5.20, -8.15] },
      { name: "Sinoe", coords: [5.50, -9.00] }
    ];

    // Add markers for each county
    counties.forEach(function(county) {
      L.marker(county.coords)
        .addTo(map)
        .bindPopup("<b>" + county.name + " County</b>");
    });

    // Cleanup function to remove map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="flat-section flat-location-v2">
      <div className="container">
        <div className="box-title text-center">
          <h3 className="title mt-4">Our Location For You in Liberia</h3>
        </div>
        <div id="liberia-map" style={{ width: '100%', height: '500px', borderRadius: '10px' }}></div>
      </div>
    </section>
  );
};

export default LocationSection;