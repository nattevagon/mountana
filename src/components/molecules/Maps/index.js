import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet's CSS for styling

export default function Maps() {
  const [lat, setLat] = useState(false);
  const [lng, setLng] = useState(false);

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      setLat(lat)
      setLng(lng)

      console.log(lat, lng)
    })
  });

  if(lat && lng) {
    return (
      <MapContainer
        className='rounded-xl z-0'
        center={[parseFloat(lat), parseFloat(lng)]}
        zoom={13}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    )
  }
}
