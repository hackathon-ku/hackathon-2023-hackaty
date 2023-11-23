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
          {/* <button className="back-button">&larr;</button> */}
          <h1>ส่งคำร้องเรียน</h1>
        </div>
        <div className="container">
          <form action="/submit-your-form" method="post">
            <div className="input-group">
              {/* <label >คำร้องเรียน</label> */}
              <Form form={form} layout="vertical" autoComplete="off">
                <Form.Item name="title" label="คำร้องเรียน">
                  <Input />
                </Form.Item>
              </Form>
              <UploadFile />
              <input type="text" id="complaint" name="complaint" placeholder="เกิดบางอย่างที่ไม่ถูกต้อง..." />
            </div>

            <div className="input-group">
              <label>Tags:</label>
              <input type="text" name="tags" placeholder="แท็กบางอย่าง..." />
            </div>

            <div className="input-group">
              <label>สาเหตุ</label>
              <textarea id="description" name="description" placeholder="รายละเอียด..."></textarea>
            </div>

            <button type="submit">ส่งคำร้อง</button>
          </form>
        </div>
      </div>
    </StudentLayout>
  );
}

export default UserReportPage;
