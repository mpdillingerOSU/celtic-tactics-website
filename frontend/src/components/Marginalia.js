import React from 'react';

function Marginalia({imgSrc, alt, height, top, right, bottom, left, opacity, mirrorX}) {
    return (
        <div className="marginalia-container" style={{height: height != undefined ? height : "25vh", top: top, right: right, bottom: bottom, left: left}}>
            <img className={"marginalia-img" + (mirrorX === true ? " mirror-x" : "")} src={imgSrc} alt={alt} style={{opacity: opacity != undefined ? opacity : "75%"}}/>
        </div>
    );
}

export default Marginalia;