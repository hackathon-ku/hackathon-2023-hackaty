import React from 'react'
import "./MapBoxDetail.css";


function MapBoxDetail({ selected }: any) {
    return (
        <div className='map_box_container'>
            {/* {selected ? (selected.m_id) : (null)} */}
            <div style={{ backgroundColor: "black", margin: "1rem" }}></div>
            <div style={{ backgroundColor: "red", margin: "1rem" }}></div>

        </div>
    )
}

export default MapBoxDetail