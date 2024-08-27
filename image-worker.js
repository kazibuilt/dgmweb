self.addEventListener('message', async (event) => {
  const { imageUrl, index } = event.data;

  const response = await fetch(imageUrl);
  const blob = await response.blob();

  // Send the image data to the UI thread
  self.postMessage({ blob, index });
});
