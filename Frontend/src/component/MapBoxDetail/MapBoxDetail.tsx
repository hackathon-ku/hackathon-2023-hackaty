import React from 'react'
import "./MapBoxDetail.css";


function MapBoxDetail({ selected }: any) {
    return (
        <div className='map_box_container'>
            {/* {selected ? (selected.m_id) : (null)} */}
            <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>ฟุตบาตไม่เสมอ</div>
                <div>[tag1,tag2]</div>
                <div>wordwordwordwordwordwordwordwordwo
                    rdwordwordwordwordwordwordwordwordw
                </div>
                <div>location</div>

            </div>
            <div style={{ backgroundColor: "red", margin: "1rem" }}></div>

        </div>
    )
}

export default MapBoxDetail