import React from 'react'

interface emergencyContact {
    logoPath: string;
    name: string;
    phoneNumber: string;
    phoneLogoPath: string;
}

function EmergencyCall(props: emergencyContact) {
  return (
    <div 
        style={{
            display: 'flex',
            borderRadius: '15px',
            alignItems: 'center',
            marginTop: '1vh',
            marginBottom: '1vh',
            background: 'white',
            height: '6.5vh'
        }}
    >
        <img src={props.logoPath} alt="logo" style={{
            marginLeft: '4vw'
        }} />
        <div style={{
            marginLeft: '5vw'
        }}>
            <p>{props.name}</p>
            <p>{props.phoneNumber}</p>
        </div>
        <img src={props.phoneLogoPath} alt="phone-logo" style={{
            position:'absolute', 
            right: '0',
            marginRight: '10vw'
        }} />
    </div>
  )
}

export default EmergencyCall;
