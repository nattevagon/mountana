import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet"s CSS for styling

export default function Maps(props) {
  if(props.lat && props.lng) {
    return (
      <MapContainer
        className="rounded-xl z-0"
        center={[parseFloat(props.lat), parseFloat(props.lng)]}
        zoom={props.zoom}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
      </MapContainer>
    )
  }
}
