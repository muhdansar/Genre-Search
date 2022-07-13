import React from "react";

const ImagePlaceholder = (props) => {

    return (
<div className="albums">
    <div className="individual">
        <img src={props.imageLinkFirst} alt="album cover"></img>
            <h4>{props.albumFirst}</h4>
            <p>{props.yearFirst}</p>
    </div>
    <div className="individual">
        <img src={props.imageLinkSecond} alt="album cover"></img>
          <h4>{props.albumSecond}</h4>
          <p>{props.yearSecond}</p>
    </div>
    <div className="individual">
        <img src={props.imageLinkThird} alt="album cover"></img>
        <h4>{props.albumThird}</h4>
        <p>{props.yearThird}</p>
    </div>
</div>
    )
}

export default ImagePlaceholder; 