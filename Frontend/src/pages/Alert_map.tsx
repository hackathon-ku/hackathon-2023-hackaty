import React, { useEffect, useState } from 'react'
import Fullmap from '../component/FullMap';
import Map_data from '../data/MapData';


// import { CoordinateProps } from '../interface_map/interface_map';
// import Fullmap from '../component/Fullmap.tsx'


function Alert_map() {
    console.log(Map_data)
    const [location, setLocation] = useState<any>(null);
    const [selected, setSelected] = useState<any>(null);
    console.log(selected)
    console.log(location)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("fkeofkeogfkepfkepfkepf >> ", position.coords.latitude, position.coords.longitude);
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        })
    }, []);


    return (
        <div style={{ position: "relative" }}>{location ?
            (<Fullmap location={location} setLocation={setLocation} setSelected={setSelected} />) :

            (<div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>Loading</div>)}
            <div style={{ position: "absolute", top: "70%", left: "0", width: "100%", height: "30%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", border: "#C3D4E2 solid" }}>
                {selected ? (selected.m_id) : (null)}</div>

        </div>
    )
}

export default Alert_map
