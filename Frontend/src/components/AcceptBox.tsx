import React from 'react';
import { Button } from 'antd';
import { Check } from '@phosphor-icons/react';
import { X } from '@phosphor-icons/react';
// import '../components/Box.css'

function AcceptBox() {
  return (
    <div className="accept-decline-box">
      <Button type="primary" shape="circle" style={{ backgroundColor: '#52C41A' }} icon={<Check></Check>}></Button>
      <div className="">
        <div>12</div>
        <div>คำร้อง</div>
      </div>
      <Button type="primary" shape="circle" style={{ backgroundColor: '#FF4D4F' }} icon={<X></X>}></Button>
    </div>
  );
}

export default AcceptBox;
