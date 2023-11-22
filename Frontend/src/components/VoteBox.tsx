import React from 'react'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
function VoteBox() {
    return (
    <div>
        <Button type="primary" shape="circle" icon={<UpOutlined />} />
        <div>12</div>
        <div>คำร้อง</div>
    </div>
    )
}

export default VoteBox