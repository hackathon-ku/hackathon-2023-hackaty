import React from 'react'
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

interface emergencyContact {
    logoPath: string;
    name: string;
    phoneNumber: string;
    phoneLogoPath: string;
}

function EmergencyCall(props: emergencyContact) {

  const handlePhoneCall = () => {
    window.location.href = `tel: ${props.phoneNumber}`
  }

  return (
        <div 
            style={{
                display: 'flex',
                borderRadius: '15px',
                alignItems: 'center',
                background: 'white',
                height: '8vh',
                marginLeft: '2vh',
                marginRight: '2vh',
                marginTop: '1vh',
                marginBottom: '1vh',
                cursor: 'pointer'
            }}
            onClick={handlePhoneCall}
        >
            <img src={props.logoPath} alt="logo" style={{
                marginLeft: '1vw'
            }} />
            <div style={{
                marginLeft: '2vw'
            }}>
                <p style={{marginBottom: '1vh'}}>{props.name}</p>
                <Text type="secondary">{props.phoneNumber}</Text>
            </div>
            <img src={props.phoneLogoPath} alt="phone-logo" style={{
                marginLeft: 'auto',
                marginRight: '1vw',}}
            />
        </div>
  )
}

export default EmergencyCall;
