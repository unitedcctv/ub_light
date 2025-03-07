import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './App.css'
import markerIcon from './assets/ub_dark.png'
import logo from './assets/ub_logo.png'

const position = [52.4969000, 13.4403000]

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [72, 72],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
})

function App() {
  return (
    <>
      <h1>Urban Barnacle</h1>
      <img src={logo} alt="Urban Barnacle Logo" style={{ width: '800px', height: '800px' }} />
      <h2>Coming Soon</h2>
      <div className="card">
        <MapContainer 
          center={position} 
          zoom={13} 
          style={{ height: '800px', width: '800px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup className="light-text">
              Urban Barnacle, combating throwaway furniture.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default App

