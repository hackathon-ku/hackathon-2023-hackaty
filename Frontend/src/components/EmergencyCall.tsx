import React from 'react'

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
                <p>{props.phoneNumber}</p>
            </div>
            <img src={props.phoneLogoPath} alt="phone-logo" style={{
                marginLeft: 'auto',
                marginRight: '1vw',}}
            />
        </div>
  )
}

export default EmergencyCall;
