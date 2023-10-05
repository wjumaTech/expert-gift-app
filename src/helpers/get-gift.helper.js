export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=XF2G1GxR5PW2sakGWlekXF5GX2rssPzW&q=${category}&limit=5`;

  const response = await fetch(url);
  const { data } = await response.json();

  const giftsDocuments = data.map(img => ({
    id: img.id,
    title: img.title,
    image: img.images.downsized_medium.url
  }));

  return giftsDocuments;

};