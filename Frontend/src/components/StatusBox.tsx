import React from 'react'
import { MapDataLocationProps } from '../interface/interface'
import { ArchiveBox } from '@phosphor-icons/react'
import { Button, Typography } from 'antd';

function AcceptedBox({ data }: { data: MapDataLocationProps }) {

  const changeColor = (status: string) => {
    if (status === 'Approved') {
      return '#52C41A'
    } else if (status === 'Rejected') {
      return '#FF4D4F'
    } else {
      return 'black'
    }
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Typography style={{color: changeColor(data?.report_status)}}>{data?.report_status}</Typography>
      <div style={{marginTop: '6px', marginBottom: '6px'}}>
        <div style={{fontWeight: 'bold'}}>{data.vote_score}</div>
        <div style={{color: 'rgba(0, 0, 0, 0.45)'}}>supports</div>
      </div>
      <Button shape='circle' icon={<ArchiveBox></ArchiveBox>}></Button>
    </div>
  )
}

export default AcceptedBox