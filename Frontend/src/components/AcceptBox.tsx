import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { Check } from '@phosphor-icons/react';
import { X } from '@phosphor-icons/react';
import { MapDataLocationProps } from '../interface/interface';
// import '../components/Box.css'

function AcceptBox({ data }: { data: MapDataLocationProps }) {

  const handleUpdate = async (status: string) => {
    await axios.put(
      'https://hackaty.onrender.com/api/report/update',
      {
        user: "admin",
        report_id: data?._id,
        report_status: status,
        priority: data?.priority
      }
    ).then(res => {
      console.log("Update Status", res.data);
      window.location.href = '/sos-admin';
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Button 
        type="primary" 
        shape="circle" 
        style={{ backgroundColor: '#52C41A' }} 
        icon={<Check></Check>}
        onClick={() => handleUpdate("Approved")}
      >
      </Button>
      <div style={{marginTop: '6px', marginBottom: '6px'}}>
        <div style={{fontWeight: 'bold'}}>{data.vote_score}</div>
        <div style={{color: 'rgba(0, 0, 0, 0.45)'}}>supports</div>
      </div>
      <Button 
        type="primary" 
        shape="circle" 
        style={{ backgroundColor: '#FF4D4F' }} 
        icon={<X></X>}
        onClick={() => handleUpdate("Rejected")}
      >
      </Button>
    </div>
  );
}

export default AcceptBox;
