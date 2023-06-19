import { useEffect, useState } from "react";

export default function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.alert("マウントされました");
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.alert("アンマウントされました");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
