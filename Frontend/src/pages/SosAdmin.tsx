import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Map_data from '../data/mapData';
import Fullmap from '../components/FullMap';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import { Button, Card, Typography, Statistic, Row, Col, Divider } from 'antd';
import { MapBoxDetailAdmin } from '../components/MapBoxDetail/MapBoxDetail2';
import { PencilSimple } from '@phosphor-icons/react';
import Write from '../assets/images/admin_page/write.svg';
import Filter from '../assets/images/admin_page/filter.svg';
import '../pages/SosAdmin.css';
import ReportDetailed from '../components/ReportDetailed';
import MapDataBackend from '../data/data';

const SosAdmin = () => {
  const [location, setLocation] = useState<CoordinateProps | null>(null);
  const [selected, setSelected] = useState<MapDataLocationProps | null>(null);
  const [allReport, setAllReport] = useState([]);

  const getReport =  () => {
    axios.get(
      'https://hackaty.onrender.com/api/report/find_all'
    ).then(res => {
      console.log(res.data.message);
      setAllReport(res.data.message)
      console.log(allReport)
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      getReport()
    }, 4000);
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '68vw' }}>
        <div style={{ height: '24.5vh', textAlign: 'center' }} className="sos-alert-center-title">
          <Typography.Title level={2} style={{ paddingTop: '4.8vh' }}>
            KU SOS ALERT CENTER
          </Typography.Title>
        </div>
        <Card
          style={{
            position: 'fixed',
            left: '160px',
            zIndex: '10',
            top: '126px',
            height: '164px',
            width: '651px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Row>
            <Col>
              <Statistic
                title={'Unsuthorized Reports'}
                value={28}
                suffix={<p style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>report</p>}
              />
            </Col>
            <Divider type="vertical" style={{ marginLeft: '24px', marginRight: '24px', height: '116px' }} />
            <Col>
              <Statistic
                title={'Top Report Tags'}
                value={'น้ำท่วม 24'}
                suffix={<p style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>report</p>}
              />
              <div>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>การจราจรติดขัด 15, อุบัติเหตุ 7</p>
              </div>
            </Col>
            <Divider type="vertical" style={{ marginLeft: '24px', marginRight: '24px', height: '116px' }} />
            <Col>
              <Statistic
                title={'Top Support Report'}
                value={240}
                suffix={<p style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>Supports</p>}
              />
              <div>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>ประตู3</p>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>อยากให้ยามออก...</p>
              </div>
            </Col>
          </Row>
        </Card>
        <div style={{ width: '70vw' }}>
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
      <div style={{ background: '#F5F5F5', width: '58.3pw' }}>
        <div style={{ display: 'flex', width: '420px', gap: '16px', padding: '35px 2vw 0px 0px', marginLeft: '40px' }}>
          <Button
            style={{
              display: 'flex',
              backgroundColor: '#277875',
              border: '1px solid #277875',
              padding: '6.4px 15px',
            }}
            size="large"
          >
            <div style={{ gap: '10px', display: 'flex', alignItems: 'center' }}>
              <img src={Write} alt="" style={{ marginBottom: '6.4px' }} />
              <Typography.Title level={5} style={{ color: 'white' }}>
                สร้างคำแจ้งเตือน
              </Typography.Title>
            </div>
          </Button>
          <Button
            style={{
              display: 'flex',
              border: '1px solid #D9D9D9',
              padding: '6.4px 15px',
            }}
            size="large"
          >
            <div style={{ gap: '10px', display: 'flex', alignItems: 'center' }}>
              <img src={Filter} alt="" style={{ marginBottom: '6.4px' }} />
              <Typography.Title level={5}>Filter</Typography.Title>
            </div>
          </Button>
        </div>
        <div style={{ gap: '2vh', overflowY: 'scroll', height: '78vh', padding: '2vw' }}>
          {selected === null ? (
            allReport.map((data) => {
              return <MapBoxDetailAdmin data={data} setSelected={setSelected} />;
            })
          ) : (
            <ReportDetailed setData={setSelected} data={selected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SosAdmin;
