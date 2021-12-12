import React, {useState} from "react";

type OnOffPropsType = {
    toggleCollapsed: (value: boolean)=> void
}

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(true)
    //=======CSS===========
    const onStyle = {
        'margin-right': '1px',
        width: '30px',
        height: '30px',
        border: '2px solid black',
        display: 'inline-block',
        'background-color': on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        display: 'inline-block',
        'background-color': on ? 'white' : 'red',
    }
    const indicatorStyle = {
        margin: '5px',
        width: '10px',
        height: '10px',
        border: '2px solid black',
        'border-radius': '10px',
        display: 'inline-block',
        'background-color': on ? 'green' : 'red',
    }
    //=====================
    const onClickHandler = (value: boolean)=> {
        setOn(value)
        props.toggleCollapsed(value)
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>ON</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}