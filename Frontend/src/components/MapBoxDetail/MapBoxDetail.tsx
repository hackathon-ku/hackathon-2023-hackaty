import React from 'react'
import "./MapBoxDetail.css";
import { MapDataLocationProps, TagProps } from '../../interface/interface';
import VoteBox from '../VoteBox';
import { TabPaneProps } from 'antd';

function TagBox({ text }: { text: TagProps }) {
    const style = {
        padding: '1px 8px',
        gap: '3px',
        background: "linear-gradient(0deg, #FDFDDB, #FDFDDB),linear-gradient(0deg, #FCFBB1, #FCFBB1)",
        border: "1px solid rgba(252, 251, 177, 1)",
        borderRadius: "2px",
        fontSize: "12px",


        // Add any additional styling like font size, color, etc.
    };

    return (
        <div style={style}>
            {text.name}
        </div>
    );
}



function MapBoxDetail({ selected }: { selected: MapDataLocationProps | null }) {
    const lst_tag = ["tag1", "tag2", "tag3"]
    const points = selected?.vote_score || 0;
    return (
        <div className='map_box_container'>
           
            <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "1rem"  ,zIndex:"2"}}>
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{selected?.title}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {selected?.tags.map((item) => {
                        return (
                            <TagBox text={item} />
                        )

                    })}
                </div>

                <div style={{
                    flexWrap: "wrap", wordWrap: "break-word", wordBreak: "break-all", textOverflow: " ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", 
                    WebkitLineClamp: 3, overflow: "hidden", fontSize: "14px"

                }}>{selected?.desci}</div>
                <div style={{ color: "#00000073" }}>({selected?.lat}, {selected?.lon})</div>
            </div>
            <VoteBox points={points} />
            
        </div>


    )
}

export default MapBoxDetail