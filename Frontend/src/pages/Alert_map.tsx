import { useEffect, useState } from 'react';
import MapBoxDetail from '../components/MapBoxDetail/MapBoxDetail';
import StudentLayout from '../modules/common/StudentLayout';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import Fullmap from '../components/FullMap';
import { FormOutlined, LeftOutlined, CaretUpOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Alert_map.css';
import axios from 'axios';

function Alert_map() {
  const [location, setLocation] = useState<CoordinateProps | null>(null);
  const [selected, setSelected] = useState<MapDataLocationProps | null>(null);
  const [MapData, setMapData] = useState<MapDataLocationProps[]>([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  useEffect(() => {
    if (!selected) {
      setSelected(MapData[0]);
    } else {
      setSelected(MapData.find((item) => item?._id === selected?._id));
    }
  }, [MapData]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('https://hackaty.onrender.com/api/report/user/find_all').then((res: any) => {
        console.log('This', res?.data?.message);
        setMapData(res?.data?.message);
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Link to="/" style={{ position: 'absolute', zIndex: '4', left: '1rem', top: '4rem' }}>
          <Button
            shape="circle"
            style={{
              color: '#134F4D',
              boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)',
            }}
            icon={<LeftOutlined />}
            size="large"
          />
        </Link>

        <Button
          type="primary"
          size="large"
          icon={<FormOutlined />}
          style={{
            position: 'absolute',
            zIndex: '2',
            right: '1rem',
            top: '3rem',
            padding: '6.4px 15px',
            fontSize: '1rem',
          }}
          onClick={() => {
            navigate('/sos-alert-form');
          }}
        >
          ส่งคำร้อง
        </Button>
        <div style={{ width: '100%' }}>
          {location ? (
            <Fullmap
              location={location}
              setLocation={setLocation}
              setSelected={setSelected}
              mapData={MapData}
              isStatus={true}
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>Loading</div>
          )}
        </div>
        {/* <div style={{ position: "absolute", zIndex: "3", bottom: "0", left: "0", width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "1rem", background: "#FFFFFF", boxShadow: "0px -2px 0px 0px rgba(0, 0, 0, 0.04)" }}>
                        <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{selected?.title}</div>
                        <div style={{ color: "#00000073" }}>({selected?.lat}, {selected?.lon})</div>
                    </div>
                </div> */}

        {/* <Button type="text" block style={{ position: "absolute", zIndex: "4", top: "70%" , width:"20%"}}>
                    <CaretUpOutlined  />
                </Button> */}
        <Button
          id="btn_up"
          style={{
            position: 'absolute',
            zIndex: '4',
            color: '#7F7F7F',
            transition: 'transform 0.5s ease-in',
            width: '100%',
            maxHeight: '1rem',
          }}
          // icon={<MinusOutlined />}
          type="text"
          icon={<CaretUpOutlined />}
          onClick={() => {
            console.log(document.getElementById('container_map_img')?.classList.contains('move-up'));
            if (document.getElementById('container_map_img')?.classList.contains('move-up')) {
              document.getElementById('container_map_img')?.classList.remove('move-up');
              document.getElementById('container_map_img')?.classList.add('move-down');
              document.getElementById('btn_up')?.classList.remove('move-up-btn');
              document.getElementById('btn_up')?.classList.add('move-down');
            } else {
              document.getElementById('container_map_img')?.classList.remove('move-down');
              document.getElementById('container_map_img')?.classList.add('move-up');
              document.getElementById('btn_up')?.classList.remove('move-down');
              document.getElementById('btn_up')?.classList.add('move-up-btn');
            }
          }}
        ></Button>
        <div id="container_map_img">
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '1.5rem 1.5rem 0 0',
            }}
            src={
              selected?.photo_url ??
              'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg'
            }
            alt="Descriptive Text"
            className="image"
          />
        </div>

        <MapBoxDetail selected={selected} />
      </div>
    </StudentLayout>
  );
}

export default Alert_map;
