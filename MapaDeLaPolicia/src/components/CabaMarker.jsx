import React, { useState, useEffect } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { Marker } from 'react-map-gl/maplibre';

const tipoViolenciaStyles = {
  t1: 'amarillo',
  t2: 'naranja',
  t3: 'rojo',
};


export const CabaMarker = ({ violenciasData, setScreenInfo, setMarker, selected, tipoViolenciaFilters }) => {


    const renderViolenciaMarker = (event) => {
        const [isHovered, setIsHovered] = useState(false);
        const markerSize = isHovered ? 26 : 24;
        const id = event.title; // Cambié "1" a "event.title"
        const { coords, tipoViolencia, date } = event;
    
    
    

    const markerStyle = {
        selected: isHovered ? 'hovered' : '',
        color: tipoViolenciaStyles[tipoViolencia],
      };
  

    return (
      <Marker
        key={id}
        latitude={coords.latitude}
        longitude={coords.longitude}
        onMouseEnter={() => setIsHovered(id)}
        onMouseLeave={() => setIsHovered(null)}
        
      >
        <FaLocationPin className={markerStyle} size={markerSize} />
      </Marker>
    );
  };

  return (
    <>
      {violenciasData.map((event) => (
        renderViolenciaMarker(event)
      ))}
    </>
  );
};


