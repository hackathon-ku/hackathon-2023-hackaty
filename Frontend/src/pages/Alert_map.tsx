import { useEffect, useState } from 'react';
import Map_data from '../data/mapData';
import MapBoxDetail from '../components/MapBoxDetail/MapBoxDetail';
import StudentLayout from '../modules/common/StudentLayout';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import Fullmap from '../components/FullMap';

function Alert_map() {
    console.log(Map_data);
    const [location, setLocation] = useState<CoordinateProps | null>(null);
    const [selected, setSelected] = useState<MapDataLocationProps | null>(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
        if (!selected) {
            setSelected(Map_data[0])
        }
    }, []);


    return (
        <StudentLayout>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                {location ? (
                    <Fullmap
                        location={location}
                        setLocation={setLocation}
                        setSelected={setSelected}
                        mapData={Map_data}
                        isStatus={true}
                    />
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>Loading</div>
                )}
                <MapBoxDetail selected={selected} />
            </div>
        </StudentLayout>
    );
}

export default Alert_map;
