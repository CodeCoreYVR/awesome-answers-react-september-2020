import React,{useState, useEffect} from 'react';
// useState - Hook
// useState is a hook which we import from 'react' library;
// State in a useState doesnt need to be an object, it can be any datatype like array, number, string etc
// You can use state as many times as you want in a gient component for all the different things you want to track
// When you are updating a state it will replace the value that was before the update as opposed to how state used to work in the past 

// useEffect
// This give us an ability of componentDidMount, componentDidUpdate and componentWillUnmount - which are our life cycle methods

// componentDidUpdate- To get an effect of componentDidupdate we pass an optianal arugment of an array with an element of state that we want to track to useEffect(), Which only trigers at the change of that state



export const Counter=(props)=>{
    // const array=useState(0);
    // array[0]
    // array[1]
    const [count, setCount]=useState(props.count); // useState can have aany datatype like string, numbers, Objects arrays from which we want to initialize the state.
    // it returns any array and to make it more user friendly we destructure the returned array like above
    // const increment=()=>setCount(count+1)
    const [text,setText]=useState('');
    
    useEffect(()=>{
        console.log('This should run once')
    },[])

    useEffect(()=>{
        console.log('Use effect triggered');
        document.title=count
    },[count])
    useEffect(()=>{
        console.log('Use effect triggered for text change');
        
    },[text])

    return(
        <div>
        <p>Counter {text} is: {count}</p>
        {/*<button onClick={increment}> +1</button>*/}
        <button onClick={()=>setCount(count+1)}> +1</button>
        <button onClick={()=>setCount(count-1)}> -1 </button> 
        <button onClick={()=>setCount(props.count)}> Reset </button> 
        <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        
        </div>
        );

}