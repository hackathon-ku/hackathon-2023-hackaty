import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapDataLocationProps } from '../interface/interface';
import { Button, Typography, Radio } from 'antd';

const { Paragraph } = Typography;

const ReportDetailed = ({
  data,
  setData,
}: {
  data: MapDataLocationProps | null;
  setData: React.Dispatch<React.SetStateAction<MapDataLocationProps | null>>;
}) => {
  console.log("current data", data)
  const [editableTitle, setEditableTitle] = useState('This is an editable title.');
  const [editableDescription, setEditableDescription] = useState('This is an editable description.');
  // const [priority, setPriority] = useState('');
  const [reportType, setReportType] = useState('');

  // const acceptReport = async (reportID: string, reportStatus: string, reportType: string) => {
  //   await axios.put(
  //     'https://hackaty.onrender.com/api/report/update',
  //     {
  //       user: "admin",
  //       report_id: reportID,
  //       report_status: reportStatus,
  //       priority: reportType
  //     }
  //   ).then(res => {
  //     console.log(res.data);
  //   })
  // }

  // const handleTitleOnChange = (e) => {
  //   setEditableTitle(e.target.value);
  // }

  // const handleDescriptionOnChange = (e) => {
  //   setEditableDescription(e.target.value);
  // }

  const handleReportOnChange = (e) => {
    console.log(e.target.value);
    setReportType(e.target.value);
  }

  // const handleAcceptReport = (e) => {
  //   e.preventDefault();
  //   acceptReport(data?._id, data?.reportStatus, data?.Priority,);
  //   setPriority(data?.Priority)
  // }
  const handleUpdate = async (status: string) => {
    await axios.put(
      'https://hackaty.onrender.com/api/report/update',
      {
        user: "admin",
        report_id: data?._id,
        report_status: status,
        priority: reportType
      }
    ).then(res => {
      console.log("Update Status", res.data);
      window.location.href = '/sos-admin';
    })
  }

  const renderCase = (reportStatus: string | undefined) => {
    console.log(reportStatus)
    switch (reportStatus) {
      case 'Inbox':
        return <>
          <Button type='primary' onClick={() => handleUpdate("Approved")} value="Approved">Accept Report</Button>
          <Button type='primary' onClick={() => handleUpdate("Rejected")} style={{}} value="Rejected">Reject Report</Button>
        </>
      case 'Approved':
        return <>
        <Button type='primary' onClick={() => handleUpdate("Archive")} value="Archive">Archive Report</Button>
        <Button type='primary' onClick={() => handleUpdate("Inbox")} style={{}} value="Inbox">Move to Inbox</Button>
      </>
      case 'Archive':
        return <>
          <Button type='primary' onClick={() => handleUpdate("Inbox")} style={{}} value="Inbox">Move to Inbox</Button>
        </>
      case 'Rejected':
        return <>
          <Button type='primary' onClick={() => handleUpdate("Inbox")} style={{}} value="Inbox">Move to Inbox</Button>
        </>
      default:
        return <>
          <p>Something Went Wrong!</p>
        </>
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     getReport()
  //   }, 4000);
  // }, [])

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setData(null);
        }}
      >
        Back
      </Button>
      <div>
        <Paragraph style={{ marginTop: '20px', display: 'flex' }}>
          <Typography.Title editable={{ onChange: setEditableTitle }} level={3} style={{ margin: 0 }}>
            {data?.title}
          </Typography.Title>
        </Paragraph>
        <Paragraph style={{ marginTop: '20px' }} editable={{ onChange: setEditableDescription }}>
          {data?.description}
        </Paragraph>
        <div style={{ display: 'flex', marginBottom: '20px', gap: '21px'}}>
          <Typography>
            Report Type:
          </Typography>
          <Radio.Group defaultValue={data?.priority}>
            <Radio.Button value="Report" onChange={handleReportOnChange}>Report</Radio.Button>
            <Radio.Button value="Warning" onChange={handleReportOnChange}>Warning</Radio.Button>
            <Radio.Button value="Danger" onChange={handleReportOnChange}>Danger</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {
            renderCase(data?.report_status)
          }
          {data?.report_status}
        </div>
      </div>
    </div>
  );
};

export default ReportDetailed;
