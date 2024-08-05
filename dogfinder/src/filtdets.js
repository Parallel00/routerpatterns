import React from 'react';
import { useParams } from 'react-router-dom';
import Dets from './dets';


function FiltDet({ dogs }) {
  const { name } = useParams();

  if (name) {
    const dogChoice = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <Dets dog={dogChoice} />;
  }

  return null;
}

export default FiltDet;