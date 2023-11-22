import React from 'react';
import Lottie from 'react-lottie'
import EmergencyCall from '../components/EmergencyCall';
import FirstAid from '../assets/images/sos_call/FirstAid.svg';
import PoliceCar from '../assets/images/sos_call/PoliceCar.svg';
import FireExtinguisher from '../assets/images/sos_call/FireExtinguisher.svg';
import Headset from '../assets/images/sos_call/Headset.svg';
import PhoneOutgoing from '../assets/images/sos_call/PhoneOutgoing.svg';
import StudentLayout from '../modules/common/StudentLayout';
import StudentNav from '../modules/common/StudentNav';
import phoneAnimation from '../lotties/Animation - 1700636991063.json'
import '../pages/SosCall.css';

function SosCall() {

  const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: phoneAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
  };

  return (
    <StudentLayout>
      <div style={{ position: 'relative', height: '14vh' }} className="emergency-call">
        <p
          style={{
            position: 'absolute',
            left: '0',
            bottom: '0',
            marginLeft: '2vw',
            marginBottom: '3vh',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Emergency Call
        </p>
      </div>
      <div
        style={{
          background: '#f3f3f3',
        }}
      >
        <div
            style={{
                // margin: '2vh 2vw 2vh 2vw',
                // marginBottom: '10vh',
                // backgroundColor: '#FF4D4F',
                // borderRadius: '50%',
                // border: 'solid 1px black',
                height: '31vh',
                textAlign: 'center',
            }}
            > 
            <a href="tel: 087-096-6531">
                <Lottie 
                    options={defaultOptions} 
                    height={250} 
                    width={250}
                />
            </a>  
                {/* <img
                  src={FluentCallWarning}
                  alt="fluent-call"
                  style={{
                    // display: 'flex',
                    height: '15vh',
                    width: '7rem',
                    // marginLeft: '16vw',
                    // marginRight: '16vw',
                  }}
                />
                <p style={{ color: 'white', fontSize: '22px' }}>Contact</p>
                <p style={{ color: 'white', fontSize: '22px' }}>Security Guard</p> */}
        </div>
        <div>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginLeft: '1vw',
              marginBottom: '3vh',
            }}
          >
            Emergency Contact
          </h2>
          <div style={{paddingBottom: '10vh'}}>
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
      <StudentNav/>
    </StudentLayout>
  );
}

export default SosCall;
