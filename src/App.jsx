import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

const position = [52.4967277, 13.4401145]

function App() {
  return (
    <>
      <h1>dlab</h1>
      <div className="card">
        <MapContainer 
          center={position} 
          zoom={13} 
          style={{ height: '400px', width: '400px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              dlab location
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default App

