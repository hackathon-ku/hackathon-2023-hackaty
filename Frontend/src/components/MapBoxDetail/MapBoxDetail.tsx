import React, { useEffect, useRef, useState } from 'react';
import { Card, InputRef, Tag, theme, Button, Drawer, Radio, Space, Typography } from 'antd';
import { MapDataLocationProps } from '../../interface/interface';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import VoteBox from '../VoteBox';
import AcceptBox from '../AcceptBox';
import Car from '../../assets/images/admin_page/f6f320cdedea7d6a7cf096d6f8cd32a0.jpg'
import "./MapBoxDetail.css";

function TagBox({ text }: { text: string }) {
    const style = {
        width: '46px',
        height: '22px',
        padding: '1px 8px',
        borderRadius: '2px',
        gap: '3px',
        background: "linear-gradient(0deg, #FDFDDB, #FDFDDB),linear-gradient(0deg, #FCFBB1, #FCFBB1)",
        border: "1px solid rgba(252, 251, 177, 1)"

        // Add any additional styling like font size, color, etc.
    };

    return (
        <div style={style}>
            {text}
        </div>
    );
}



function MapBoxDetail({ selected }: { selected: MapDataLocationProps | null }) {
    const lst_tag = ["tag1", "tag2", "tag3"]
    return (
        <div className='map_box_container'>
            {/* {selected ? (selected.m_id) : (null)} */}
            <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>ฟุตบาตไม่เสมอ</div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {lst_tag.map((item) => {
                        return (
                            <TagBox text={item} />
                        )
                    })}
                </div>

                <div style={{
                    display: "flex", flexWrap: "wrap", wordWrap: "break-word"
                }}>kfpefepkfwkfowkfowkfowkokokfpekf</div>

            </div>
            <VoteBox />


        </div>


    )
}

export function MapBoxDetailAdmin({ selected }: { selected: MapDataLocationProps | null }) {
    // const lst_tag = ["tag1", "tag2", "tag3"]
    const { token } = theme.useToken();
    const [tags, setTags] = useState(['อุบัติเหตุ', 'แจ้งเตือน']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);

    const [open, setOpen] = useState(false);
    // const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    // const onChange = (e: RadioChangeEvent) => {
    //   setPlacement(e.target.value);
    // };

    useEffect(() => {
        if (inputVisible) {
          inputRef.current?.focus();
        }
    }, [inputVisible]);
    
    const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
    };

    // const showInput = () => {
    // setInputVisible(true);
    // };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(e.target.value);
    // };

    // const handleInputConfirm = () => {
    // if (inputValue && tags.indexOf(inputValue) === -1) {
    //     setTags([...tags, inputValue]);
    // }
    // setInputVisible(false);
    // setInputValue('');
    // };
    
    const forMap = (tag: string) => {
    const tagElem = (
        <Tag
        closable
        onClose={(e) => {
            e.preventDefault();
            handleClose(tag);
        }}
        >
        {tag}
        </Tag>
    );
    return (
        <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
        </span>
    );
    };

    const tagChild = tags.map(forMap);

    // const tagPlusStyle: React.CSSProperties = {
    //   background: token.colorBgContainer,
    //   borderStyle: 'dashed',
    // };

    return (
        <>
            <Card style={{marginTop: '16px', marginBottom: '16px', display: 'flex', alignContent: 'center'}} onClick={showDrawer}>
                <img src={Car} alt="" style={{height: '80px', width: '80px'}} />
                <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography style={{fontWeight: 'bold'}}>
                        ฟุตบาตไม่เสมอ
                    </Typography>
                    {/* <div style={{ fontWeight: "bold" }}>ฟุตบาตไม่เสมอ</div> */}
                    {/* <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {lst_tag.map((item) => {
                            return (
                                <TagBox text={item} />
                            )

                        })}
                    </div> */}
                    <div style={{ marginBottom: 16 }}>
                        <TweenOneGroup
                        enter={{
                            scale: 0.8,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                        }}
                        onEnd={(e) => {
                            if (e.type === 'appear' || e.type === 'enter') {
                            (e.target as any).style = 'display: inline-block';
                            }
                        }}
                        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                        appear={false}
                        >
                        {tagChild}
                        </TweenOneGroup>
                    </div>
                    {/* {inputVisible ? (
                        <Input
                        ref={inputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                        />
                    ) : (
                        <Tag onClick={showInput} style={tagPlusStyle}>
                        <PlusOutlined /> New Tag
                        </Tag>
                    )} */}
                    {/* <div style={{
                        display: "flex", flexWrap: "wrap", wordWrap: "break-word"
                    }}></div> */}
                    <Typography style={{fontWeight: 'bold'}}>
                        รถชนต์แล้วรถติดมากเลยค่ะ หลีกเลี่ยงเส้นทาง
                    </Typography>
                    <Typography style={{color: 'rgba(0, 0, 0, 0.45)'}}>หน้าคณะเศรษฐศาสตร์</Typography>
                </div>
                <AcceptBox />
            </Card>
            <Drawer
                placement={'right'}
                closable={false}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default MapBoxDetail