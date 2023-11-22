import React from 'react'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
function VoteBox({ points }: { points: number }) {
    return (
        <div style={{ gap: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Button  shape="circle" style={{ margin: "8px" }} icon={<UpOutlined />} size='large' />
            <div style={{ gap: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "14px", color: "var(--primary-206, #030B0B)" }}>{points}</div>
                <div style={{ fontSize: "12px", color: "#BFBFBF" }}>คำร้อง</div>
            </div>
            <Button  shape="circle" style={{ margin: "8px" }} icon={<DownOutlined />} size='large' />

        </div>
    )
}
export default VoteBox