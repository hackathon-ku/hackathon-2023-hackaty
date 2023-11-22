import React from 'react'
import "./MapBoxDetail.css";

function TagBox({ text }: any) {
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



function MapBoxDetail({ selected }: any) {
    const lst_tag = ["tag1", "tag2", "tag3"]
    return (
        <div className='map_box_container'>
            {selected ? (selected.m_id) : (null)}
            <div style={{ margin: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>ฟุตบาตไม่เสมอ</div>
                <div style={{ display: "flex", gap: "8px" }}>
                    {lst_tag.map((item) => {
                        return (
                            <TagBox text={item} />
                        )

                    })}</div>


            </div>
        </div>


    )
}

export default MapBoxDetail