import React from 'react';
import StudentLayout from '../modules/common/StudentLayout';
import './UserReportPage.css';
import UploadFile from '../components/UploadFile';
import { Form, Input, InputNumber } from 'antd';
function UserReportPage() {
  const [form] = Form.useForm<{}>();
  return (
    <StudentLayout>
      <div style={{ backgroundColor: '#f4f4f4', height: '100vh' }}>
        <div className="header">
          <h1>ส่งคำร้องเรียน</h1>
        </div>
        <div className="container">
        </div>
      </div>
    </StudentLayout>
  );
}

export default UserReportPage;
