import React from 'react';

const ImageList = props => {
    // restructure out the 3 properties of image and don't need write id.xx three times
    const images = props.images.map( ({description, id, urls}) => { 
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>
};

export default ImageList;
