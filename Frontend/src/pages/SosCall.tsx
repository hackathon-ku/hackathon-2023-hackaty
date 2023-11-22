import React from 'react'
import EmergencyCall from '../components/EmergencyCall'
import FirstAid from '../assets/images/sos_call/FirstAid.svg';
import PoliceCar from '../assets/images/sos_call/PoliceCar.svg'
import FireExtinguisher from '../assets/images/sos_call/FireExtinguisher.svg'
import Headset from '../assets/images/sos_call/Headset.svg'
import PhoneOutgoing  from '../assets/images/sos_call/PhoneOutgoing.svg';
import FluentCallWarning from '../assets/images/sos_call/fluent_call-warning-16-regular.svg'
import '../pages/SosCall.css'

function SosCall() {
  return (
    <div>
        <div style={{position: 'relative', height: '12vh'}} className='emergency-call'>
            <p style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
                marginLeft: '6vw',
                marginBottom: '3vh',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
            }}>
                Emergency Call
            </p>
        </div>
        <div style={{
            background: '#f3f3f3',
            // padding: '2vh 5vw 2vh 5vw'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',                
                padding: '5vh 5vw 5vh 5vw',
                border: 'solid 1px black',
                height: '20vh'
            }} >
                <div style={{backgroundColor: '#FFCCC7'}}>
                    <div style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: '#FF7875',
                        borderRadius: '50%',
                        width: '51vw',
                        height: '24vh',
                    }}>
                        <div style={{
                            // margin: '2vh 2vw 2vh 2vw',
                            // marginBottom: '10vh',
                            backgroundColor: '#FF4D4F',
                            borderRadius: '50%', 
                            // border: 'solid 1px black',
                            width: '45vw',
                            height: '20vh',
                            textAlign: 'center',
                        }}> 
                            <img src={FluentCallWarning} alt="fluent-call" style={{
                                // display: 'flex',
                                height: '15vh', 
                                width: '7rem',
                                // marginLeft: '16vw',
                                // marginRight: '16vw',
                            }}/>
                            <p style={{color: 'white', fontSize: '22px'}}>Contact</p>
                            <p style={{color: 'white', fontSize: '22px'}}>Security Guard</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '2vh'
                }}>
                    Emergency Contact
                </h2>
                <div>
                    <EmergencyCall 
                        logoPath={FirstAid}
                        name={'Clinic Kasetsart University'}
                        phoneNumber={'0-2579-0030'}
                        phoneLogoPath={PhoneOutgoing}
                    />
                    <EmergencyCall 
                        logoPath={PoliceCar}
                        name={'Police Station Bangkhen'}
                        phoneNumber={'0-2579-0030'}
                        phoneLogoPath={PhoneOutgoing}
                    />
                    <EmergencyCall 
                        logoPath={FireExtinguisher}
                        name={'Fire Station'}
                        phoneNumber={'0-2579-0030'}
                        phoneLogoPath={PhoneOutgoing}
                    />
                    <EmergencyCall 
                        logoPath={Headset}
                        name={'Help Desk Kasetsart University'}
                        phoneNumber={'0-2579-0030'}
                        phoneLogoPath={PhoneOutgoing}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SosCall