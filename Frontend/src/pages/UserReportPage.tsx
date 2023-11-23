import { CaretLeft } from '@phosphor-icons/react';
import StudentLayout from '../modules/common/StudentLayout';
import './UserReportPage.css';
import { Button, Form, Input, Select, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

type UserFormProps = {
  title: string;
  tags: string[];
  place: string;
  description: string;
};

function UserReportPage() {
  const [form] = Form.useForm<UserFormProps>();
  const optionTags = [
    { label: 'a10', value: 'a10' },
    { label: 'c12', value: 'c12' },
  ];
  const onSend = () => {
    console.log(form.getFieldsValue());
  };
  return (
    <StudentLayout>
      <div style={{ backgroundColor: '#f4f4f4', height: '100vh' }}>
        <div className="header" style={{ position: 'relative' }}>
          <Button
            size="large"
            shape="circle"
            style={{ position: 'absolute', left: '20px' }}
            icon={<LeftOutlined />}
            onClick={() => {
              window.history.back();
            }}
          />
          <Typography.Title level={3} style={{ color: 'white' }}>
            ส่งคำร้องเรียน
          </Typography.Title>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <Form form={form} layout="vertical" autoComplete="off" onFinish={onSend}>
            <Form.Item
              rules={[{ required: true, message: 'Please input your title' }]}
              name="title"
              label="คำร้องเรียน"
            >
              <Input />
            </Form.Item>
            <Form.Item name="picUrl" label="url รูปภาพ">
              <Input />
            </Form.Item>
            <Form.Item name="tags" label="tags">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                options={optionTags}
              />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please select in map' }]} name="place" label="สถานที่">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="รายละเอียด">
              <Input.TextArea rows={4} maxLength={100} />
            </Form.Item>
            <Typography.Text type="secondary">
              *หมายเหตุจะมีการบันทึกชื่อของผู้ส่งคำร้อง เมื่อผ่านการพิจารณา คำร้องเรียนของท่านจะถูกประกาศผ่านแอปนิสิต
              ใช้เวลาประมาณ 24 ชั่วโมง
            </Typography.Text>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{
                  maxWidth: '315px',
                  width: '100%',
                  left: '50%',
                  transform: 'translate(-50%,0)',
                }}
              >
                ส่งคำร้อง
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StudentLayout>
  );
}

export default UserReportPage;
