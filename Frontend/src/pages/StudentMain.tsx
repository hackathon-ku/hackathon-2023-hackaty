import {
  ArrowCircleRight,
  Backpack,
  Bell,
  Books,
  ChalkboardTeacher,
  Exam,
  Link,
  Megaphone,
} from '@phosphor-icons/react';
import { Alert, Button, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../modules/common/StudentLayout';
import StudentNav from '../modules/common/StudentNav';
import { useEffect, useState } from 'react';
import { CoordinateProps } from '../interface/interface';
import axios, { Axios } from 'axios';
// TODO Add path
const menuNavigations = [
  {
    name: 'Map',
    icon: './map.png',
    path: '/',
  },
  {
    name: 'Grad',
    icon: './graduation-hat.png',
    path: '/grad',
  },
  {
    name: 'Report',
    icon: './noise.png',
    path: '/alert-map',
  },
  {
    name: 'MC taxi',
    icon: './motorcycle.png',
    path: '/',
  },
  {
    name: 'Department',
    icon: './office-building.png',
    path: '/',
  },
] as const;
const newsData = [
  {
    title: 'Kasetsart Concerts',
    date: '12 December 2021',
    placed: 'Faculty of Engineering',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Kasetsart Concerts',
    date: '20 December 2021',
    placed: 'Faculty of Engineering',
    image:
      'https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
const favLink = [
  {
    name: 'Course',
    icon: Backpack,
  },
  {
    name: 'Exam Score',
    icon: Exam,
  },
  {
    name: 'Library',
    icon: Books,
  },
  {
    name: 'Classes',
    icon: ChalkboardTeacher,
  },
];
type WeatherProps = {
  condition: {
    text: string;
    icon: string;
  };
  temp_c: number;
};
function StudentMain() {
  const [location, setLocation] = useState<CoordinateProps>();
  const [weather, setWeather] = useState<WeatherProps>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  useEffect(() => {
    if (!location) return;
    axios
      .get('https://weatherapi-com.p.rapidapi.com/current.json', {
        params: { q: `${location.lat},${location.lng}` },
        headers: {
          'X-RapidAPI-Key': 'bfc9f0dfdfmsh4f98a101927de69p131a44jsn8e404a9bcead',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      })
      .then((res) => {
        setWeather(res.data.current);
        console.log(res.data);
      });
  }, [!location]);
  const navigate = useNavigate();
  // fetch alert notification
  useEffect(() => {
    const intervalId = setInterval(() => {
      const last_report_timestamp = localStorage.getItem('last_report_timestamp');
      axios
        .get(`https://hackaty.onrender.com/api/report/get_alert/${last_report_timestamp}/${'lat'}/${'lon'}`)
        .then((res: any) => {
          console.log('This', res?.data?.message);
        });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect;
  return (
    <>
      <StudentLayout>
        {/* --------------------------------- Header --------------------------------- */}
        <div
          style={{
            background: 'linear-gradient(101deg, #277875 14.17%, #50AC7D 67.03%, rgba(193, 194, 60, 0.87) 152.91%)',
            height: '20vh',
            paddingInline: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex' }}>
              <Typography.Text style={{ color: 'white' }}>Good Morning</Typography.Text>
              <img src={weather?.condition.icon} alt="" width={24} height={24} />
              <Typography.Text style={{ color: 'white' }}>
                {weather?.condition?.text} {weather?.temp_c} C
              </Typography.Text>
            </div>
            <Typography.Title style={{ color: 'white' }} level={5}>
              Mr.Kasetsart Student เกษตรศาสตร์คุง
            </Typography.Title>
          </div>
          <Button type="text" icon={<Bell size={22} color="white" />} />
        </div>
        {/* -------------------------------- Contents -------------------------------- */}
        <div
          style={{
            width: '80%',
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            alignContent: 'center',
            paddingBottom: '15vh',
          }}
        >
          {/* ------------------------------- Menu Items ------------------------------- */}
          <div
            style={{
              paddingBlock: '12px',
              paddingInline: '10px',
              display: 'flex',
              marginTop: '-5vh',
              background: 'white',
              borderRadius: '20px',
              alignContent: 'space-around',
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
            }}
          >
            {menuNavigations.map((item) => (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '64px',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => navigate(item.path)}
              >
                <img width={34} height={34} src={item.icon} alt="" />
                <Typography.Text ellipsis style={{ color: '#277875', fontSize: '12px' }}>
                  {item.name}
                </Typography.Text>
              </div>
            ))}
          </div>
          {/* TODO Add Alert */}
          <Alert message="Warning" type="warning" closable />
          {/* ---------------------------------- News ---------------------------------- */}
          <div>
            <div style={{ display: 'flex', width: 'auto', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Megaphone size={22} color="#277875" />
                <Typography.Title level={5} style={{ color: '#277875' }}>
                  Kasetsart News
                </Typography.Title>
              </div>
              <ArrowCircleRight size={22} color="#277875" />
            </div>
            <div style={{ display: 'flex', gap: '23px', overflowX: 'scroll' }}>
              {newsData.map((news, Index) => (
                <Card
                  style={{ width: '263px' }}
                  key={Index + news.title}
                  cover={<img src={news.image} style={{ width: '263px', height: '164px', objectFit: 'cover' }} />}
                >
                  <Typography.Title level={5}>{news.title}</Typography.Title>
                  <Typography.Text style={{ fontSize: '12px', color: '#6BA3A1' }}>{news.date}</Typography.Text>
                  <Typography.Text style={{ fontSize: '12px', color: '#134F4D' }}> | {news.placed}</Typography.Text>
                </Card>
              ))}
            </div>
          </div>
          {/* -------------------------------- Fav Link -------------------------------- */}
          <div>
            <div style={{ display: 'flex', width: 'auto', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Link size={22} color="#277875" />
                <Typography.Title level={5} style={{ color: '#277875' }}>
                  Fav Link
                </Typography.Title>
              </div>
              <ArrowCircleRight size={22} color="#277875" />
            </div>
            <div style={{ display: 'flex', gap: '23px' }}>
              {favLink.map((data) => (
                <div
                  key={data.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '64px',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Button type="primary" shape="circle" size="large" icon={<data.icon size={22} color="white" />} />
                  <Typography.Text style={{ color: '#277875', fontSize: '12px' }}>{data.name}</Typography.Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <StudentNav />
      </StudentLayout>
    </>
  );
}
export default StudentMain;
