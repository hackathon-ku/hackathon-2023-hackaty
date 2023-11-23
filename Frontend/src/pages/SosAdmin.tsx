import React, { useEffect, useState } from 'react';
import Map_data from '../data/mapData';
import Fullmap from '../components/FullMap';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import { Button, Modal, Typography } from 'antd';
import { MapBoxDetailAdmin } from '../components/MapBoxDetail/MapBoxDetail';
import Write from '../assets/images/admin_page/write.svg';
import Filter from '../assets/images/admin_page/filter.svg';
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
      <div style={{width: '68vw'}}>
        <div style={{height: '24.5vh', textAlign: 'center'}} className='sos-alert-center-title'>
          <Typography.Title level={2} style={{paddingTop: '4.8vh'}}>
            KU SOS ALERT CENTER
          </Typography.Title>
        </div>
        <Modal 
          open={true} 
          closable={false}
          footer={null}
          width={651}
          mask={false}
          style={{top: 100, left: -220, height: '200px'}}
        >
          <div style={{display: 'grid', gap: '48px'}} >
            <div>
              <p>Unauthorized Reports</p>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography.Title level={3}>
                  28
                </Typography.Title>
                <Typography>report</Typography>
              </div>
            </div>
            <div><p>Top Report Tags</p></div>
            <div><p>Top Support Report</p></div>
          </div>
        </Modal>
        <div style={{width: '70vw'}}>
          {location ? (
            <Fullmap
              location={location}
              setLocation={setLocation}
              setSelected={setSelected}
              mapData={Map_data}
              isStatus={true}
              width={'68vw'}
              height={'75.3vh'}
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>Loading</div>
          )}
          {/* <MapBoxDetail selected={selected} /> */}
        </div>
      </div>
      <div style={{background: "#F5F5F5", width: '58.3pw'}}>
        <div style={{display: 'flex', width: '420px', gap: '16px', padding: '35px 0px 35px 0px', marginLeft: '40px'}}>
            <Button style={{
              display: 'flex', 
              backgroundColor: '#277875', 
              border: '1px solid #277875',
              padding: '6.4px 15px',
            }}
              size='large'
            >
              <div style={{gap: '10px', display: 'flex', alignItems: 'center'}}>
                <img src={Write} alt="" style={{marginBottom: '6.4px'}} />
                <Typography.Title level={5} style={{color: 'white'}}>สร้างคำแจ้งเตือน</Typography.Title>
              </div>
            </Button>
            <Button 
              style={{
                display: 'flex', 
                border: '1px solid #D9D9D9',
                padding: '6.4px 15px',
              }}
              size='large'
            >
              <div style={{gap: '10px', display: 'flex', alignItems: 'center'}}>
                <img src={Filter} alt="" style={{marginBottom: '6.4px'}} />
                <Typography.Title level={5}>Filter</Typography.Title>
              </div>
            </Button>
        </div>
        <div style={{gap: '2vh', overflowY: 'scroll', height: '78vh', padding: '2vw'}}>
          {Map_data.map((data) => {
            return <MapBoxDetailAdmin data={data}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default SosAdmin;
