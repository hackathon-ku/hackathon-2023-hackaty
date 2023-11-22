import React from 'react';
import Lottie from 'react-lottie';
import EmergencyCall from '../components/EmergencyCall';
import FirstAid from '../assets/images/sos_call/FirstAid.svg';
import PoliceCar from '../assets/images/sos_call/PoliceCar.svg';
import FireExtinguisher from '../assets/images/sos_call/FireExtinguisher.svg';
import Headset from '../assets/images/sos_call/Headset.svg';
import PhoneOutgoing from '../assets/images/sos_call/PhoneOutgoing.svg';
import StudentLayout from '../modules/common/StudentLayout';
import StudentNav from '../modules/common/StudentNav';
import phoneAnimation from '../lotties/Animation - 1700636991063.json';
import '../pages/SosCall.css';
import { Typography } from 'antd';

function SosCall() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: phoneAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <StudentLayout>
      <div style={{ position: 'relative', height: '14vh' }} className="emergency-call">
        <Typography.Title
          level={3}
          style={{
            position: 'absolute',
            left: '0',
            bottom: '0',
            marginLeft: '24px',
            marginBottom: '3vh',
            color: 'white',
          }}
        >
          Emergency Call
        </Typography.Title>
      </div>
      <div
        style={{
          background: '#f3f3f3',
        }}
      >
        <div
          style={{
            height: '31vh',
            textAlign: 'center',
          }}
        >
          {/* 087-096-6531 */}
          <a href="tel: 087-096-6531">
            <Lottie options={defaultOptions} height={250} width={250} />
          </a>
        </div>
        <div>
          <Typography.Title
            level={5}
            style={{
              marginLeft: '24px',
              marginBottom: '16px',
            }}
          >
            Emergency Contact
          </Typography.Title>
          <div style={{ paddingBottom: '10vh' }}>
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
      <StudentNav />
    </StudentLayout>
  );
}

export default SosCall;
