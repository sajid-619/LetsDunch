import React from 'react';
import Gallery from 'react-grid-gallery';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const IMAGES = [
    {
      src:
        'https://screen-api.eatwith.com/files/1208516/-/scale_crop/370x225/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/1208516/-/scale_crop/370x225/center/-/progressive/yes/',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src:
        'https://screen-api.eatwith.com/files/1325011/-/scale_crop/370x225/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/1325011/-/scale_crop/370x225/center/-/progressive/yes/',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src:
        'https://screen-api.eatwith.com/files/627127/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/627127/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnailWidth: 112,
      thumbnailHeight: 78,
    },
    {
      src:
        'https://screen-api.eatwith.com/files/1208519/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/1208519/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src:
        'https://screen-api.eatwith.com/files/1208518/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/1208518/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src:
        'https://screen-api.eatwith.com/files/1325012/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnail:
        'https://screen-api.eatwith.com/files/1325012/-/scale_crop/690x430/center/-/progressive/yes/',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
  ];

  return (
    <div className="photoGallery__wrap">
      <h4 className="photoGallery__title">Photos & videos</h4>
      <div className="gallery-wrap">
      <Gallery images={IMAGES} />
      </div>
    </div>
  );
};

export default PhotoGallery;
