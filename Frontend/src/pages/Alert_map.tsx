import { useEffect, useState } from 'react';
import Map_data from '../data/mapData';
import MapBoxDetail from '../components/MapBoxDetail/MapBoxDetail';
import StudentLayout from '../modules/common/StudentLayout';
import { CoordinateProps, MapDataLocationProps } from '../interface/interface';
import Fullmap from '../components/FullMap';
import { FormOutlined, LeftOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import "./Alert_map.css";


function Alert_map() {
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
                <Link to="/" style={{ position: "absolute", zIndex: "4", left: "1rem", top: "4rem" }}>
                    <Button
                        shape="circle"
                        style={{
                            color: "#134F4D",
                            boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)"
                        }}
                        icon={<LeftOutlined />}
                        size='large'
                    />
                </Link>

                <Button
                    type="primary"
                    size="large"
                    icon={<FormOutlined />}
                    style={{ position: "absolute", zIndex: "2", right: "1rem", top: "3rem", padding: "6.4px 15px", fontSize: "1rem" }}

                >
                    ส่งคำร้อง
                </Button>
                <div style={{ width: "100%" }}>
                    {location ? (
                        <Fullmap

                            location={location}
                            setLocation={setLocation}
                            setSelected={setSelected}
                            mapData={Map_data}
                            isStatus={true}
                        />
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', height: "77vh", alignItems: "center", backgroundColor: "#dedede", borderRadius: "1rem" }}>
                            <Spin size="large" />
                        </div>
                    )}

                </div>

                <Button id='btn_up'
                    style={{ position: "absolute", zIndex: "4", color: "#7F7F7F", transition: "transform 0.5s ease-in", width: "100%", maxHeight: "1rem" }}
                    type='text'
                    icon={<CaretUpOutlined />}
                    onClick={() => {
                        console.log(document.getElementById("container_map_img")?.classList.contains("move-up"))
                        if (document.getElementById("container_map_img")?.classList.contains("move-up")) {
                            document.getElementById("container_map_img")?.classList.remove("move-up");
                            document.getElementById("container_map_img")?.classList.add("move-down");
                            document.getElementById("btn_up")?.classList.remove("move-up-btn");
                            document.getElementById("btn_up")?.classList.add("move-down");
                        }
                        else {
                            document.getElementById("container_map_img")?.classList.remove("move-down");
                            document.getElementById("container_map_img")?.classList.add("move-up");
                            document.getElementById("btn_up")?.classList.remove("move-down");
                            document.getElementById("btn_up")?.classList.add("move-up-btn");


                        }
                    }}
                ></Button>
                <div id="container_map_img"  >
                    <img
                        style={{
                            width: "100%", height: "100%", borderRadius: "1.5rem 1.5rem 0 0"
                        }}
                        src="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
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
