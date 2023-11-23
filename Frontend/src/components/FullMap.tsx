import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "./FullMap.css";
import Map_data from '../data/mapData';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
// import { CoordinateProps, MapDataLocationProps } from '../pages/Alert_map';


const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

function toggleHighlight(markerView: any, property: MapDataLocationProps) {
    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 1;
    }
}


function buildContent(data: MapDataLocationProps) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
    <div class="icon">
    
  </div>
  <div class="details">
    <div class="price">${data.desci}</div>
    <div class="address">${data._id}</div>
    <div class="features">
      <div>
        <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
        <span class="fa-sr-only">Status</span>
        <span>${data.Status}</span>
      </div>
      <div>
        <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
        <span class="fa-sr-only">Priority</span>
        <span>${data.Priority}</span>
      </div>
      <div>
        <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
        <span class="fa-sr-only">vote_score</span>
        <span>${data.vote_score} ft<sup>2</sup></span>
      </div>
    </div>
  </div>
`

    return content;
}
const Fullmap = ({ location, setLocation, setSelected, mapData, isStatus, width, height }: {
    location: CoordinateProps,
    setLocation: React.Dispatch<React.SetStateAction<CoordinateProps | null>>,
    setSelected: React.Dispatch<React.SetStateAction<MapDataLocationProps | null>>,
    mapData: MapDataLocationProps[],
    isStatus: boolean,
    width: string,
    height: string,

}) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    useEffect(() => {
        const loadMap = async () => {
            if (!mapRef.current) return;
            const initializedMap = new Map(mapRef.current, {
                zoom: 18,
                center: location,
                mapId: 'DEMO_MAP_ID',
            });

            new AdvancedMarkerElement({
                map: initializedMap,
                position: location,
                title: 'Uluru'
            });

            //marker
            mapData?.map((data, index) => {
                console.log(data)
                const marker = new AdvancedMarkerElement({
                    map: initializedMap,
                    position: { lat: data.lat, lng: data.lon },
                    title: data.desci,
                    content: buildContent(data),
                });

                // Add a click listener to each marker instance
                marker.addListener("click", () => {
                    { isStatus ? toggleHighlight(marker, data) : null }
                    setSelected(data);
                    console.log(data)

                });
            });

            setMap(initializedMap); // update map state
        };

        loadMap();
    }, [location, setLocation]);

    return <div ref={mapRef} style={{ width: width, height: height }} />;
};

export default Fullmap;



