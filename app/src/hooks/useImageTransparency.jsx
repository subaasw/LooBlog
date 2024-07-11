import { useState, useEffect } from "react";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const useImageTransparency = (imageSource) => {
  const [hasTransparency, setHasTransparency] = useState(false);

  useEffect(() => {
    if (!imageSource) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSource;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha < 255) {
          setHasTransparency(true);
          return;
        }
      }
      setHasTransparency(false);
    };
  }, [imageSource]);

  return hasTransparency;
};

export default useImageTransparency;
