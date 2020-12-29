import React, {useState, useEffect} from 'react';

export const CurrentDateTime =(props)=>{
    const [dateTime,setDateTime]=useState(new Date())

    useEffect(()=>{
        console.log('Clock Mounted')
        const intervalID=setInterval(()=>{setDateTime(new Date())},1000)
        
        return ()=>{
            console.log('Clock Umounted');

            clearInterval(intervalID);
            console.log('Clock Umounted');
        }
    },[]
    
    )

    return (<div>{dateTime.toLocaleTimeString()}</div>);
}