import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = (value: boolean)=> {
        setCollapsed(value)
    }



    const [name, setName] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setName(event.currentTarget.value)
    }

    return (
        <div>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff toggleCollapsed={toggleCollapsed}/>
            <Accordion titleValue={'Menu'} collapsed={collapsed}/>
            <Accordion titleValue={'Users'}  />

            <UncontrolledInput name={name} onChangeHandler={onChangeHandler}/>
            <span>{name}</span>
        </div>
    )


}


export default App;

