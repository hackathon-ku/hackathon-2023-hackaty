import React from 'react'
import "./MapBoxDetail.css";
import { MapDataLocationProps } from '../../interface/interface';
import VoteBox from '../VoteBox';
import AcceptBox from '../AcceptBox';

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
    const lst_tag = ["tag1", "tag2", "tag3"]
    return (
        <div className='map_box_container-admin'>
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
            <AcceptBox />
        </div>
    )
}

export default MapBoxDetail