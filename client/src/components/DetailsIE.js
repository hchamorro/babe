import React from 'react';

function DetailsIE(props) {
    return(
        <div class="flex mb-4" key={props.id}>
        {/* image column */}
        <div class="w-1/2 h-12">
            {/* {props.img.map(i => {
                return <img src={i.img} />
            })} */}
            <img src={props.img} />
            {console.log(props.img)}
        </div>
        {/* title & Description column */}
        <div class="w-1/2 h-12">{props.title}</div>
        <div class="w-1/2 h-12">{props.description}</div>
        <div class="w-1/2 h-12">{props.price}</div>

    </div>
    )
}

export default DetailsIE; 