import React from 'react'

interface emergencyContact {
    logoPath: string;
    name: string;
    phoneNumber: string;
    phoneLogoPath: string;
}

function EmergencyCall(props: emergencyContact) {

  const handlePhoneCall = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `tel: ${props.phoneNumber}`
  }

  return (
    <div 
        style={{
            display: 'flex',
            borderRadius: '15px',
            alignItems: 'center',
            marginLeft: '2vh',
            marginRight: '2vh',
            marginTop: '1vh',
            marginBottom: '1vh',
            background: 'white',
            height: '8vh',
        }}
    >
        <img src={props.logoPath} alt="logo" style={{
            marginLeft: '1vw'
        }} />
        <div style={{
            marginLeft: '2vw'
        }}>
            <p style={{marginBottom: '1vh'}}>{props.name}</p>
            <p>{props.phoneNumber}</p>
        </div>
        <a href={props.phoneNumber} style={{
            marginLeft: 'auto',
            marginRight: '1vw'
        }}>
            <img src={props.phoneLogoPath} alt="phone-logo"/>
        </a>
    </div>
  )
}

export default EmergencyCall;
