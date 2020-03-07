import React from 'react';

function Details(props) {
    return(
        <div class="flex mb-4" key={props.id}>
        {/* image column */}
        <div class="w-1/2 h-12">
            <img src={props.img_URL} />
        </div>
        {/* title & Description column */}
        <div class="w-1/2 h-12">{props.title}</div>
    </div>
    )
}

export default DetailsIE; 