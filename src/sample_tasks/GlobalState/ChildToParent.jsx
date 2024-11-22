import React, { useState } from 'react';

export function ParentComponent () {
    const [dataFromChild, setDataFromChild] = useState(null);

    const  handleDataFromChild =  (data) => {
        setDataFromChild(data);
    };

    return(
        <div>
            <h3>Parent:</h3>
            <p>
                Data from Child: <b>{dataFromChild}</b>
            </p>

            <span/>
            <ChildComponent sendDataToParent={handleDataFromChild}/>
        </div>
    );
}

function ChildComponent(props){
    return (
        <div>
            <h3>Child:</h3>
            <input placeholder="Child Input"
            onChange={(e) => props.sendDataToParent(e.target.value)}/>
        </div>
    );
}