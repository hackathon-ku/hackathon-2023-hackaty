import React from 'react'
import "./MapBoxDetail.css";
import { MapDataLocationProps } from '../../interface/interface';
import VoteBox from '../VoteBox';

function TagBox({ text }: { text: string }) {
    const style = {
        padding: '1px 8px',
        gap: '3px',
        background: "linear-gradient(0deg, #FDFDDB, #FDFDDB),linear-gradient(0deg, #FCFBB1, #FCFBB1)",
        border: "1px solid rgba(252, 251, 177, 1)",
        borderRadius: "2px",
        frontSize: "12px",


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
    const points = selected?.vote_score || 0;
    return (
        <div className='map_box_container'>
            {/* {selected ? (selected.m_id) : (null)} */}
            <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontWeight: "bold" }}>ฟุตบาตไม่สม่ำเสมอ</div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {lst_tag.map((item) => {
                        return (
                            <TagBox text={item} />
                        )

                    })}
                </div>

                <div style={{
                    display: "flex", flexWrap: "wrap", wordWrap: "break-word", wordBreak: "break-all",
                }}>ฟุตบาทไม่สม่ำเสมอเลยฟุตบาทไม่สม่ำเสมอเลยฟุตบาทไม่สม่ำเสมอเลยฟุตบาทไม่สม่ำเสมอเลยฟุตบาทไม่สม่ำเสมอเลย</div>
                <div style={{ color: "#00000073" }}>ถนนงามวงศ์วาน</div>
            </div>
            <VoteBox points={points} />


        </div>


    )
}

export default MapBoxDetail