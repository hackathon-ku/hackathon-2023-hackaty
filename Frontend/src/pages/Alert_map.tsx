import React, { useEffect, useState } from 'react'
import Fullmap from '../component/FullMap';
import Map_data from '../data/mapData';
import MapBoxDetail from '../component/MapBoxDetail/MapBoxDetail';


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
        <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>{location ?
            (<Fullmap location={location} setLocation={setLocation} setSelected={setSelected} />) :

            (<div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>Loading</div>)}
            <MapBoxDetail selected={selected} />
        </div>
    )
}

export default Alert_map
