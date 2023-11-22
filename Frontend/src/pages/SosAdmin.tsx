import React, { useEffect, useState } from 'react';
import Map_data from '../data/mapData';
import Fullmap from '../components/FullMap';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import { Typography } from 'antd';
import MapBoxDetail from '../components/MapBoxDetail/MapBoxDetail';
import '../pages/SosAdmin.css'


const SosAdmin = () => {
  const [location, setLocation] = useState<CoordinateProps | null>(null);
  const [selected, setSelected] = useState<MapDataLocationProps | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '70vw'}}>
        <div style={{height: '24.5vh', textAlign: 'center'}} className='sos-alert-center-title'>
          <Typography.Title level={2} style={{paddingTop: '4.8vh'}}>
            KU SOS ALERT CENTER
          </Typography.Title>
        </div>
        <div style={{width: '70vw'}}>
          {location ? (
            <Fullmap
              location={location}
              setLocation={setLocation}
              setSelected={setSelected}
              mapData={Map_data}
              isStatus={true}
              width={'70vw'}
              height={'70vh'}
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>Loading</div>
          )}
          {/* <MapBoxDetail selected={selected} /> */}
        </div>
      </div>
      <div style={{background: "#F5F5F5", width: '58.3pw', border: '1px solid black'}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla commodi blanditiis eius odit iusto at aspernatur deserunt sunt magnam quasi. Dolorem omnis nobis debitis modi architecto sint vel, consequatur fuga velit aliquid! Adipisci enim expedita, illum iure molestias totam rerum doloribus iusto temporibus ut in architecto, repellat, eos aperiam? Pariatur?</p>
      </div>
    </div>
  );
};

export default SosAdmin;
