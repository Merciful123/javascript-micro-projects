import React, { useState, useEffect } from "react";
import { getPhotos } from "../api";

const Card = ({ title, photo }) => (
  <div className="photo">
    <img src={photo} alt={title} />
  </div>
);

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos().then(data => setPhotos(data));
  }, []);
  return (
    <div className="photos">
      {photos &&
        photos.map(({ id, title, url }) => (
          <Card key={id} title={title} photo={url} />
        ))}
    </div>
  );
};

export default Photos;
