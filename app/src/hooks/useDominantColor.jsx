import { useState, useEffect } from "react";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const useDominantColor = (imageSource) => {
  const [dominantColor, setDominantColor] = useState("");

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

      const colorCount = {};

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const color = `rgb(${r}, ${g}, ${b})`;

        if (colorCount[color]) {
          colorCount[color]++;
        } else {
          colorCount[color] = 1;
        }
      }

      let minCount = Infinity;
      let rarestColor = "";

      for (const color in colorCount) {
        if (colorCount[color] < minCount) {
          minCount = colorCount[color];
          rarestColor = color;
        }
      }

      setDominantColor(rarestColor);
    };
  }, [imageSource]);

  return dominantColor;
};

export default useDominantColor;
