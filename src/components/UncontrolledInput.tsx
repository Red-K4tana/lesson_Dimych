import React, {ChangeEvent} from "react";


type propsType = {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const UncontrolledInput = (props: propsType) => {


    return (
        <input type="text" value={props.name} onChange={props.onChangeHandler}/>
    )
}