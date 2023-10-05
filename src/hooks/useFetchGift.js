import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/get-gift.helper';

export const useFetchGift = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const giftsDocuments = await getGifts(category);
    setIsLoading(false);
    setImages(giftsDocuments);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};