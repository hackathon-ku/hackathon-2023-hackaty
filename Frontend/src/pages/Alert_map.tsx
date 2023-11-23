import { useEffect, useState } from 'react';
import Map_data from '../data/mapData';
import MapBoxDetail from '../components/MapBoxDetail/MapBoxDetail';
import StudentLayout from '../modules/common/StudentLayout';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import Fullmap from '../components/FullMap';
import axios from 'axios';

function Alert_map() {
  useEffect(() => {
    // TODO Not find all
    axios.get('https://hackaty.onrender.com/api/report/find_all').then((res: any) => {
      console.log('This', res?.data?.message);
      setMapData(res?.data?.message);
    });
  }, []);
  console.log(Map_data);
  const [MapData, setMapData] = useState<MapDataLocationProps[]>([]);
  const [location, setLocation] = useState<CoordinateProps | null>(null);
  const [selected, setSelected] = useState<MapDataLocationProps | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
    // TODO Only Accepted
    axios.get('https://hackaty.onrender.com/api/report').then((res) => {});
  }, []);

  return (
    <StudentLayout>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {location ? (
          <Fullmap
            location={location}
            setLocation={setLocation}
            setSelected={setSelected}
            mapData={MapData}
            isStatus={false}
            width={'100vw'}
            height={'70vh'}
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
